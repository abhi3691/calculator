import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function App() {
  const [text, setText] = useState([]);
  return (
    <View style={styles.container}>
      <View
        style={{flex: 1, alignSelf: 'flex-end', justifyContent: 'flex-end'}}>
        <Text style={styles.outputText}>{text}</Text>
      </View>
      <View style={styles.split}></View>
      <View style={{flex: 1.2, paddingTop: 10}}>
        <View style={styles.operatorView}>
          <Text
            style={styles.inputButton}
            style={styles.inputButton}
            onPress={() => {
              setText('/');
            }}>
            /
          </Text>
          <Text
            style={styles.inputButton}
            style={styles.inputButton}
            onPress={() => {
              setText('X');
            }}>
            X
          </Text>
          <Text
            style={styles.inputButton}
            style={styles.inputButton}
            onPress={() => {
              setText('-');
            }}>
            -
          </Text>
          <Text
            style={styles.inputButton}
            onPress={() => {
              setText('+');
            }}>
            +
          </Text>
          <View style={styles.circle}>
            <Text style={styles.equalButton} onPress={() => {}}>
              =
            </Text>
          </View>
        </View>
        <View style={{marginRight: 50, marginTop: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text
              style={styles.inputButton}
              onPress={() => {
                setText(' ');
              }}>
              C
            </Text>
            <Text style={styles.inputButton}>+/-</Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                setText('%');
              }}>
              %
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text
              style={styles.inputButton}
              onPress={() => {
                setText('7');
              }}>
              7
            </Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                setText('8');
              }}>
              8
            </Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                setText('9');
              }}>
              9
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text
              style={styles.inputButton}
              onPress={() => {
                setText('4');
              }}>
              4
            </Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                setText('5');
              }}>
              5
            </Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                setText('6');
              }}>
              6
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text
              style={styles.inputButton}
              onPress={() => {
                setText('1');
              }}>
              1
            </Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                setText('6');
              }}>
              2
            </Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                setText('3');
              }}>
              3
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text
              style={styles.inputButton}
              onPress={() => {
                setText('.');
              }}>
              .
            </Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                setText('0');
              }}>
              0
            </Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                setText('00');
              }}>
              00
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e403f',
  },
  split: {
    backgroundColor: '#363636',
    height: 2,
    width: '100%',
    borderRadius: 10,
  },
  inputButton: {
    fontSize: 30,
    color: '#7e807f',
    paddingVertical: 12,
  },
  equalButton: {
    fontSize: 30,
    color: '#7e807f',
  },
  operatorView: {
    position: 'absolute',
    backgroundColor: '#363636',
    height: 325,
    width: 60,
    right: 20,
    top: 30,
    bottom: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#f9f5be',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outputText: {
    fontSize: 40,
    color: '#7e807f',
    margin: 20,
  },
});
