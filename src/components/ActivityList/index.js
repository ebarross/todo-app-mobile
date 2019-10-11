import React, {Component} from 'react';
import api from '../../services/api';
import deviceStorage from '../../services/deviceStorage';

import ActivityItem from '../ActivityItem';
import Button from '../Button';

import {Container, ListContainer, List, TextNoContent} from './styles';

export default class ActivityList extends Component {
  constructor(props) {
    super(props);

    this.initialState = {activities: []};

    this.state = this.initialState;
  }

  async componentDidMount() {
    await this.getActivities();
  }

  getActivities = async () => {
    const token = await deviceStorage.getItem('@token');

    const response = await api.get('activities', {
      headers: {Authorization: `Bearer ${token}`},
    });

    this.setState({activities: response.data});
  };

  render() {
    return (
      <Container>
        <ListContainer>
          {this.state.activities.length === 0 ? (
            <TextNoContent>Nenhuma atividade por aqui :(</TextNoContent>
          ) : (
            <List
              data={this.state.activities}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => (
                <ActivityItem data={item} navigation={this.props.navigation} />
              )}
            />
          )}
        </ListContainer>
        <Button
          onPress={() =>
            this.props.navigation.navigate('ActivityForm', {
              onGoBack: this.getActivities,
            })
          }>
          Adicionar atividade
        </Button>
      </Container>
    );
  }
}
