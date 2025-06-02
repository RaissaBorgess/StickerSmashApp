import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";


export default function TabLayout() {
  return (
       <Tabs screenOptions={{
        tabBarActiveTintColor: '#BBA6F5',
        headerStyle: { 
          backgroundColor: '#414DF2'
        },
        headerShadowVisible: false,
        headerTintColor: '#BBA6F5',
        tabBarStyle: {
          backgroundColor: '#414DF2',
        }
       }}>
       <Tabs.Screen 
       name="index" 
       options={{ 
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name ={focused ? 'home' : 'home-outline'} color={color} size={24} />
        ),
        }} 
        /> 
        <Tabs.Screen 
       name="about" 
       options={{ 
        title: 'Sobre',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name ={focused ? 'reader' : 'reader-outline'} color={color} size={24} />
        ),
        }} 
        /> 
       </Tabs>
  );
}
