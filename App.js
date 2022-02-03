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

    const operationClick =(text) =>{
      let operations = ['c','+/-','%','/','x','-','+']
      if(text == 'c'){
        setText('');
        setResult(false);
        return
      }
      if(text == '+/-'){
        return setText(resultText.toString().substring(0,resultText.length-1))
      }
      if(operations.includes(resultText.toString().split("").pop())) return;
      setText(resultText+text)
    }  

  useEffect(() => {
    CheckResult();
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
          <TouchableOpacity
          
            style={styles.circle2}
            onPress={() => {
              operationClick('/');
            }}>
            <Text style={styles.inputButton}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.circle2}
            onPress={() => {
              operationClick('x');
            }}>
            <Text style={styles.inputButton}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.circle2}
            onPress={() => {
              operationClick('-');
            }}>
            <Text style={styles.inputButton}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.circle2}
            onPress={() => {
              operationClick('+');
            }}>
            <Text style={styles.inputButton}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Text style={styles.equalButton}>=</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginRight: 50, marginTop: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity
              style={styles.circle2}
              onPress={() => {
                operationClick('c')
              }}>
              <Text style={styles.inputButton}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circle2}
              onPress={() => {
                operationClick('+/-');
              }}>
              <Text style={styles.inputButton}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circle2}
              onPress={() => {
                operationClick('%');
              }}>
              <Text style={styles.inputButton}>%</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity
              style={styles.circle2}
              onPress={() => {
                OnButtonClick(7);
              }}>
              <Text style={styles.inputButton}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circle2}
              onPress={() => {
                OnButtonClick(8);
              }}>
              <Text style={styles.inputButton}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circle2}
              onPress={() => {
                OnButtonClick(9);
              }}>
              <Text style={styles.inputButton}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity
              style={styles.circle2}
              onPress={() => {
                OnButtonClick(4);
              }}>
              <Text style={styles.inputButton}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circle2}
              onPress={() => {
                OnButtonClick(5);
              }}>
              <Text style={styles.inputButton}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circle2}
              onPress={() => {
                OnButtonClick(6);
              }}>
              <Text style={styles.inputButton}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity
              style={styles.circle2}
              onPress={() => {
                OnButtonClick(1);
              }}>
              <Text style={styles.inputButton}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circle2}
              onPress={() => {
                OnButtonClick(2);
              }}>
              <Text style={styles.inputButton}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circle2}
              onPress={() => {
                OnButtonClick(3);
              }}>
              <Text style={styles.inputButton}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity
              style={styles.circle2}
              onPress={() => {
                OnButtonClick('.');
              }}>
              <Text style={styles.inputButton}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circle2}
              onPress={() => {
                OnButtonClick(0);
              }}>
              <Text style={styles.inputButton}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circle2}
              onPress={() => {
                OnButtonClick('00');
              }}>
              <Text style={styles.inputButton}>00</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {isResult ? (
        <TouchableOpacity
          style={styles.ResultView}
          onPress={() => {
            setResult(false);
            setText('');
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
  circle2: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 3.5,
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
