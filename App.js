import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import AboutUsScreen from "./screens/AboutUs";
import Profile from "./screens/profile";
import Category from "./screens/Category";
import Bestseller from "./screens/Bestseller";
import HomeScreen from "./screens/Home";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Category":
              iconName = "document-text-outline";
              break;
            case "Bestseller":
              iconName = "star-outline";
              break;
            case "Profile":
              iconName = "person-circle-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "black" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={noHead}/>
      <Tab.Screen name="Category" component={Category} options={noHead} />
      <Tab.Screen name="Bestseller" component={Bestseller} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={noHead} /> 
        <Stack.Screen name="SignUp" component={SignUp} options={noHead}/>   
        <Stack.Screen name="Home" component={Tabs} options={noHead}/> 
        <Stack.Screen name="AboutUs" component={AboutUsScreen} options={noHead}/>
        <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;