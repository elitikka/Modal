import React from 'react';
import { useState } from 'react';
import {Modal, View, Pressable, StyleSheet, Text} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';


const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Pressable onPress={() => setModalVisible(true)}>
          <Text style={styles.text}>Show modal message</Text>
        </Pressable>

        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)} // androidin oma takaisin-nappi?
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.text}>This is modal...</Text>

                <Pressable onPress={() => setModalVisible(false)}>
                  <Text style={styles.close}>Close</Text>
                </Pressable>
              </View>
            </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    backgroundColor: '#e6e6e6ff',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  close: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
  }
})

export default App;