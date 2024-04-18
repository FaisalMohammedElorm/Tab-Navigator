import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import Settings from './screens/Settings';
import CourseList from './screens/CourseList';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarLabelPosition:"beside-icon",
        tabBarShowLabel:true,
        tabBarActiveTintColor:"purple",
       
      }}>
       {/** Course List */}
        <Tab.Screen name="Course List" component={CourseList} options={{
          tabBarIcon: () => <AntDesign name="book" size={24} color="black" />
        }}/>
        {/** My Profile */}
        <Tab.Screen name="Profile Screen" component={ProfileScreen} options={{
          tabBarLabel:"My Profile",
          tabBarIcon: ({color}) => <Ionicons name ="person" size ={20} color={color}/>
          ,
          tabBarBadge:3
        }}/>
         {/** Settings*/}
        <Tab.Screen name="Settings" component={Settings} options={{
          tabBarIcon: () => <Feather name="settings" size={24} color="black" />
        }} />
       
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App