import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import Settings from './screens/Settings';
import CourseList from './screens/CourseList';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Course List" component={CourseList} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Profile Screen" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App