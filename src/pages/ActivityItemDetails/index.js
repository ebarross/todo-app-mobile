import React, {Component} from 'react';
import api from '../../services/api';
import deviceStorage from '../../services/deviceStorage';

import Background from '../../components/Background';

import {Container, Title, Description, Status, TextBold} from './styles';

export default class ActivityItemDetails extends Component {
  static navigationOptions = {
    title: 'Detalhes de atividade',
  };

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      status: '',
    };
  }

  componentDidMount() {
    this.getActivity();
  }

  async getActivity() {
    const token = await deviceStorage.getItem('@token');

    const activityId = JSON.stringify(
      this.props.navigation.getParam('activity_id', 'NO-ID'),
    );
    try {
      const response = await api.get(`activities/${activityId}`, {
        headers: {Authorization: `Bearer ${token}`},
      });

      if (response.status === 200) {
        this.setState(response.data);
      }
    } catch (err) {
      alert('Algo deu errado');
    }
  }

  render() {
    return (
      <Background>
        <Container>
          <Title>{this.state.title}</Title>
          <Description>
            <TextBold>Descrição</TextBold>: {this.state.description}
          </Description>
          <Status>
            <TextBold>Status</TextBold>: {this.state.status}
          </Status>
        </Container>
      </Background>
    );
  }
}
