import React, {Component} from 'react';
import api from '../../services/api';
import deviceStorage from '../../services/deviceStorage';

import Background from '../../components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  Title,
} from './styles';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
    };
  }

  handleSubmit = async e => {
    const {email, password} = this.state;

    if (!email || !password) {
      alert('Preencha todos os dados');
      return;
    }

    try {
      const response = await api.post('sessions', {email, password});

      if (response.status === 200) {
        await deviceStorage.saveItem('@token', response.data.token);
        this.props.navigation.navigate('Home');
      }
    } catch (err) {
      alert('Email ou senha incorretos.');
    }
  };

  render() {
    return (
      <Background>
        <Container>
          <Title>Login</Title>
          <Form>
            <FormInput
              keyboardType="email-address"
              autoCorrent={false}
              autoCapitalize="none"
              name="email"
              placeholder="Digite seu email"
              onChangeText={email => this.setState({email})}
            />
            <FormInput
              secureTextEntry
              name="password"
              placeholder="Digite sua senha"
              onChange={this.handleChange}
              onChangeText={password => this.setState({password})}
            />

            <SubmitButton onPress={this.handleSubmit}>Entrar</SubmitButton>

            <SignLink
              onPress={() => this.props.navigation.navigate('Register')}>
              <SignLinkText>Cadastre-se</SignLinkText>
            </SignLink>
          </Form>
        </Container>
      </Background>
    );
  }
}
