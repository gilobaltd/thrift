import { NavigationContainer } from "@react-navigation/native"
import { StackNavigator } from "./screens/Stack"

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>

    </NavigationContainer>
  );
}