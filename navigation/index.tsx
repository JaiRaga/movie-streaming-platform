/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  FontAwesome,
  AntDesign,
  MaterialIcons,
  Ionicons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ComingSoonScreen from '../screens/ComingSoonScreen';
import DownloadsScreen from '../screens/DownloadsScreen';
import HomeScreen from '../screens/HomeScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import SearchScreen from '../screens/SearchScreen';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
  BottomTabStackParamList,
} from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator<BottomTabStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

const ComingSoon = createNativeStackNavigator<BottomTabStackParamList>();

const ComingSoonStackNavigator = () => {
  return (
    <ComingSoon.Navigator>
      <ComingSoon.Screen
        name="ComingSoonScreen"
        component={ComingSoonScreen}
        options={{ headerShown: false }}
      />
    </ComingSoon.Navigator>
  );
};

const Search = createNativeStackNavigator<BottomTabStackParamList>();

const SearchStackNavigator = () => {
  return (
    <Search.Navigator>
      <Search.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </Search.Navigator>
  );
};

const Downloads = createNativeStackNavigator<BottomTabStackParamList>();

const DownloadsStackNavigator = () => {
  return (
    <Downloads.Navigator>
      <Downloads.Screen
        name="DownloadsScreen"
        component={DownloadsScreen}
        options={{ headerShown: false }}
      />
    </Downloads.Navigator>
  );
};

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesignIcon name="home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Coming_Soon"
        component={ComingSoonStackNavigator}
        options={{
          title: 'Coming Soon',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIconsIcon name="video-library" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <IoniconsIcon name="search" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Downloads"
        component={DownloadsStackNavigator}
        options={{
          title: 'Downloads',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesignIcon name="download" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

function AntDesignIcon(props: {
  name: React.ComponentProps<typeof AntDesign>['name'];
  color: string;
}) {
  return <AntDesign size={24} style={{ marginBottom: -3 }} {...props} />;
}

function MaterialIconsIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={24} style={{ marginBottom: -3 }} {...props} />;
}

function IoniconsIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
}
