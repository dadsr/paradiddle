import {Redirect} from "expo-router";
import {PaperProvider} from "react-native-paper";

export default function MainScreen() {
  console.log('MainScreen()');
  return (
      <PaperProvider>
        <Redirect href="/(tabs)/Practice" />;
      </PaperProvider>
      )

}
