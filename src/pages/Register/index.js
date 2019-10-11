import React, {Component} from 'react';
import api from '../../services/api';

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

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async e => {
    const {name, email, password, confirmPassword} = this.state;

    if (!name || !email || !password || !confirmPassword) {
      alert('Preencha todos os dados.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Senhas não conferem.');
      return;
    }

    try {
      const response = await api.post('users', {name, email, password});

      if (response.status === 200) {
        alert('Cadastro criado com sucesso. Agora você pode fazer login.');
      }
    } catch (err) {
      alert('Algo deu errado.');
    }
  };
  render() {
    return (
      <Background>
        <Container>
          <Title>Cadastro</Title>
          <Form>
            <FormInput
              autoCorrent={false}
              autoCapitalize="none"
              placeholder="Nome completo"
              onChangeText={name => this.setState({name})}
            />

            <FormInput
              keyboardType="email-address"
              autoCorrent={false}
              autoCapitalize="none"
              placeholder="Endereço de email"
              onChangeText={email => this.setState({email})}
            />

            <FormInput
              secureTextEntry
              placeholder="Senha"
              onChangeText={password => this.setState({password})}
            />

            <FormInput
              secureTextEntry
              placeholder="Confirmar senha"
              onChangeText={confirmPassword => this.setState({confirmPassword})}
            />

            <SubmitButton onPress={this.handleSubmit}>Cadastrar</SubmitButton>

            <SignLink onPress={() => this.props.navigation.navigate('Login')}>
              <SignLinkText>Fazer login</SignLinkText>
            </SignLink>
          </Form>
        </Container>
      </Background>
    );
  }
}
