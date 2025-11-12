import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { PressableComponent } from '@/components/presscomponent'; // show modal message -pressable component tehty erikseen komponentit -kansioon


const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <PressableComponent/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    color: 'black'
  }
})

export default App;