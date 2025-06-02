import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";


export default function TabLayout() {
  return (
       <Tabs screenOptions={{
        tabBarActiveTintColor: '#414DF2',
        headerStyle: { 
          backgroundColor: '#BBA6F5'
        },
        headerShadowVisible: false,
        headerTintColor: '#414DF2',
        tabBarStyle: {
          backgroundColor: '#BBA6F5',
        }
       }}>
       <Tabs.Screen 
       name="index" 
       options={{ 
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name ={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
        ),
        }} 
        /> 
        <Tabs.Screen 
       name="about" 
       options={{ 
        title: 'Sobre',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name ={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
        ),
        }} 
        /> 
       </Tabs>
  );
}
