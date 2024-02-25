import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

 const SchedulePickUpScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };  
  
  


  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
          colors={['rgba(0,100,0,0.8)', '#ffe993']}
          style={styles.linearGradient}>

        <Text style={styles.title}>Schedule a Date and Time for Pickup:</Text>

        <TouchableOpacity
          onPress={showDatepicker}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Show date picker!</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={showTimepicker}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Show time picker!</Text>
            </View>
        </TouchableOpacity>
     
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}

        <Text style={[styles.dateTimeText, {marginTop: '10%'}]}>Selected:</Text>
        <Text style={[styles.dateTimeText, {marginBottom: '10%'}]}>{date.toLocaleString()}</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home', {
              ScheduleDate: date.toLocaleString(),
            })
          }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Confirm</Text>
            </View>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: '3%',
    borderRadius: 5
  },
  title:{
    fontSize : 36,
    fontWeight : '700',
    textAlign: 'center',
    color : '#fff',
    marginTop : '10%',
    marginBottom: '20%'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    marginTop : '5%',
    borderColor: '#0f5132',
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: 'black',
  },
  dateTimeText: {
    fontSize : 24,
    fontWeight : 'bold',
    textAlign: 'center',
    color : '#fff',
  },
})


export default SchedulePickUpScreen;