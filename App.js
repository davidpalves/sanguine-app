import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomePage from "./src/pages/home-page/home-page";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View>
            <HomePage/>
        </View>
    </SafeAreaView>
  );
};

export default App;
