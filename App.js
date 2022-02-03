import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function App() {
  const [resultText, setText] = useState('');
  const [isResult, setResult] = useState(false);
  const OnButtonClick = text => {
    console.log(text);

    setText(resultText + text);
  };
  const CheckResult = () => {
    if (resultText == '1+3+9') {
      setResult(true);
      console.log('Result', resultText);
    } else {
      console.log('invalid Result', resultText);
      setResult(false);
    }
  };
  useEffect(() => {
    CheckResult()
  });

  return (
    <View style={styles.container}>
      <View
        style={{flex: 1, alignSelf: 'flex-end', justifyContent: 'flex-end'}}>
        <Text style={styles.outputText}>{resultText}</Text>
      </View>
      <View style={styles.split}></View>
      <View style={{flex: 1.2, paddingTop: 10}}>
        <View style={styles.operatorView}>
          <Text
            style={styles.inputButton}
            style={styles.inputButton}
            onPress={() => {
              OnButtonClick('/');
            }}>
            /
          </Text>
          <Text
            style={styles.inputButton}
            style={styles.inputButton}
            onPress={() => {
              OnButtonClick('x');
            }}>
            X
          </Text>
          <Text
            style={styles.inputButton}
            style={styles.inputButton}
            onPress={() => {
              OnButtonClick('-');
            }}>
            -
          </Text>
          <Text
            style={styles.inputButton}
            onPress={() => {
              OnButtonClick('+');
            }}>
            +
          </Text>
          <View style={styles.circle}>
            <Text style={styles.equalButton}>=</Text>
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
            <Text
              style={styles.inputButton}
              style={styles.inputButton}
              onPress={() => {
                OnButtonClick('+/-');
              }}>
              +/-
            </Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                OnButtonClick('%');
              }}>
              %
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text
              style={styles.inputButton}
              onPress={() => {
                OnButtonClick('7');
              }}>
              7
            </Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                OnButtonClick('8');
              }}>
              8
            </Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                OnButtonClick('9');
              }}>
              9
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text
              style={styles.inputButton}
              onPress={() => {
                OnButtonClick('4');
              }}>
              4
            </Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                OnButtonClick('5');
              }}>
              5
            </Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                OnButtonClick('6');
              }}>
              6
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text
              style={styles.inputButton}
              onPress={() => {
                OnButtonClick('1');
              }}>
              1
            </Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                OnButtonClick('2');
              }}>
              2
            </Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                OnButtonClick('3');
              }}>
              3
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text
              style={styles.inputButton}
              onPress={() => {
                OnButtonClick('.');
              }}>
              .
            </Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                OnButtonClick('0');
              }}>
              0
            </Text>
            <Text
              style={styles.inputButton}
              onPress={() => {
                OnButtonClick('00');
              }}>
              00
            </Text>
          </View>
        </View>
      </View>
      {isResult ? (
        <TouchableOpacity
          style={styles.ResultView}
          onPress={() => {
            setResult(false);
            setText('')
          }}>
          <Text style={{fontSize: 25, color: '#f0f0f0'}}>Hello World</Text>
        </TouchableOpacity>
      ) : null}
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
  ResultView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 280,
    width: 250,
    position: 'absolute',
    flex: 1,
    backgroundColor: '#9c9e9d',
    borderRadius: 30,
    elevation: 4,
    alignSelf: 'center',
    marginVertical: 200,
    opacity: 0.8,
  },
});