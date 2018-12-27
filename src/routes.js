import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/main';

const Routes = () => createAppContainer(
  createSwitchNavigator(
    {
      Main,
    },
    {
      initialRouteName: 'Main',
    },
  ),
);

export default Routes;
