import React, {useContext} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {screens} from '../../shared/constants/screens';
import Home from '../../screens/app/home';
import {HomeIcon, SettingsIcon} from 'lucide-react-native';
import typography from '../../shared/theme/typography';
import Settings from '../../screens/app/settings';
import {AppContext} from '../../services/context/app';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  const {color} = useContext(AppContext);

  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        // Styling for the tab indicator
        tabBarIndicatorStyle: {
          position: 'absolute',
          top: 0,
          backgroundColor: color.primary,
        },
        // Active and inactive tab text color
        tabBarActiveTintColor: color.primary,
        tabBarInactiveTintColor: color.placeolder,
        // Show icons in the tab bar
        tabBarShowIcon: true,
        // Styling for the tab label
        tabBarLabelStyle: {
          fontFamily: typography.bold,
          fontSize: typography.scaleFont(12),
        },
      }}>
      {/* Home Tab */}
      <Tab.Screen
        name={screens.home}
        component={Home}
        options={{
          tabBarIcon: HomeTabIcon,
        }}
      />

      {/* Settings Tab */}
      <Tab.Screen
        name={screens.settings}
        component={Settings}
        options={{
          tabBarIcon: SettingsTabIcon,
        }}
      />
    </Tab.Navigator>
  );
}

// Custom Tab Icons

const HomeTabIcon = ({color}) => (
  <HomeIcon color={color} size={typography.scaleFont(24)} />
);

const SettingsTabIcon = ({color}) => (
  <SettingsIcon color={color} size={typography.scaleFont(24)} />
);
