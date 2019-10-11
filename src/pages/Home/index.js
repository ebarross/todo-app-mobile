import React, {Component} from 'react';
import storageDevice from '../../services/deviceStorage';

import Background from '../../components/Background';
import ActivityList from '../../components/ActivityList';

import {Container, LogoutButton} from './styles';
import deviceStorage from '../../services/deviceStorage';

export default class Home extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Minhas atividades',
      headerRight: (
        <LogoutButton onPress={navigation.getParam('doLogout')}>
          Sair
        </LogoutButton>
      ),
    };
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.navigation.setParams({doLogout: this.doLogout});
  }

  doLogout = async () => {
    await deviceStorage.removeItem('@token');
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <Background>
        <Container>
          <ActivityList navigation={this.props.navigation} />
        </Container>
      </Background>
    );
  }
}
