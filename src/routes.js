import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ActivityForm from './pages/ActivityForm';
import ActivityItemDetails from './pages/ActivityItemDetails';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Register,
    App: createStackNavigator(
      {
        Home,
        ActivityForm,
        ActivityItemDetails,
      },
      {
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: '#23d691',
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          },
        },
      },
    ),
  }),
);
