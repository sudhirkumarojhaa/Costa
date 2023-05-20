import { createStackNavigator } from "@react-navigation/stack";
import Options from "../screens/Options";
import Dashboard from "../screens/Dashboard";
import Payment from "../screens/Payment";
import Listings from "../screens/Listings";

const Stack = createStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Options"
        component={Options}
        options={HeaderOptions}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={HeaderOptions}
      />
      <Stack.Screen
        name="Listings"
        component={Listings}
        options={HeaderOptions}
      />
    </Stack.Navigator>
  );
};

const HeaderOptions = {
  presentation: "modal",
  headerTitleAlign: "center",
  headerBackTitleVisible: false,
};
