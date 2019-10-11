import React, {Component} from 'react';
import api from '../../services/api';
import deviceStorage from '../../services/deviceStorage';

import Background from '../../components/Background';

import {Container, Form, FormInput, AddButton} from './styles';

export default class ActivityForm extends Component {
  static navigationOptions = {
    title: 'Adicionar atividade',
  };

  constructor(props) {
    super(props);

    this.initialState = {
      title: '',
      description: '',
    };

    this.state = this.initialState;
  }

  handleSubmit = async () => {
    const {title, description} = this.state;

    if (!title || !description) {
      alert('Preencha todos os dados.');
      return;
    }

    const token = await deviceStorage.getItem('@token');

    const response = await api.post(
      'activities',
      {title, description},
      {
        headers: {Authorization: `Bearer ${token}`},
      },
    );

    if (response.status === 200) {
      this.props.navigation.state.params.onGoBack();
      this.props.navigation.goBack();
    }
  };

  render() {
    return (
      <Background>
        <Container>
          <Form>
            {/* <Title>Adicionar atividade</Title> */}
            <FormInput
              autoCorrent={false}
              autoCapitalize="none"
              placeholder="Digite o título"
              onChangeText={title => this.setState({title})}
            />

            <FormInput
              autoCorrent={false}
              autoCapitalize="none"
              placeholder="Digite a descrição"
              onChangeText={description => this.setState({description})}
            />

            <AddButton onPress={this.handleSubmit}>Adicionar</AddButton>
          </Form>
        </Container>
      </Background>
    );
  }
}
