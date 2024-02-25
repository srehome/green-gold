import React, { useState } from 'react';
import { View, Button, Text,SafeAreaView,StyleSheet,ToastAndroid } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

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
      <Button style={styles.button} onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
     
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}

      <Text>selected: {date.toLocaleString()}</Text>
     <Button title=" Confirm"
              onPress={() => {
                navigation.navigate('Home', {
                  ScheduleDate: date
                })
              }}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom : 190,
    marginTop:300,
    backgroundColor: '#black',
    
    }
})


export default SchedulePickUpScreen;