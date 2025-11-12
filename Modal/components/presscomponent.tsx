import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

export function PressableComponent() {
    return (
        <Pressable
          onPress={() => console.log('Pressed')}>
            <Text style={styles.text}>Show modal message</Text>
          </Pressable>
  );
}

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