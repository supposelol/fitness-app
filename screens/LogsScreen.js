import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Icon, Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { addLog } from '../components/logsSlice';
import LogsList from '../components/logsList';
import Modal from 'react-native-modal';

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
};

LocaleConfig.defaultLocale = 'en';

const LogsScreen = () => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [workoutName, setWorkoutName] = useState('');
  const [duration, setDuration] = useState('');
  const [exercisesCompleted, setExercisesCompleted] = useState('');
  const [totalWeightLifted, setTotalWeightLifted] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleDatePress = (day) => {
    setSelectedDate(day.dateString);
    toggleModal();
  };

  const handleSaveLog = () => {

    const logData = {
      date: selectedDate,
      workoutName,
      duration,
      exercisesCompleted,
      totalWeightLifted,
    };

    dispatch(addLog(logData));
    toggleModal();
  };

  const handleTotalWeightLiftedChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setTotalWeightLifted(isNaN(numericText) ? text : `${numericText} lbs`);
  };

  const handleDurationChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setDuration(isNaN(numericText) ? text : `${numericText} mins`);
  };

  return (
    <View style={styles.screen}>
      <Calendar
        onDayPress={handleDatePress}
        markedDates={{ [selectedDate]: { selected: true, disableTouchEvent: true } }}
        theme={{
          backgroundColor: '#18181b',
          calendarBackground: '#18181b',
          textSectionTitleColor: '#fff',
          selectedDayBackgroundColor: '#9B59B6',
          selectedDayTextColor: '#fff',
          todayTextColor: '#B26ECE',
          dayTextColor: '#fff',
          textDisabledColor: '#6c757d',
          dotColor: '#B26ECE',
          selectedDotColor: '#fff',
          arrowColor: '#B26ECE',
          monthTextColor: '#B26ECE',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
      <LogsList />
      <Modal key={selectedDate} isVisible={isModalVisible} onBackdropPress={toggleModal} style={styles.modalContainer}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Log Workout</Text>
            <Text style={styles.inputTitle}>Workout Name</Text>
            <TextInput
              style={styles.input}
              value={workoutName}
              placeholder='New workout log'
              placeholderTextColor="rgba(220, 220, 220, 0.4)"
              onChangeText={(text) => setWorkoutName(text)}
            />
            <Text style={styles.inputTitle}>Duration (mins)</Text>
            <TextInput
              style={styles.input}
              value={duration}
              placeholder='0 mins'
              placeholderTextColor="rgba(220, 220, 220, 0.4)"
              onChangeText={handleDurationChange}
              keyboardType='numeric'
            />
            <Text style={styles.inputTitle}>Exercises Completed</Text>
            <TextInput
              style={styles.input}
              value={exercisesCompleted}
              placeholder='0'
              placeholderTextColor="rgba(220, 220, 220, 0.4)"
              onChangeText={(text) => setExercisesCompleted(text)}
              keyboardType='numeric'
            />
            <Text style={styles.inputTitle}>Total Weight Lifted</Text>
            <TextInput
              style={styles.input}
              value={totalWeightLifted}
              placeholder='0 lbs'
              placeholderTextColor="rgba(220, 220, 220, 0.4)"
              onChangeText={handleTotalWeightLiftedChange}
              keyboardType='numeric'
            />
            <Button
              title="Save"
              onPress={handleSaveLog}
              buttonStyle={styles.saveButton}
              titleStyle={styles.saveButtonText}
            />
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Icon name="close" type="font-awesome" color="#fff" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#18181b',
  },
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modal: {
    backgroundColor: '#333333',
    padding: 20,
    paddingTop: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalTitle: {
    color: '#B26ECE',
    fontSize: 28,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputTitle: {
    color: '#B26ECE',
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#6C3C83',
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#fff',
    margin: 5,
  },
  saveButton: {
    backgroundColor: '#9B59B6',
    borderRadius: 10,
    marginVertical: 10,
    height: 40,
    margin: 5,
  },
  saveButtonText: {
    fontSize: 18,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default LogsScreen;