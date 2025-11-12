import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Pressable
          onPress={() => console.log('Pressed')}>
            <Text style={styles.text}>Show modal message</Text>
          </Pressable>
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