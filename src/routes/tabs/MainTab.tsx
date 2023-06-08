import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ROUTES from 'routes/name';
import Home from 'screens/Home/Home';
import Profile from 'screens/Profile/Profile';
import colors from 'theme/colors';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  const tabBarIcon = ({
    focused,
    color,
    size,
    routeName,
  }: {
    focused: any;
    color?: string | number | undefined;
    size?: number | undefined;
    routeName: string;
  }) => {
    let iconName;
    if (routeName === 'HOME_SCREEN') {
      iconName = focused ? 'home-sharp' : 'md-home-outline';
    } else {
      iconName = focused ? 'folder' : 'ios-folder-outline';
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused, size }) => {
            return tabBarIcon({
              color,
              focused,
              routeName: route.name,
              size,
            });
          },
          tabBarActiveTintColor: colors.red,
          tabBarInactiveTintColor: colors.black,
          headerShown: true,
        })}
      >
        <Tab.Screen name={ROUTES.HOME_SCREEN} component={Home} />
        <Tab.Screen name={ROUTES.PROFILE_SCREEN} component={Profile} />
      </Tab.Navigator>
    </View>
  );
};

export default MainTab;
