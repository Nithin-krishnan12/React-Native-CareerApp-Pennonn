import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './screens/home';
import DrawerPage from './DrawerPage';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerPage {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
