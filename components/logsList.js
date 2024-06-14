import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const LogsList = () => {
  const logs = useSelector((state) => state.logs);

  return (
    <View style={styles.logsListContainer}>
      <Text style={styles.logsListTitle}>Exercise Journal</Text>
      <FlatList
        data={logs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.logItem}>
            <Text style={styles.logItemText}>Date: <Text style={styles.logItemValue}>{item.date}</Text></Text>
            <Text style={styles.logItemText}>Workout Name: <Text style={styles.logItemValue}>{item.workoutName}</Text></Text>
            <Text style={styles.logItemText}>Duration: <Text style={styles.logItemValue}>{item.duration}</Text></Text>
            <Text style={styles.logItemText}>Exercises Completed: <Text style={styles.logItemValue}>{item.exercisesCompleted}</Text></Text>
            <Text style={styles.logItemText}>Total Weight Lifted: <Text style={styles.logItemValue}>{item.totalWeightLifted}</Text></Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logsListContainer: {
    flex: 1,
    backgroundColor: '#18181b',
    padding: 10,
  },
  logsListTitle: {
    color: '#B26ECE',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'white',
    margin: 10,
    paddingTop: 10,
  },
  logItem: {
    backgroundColor: '#333333',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#18181b',
  },
  logItemText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 2,
  },
  logItemValue: {
    color: '#B26ECE',
    fontStyle: 'italic',
  },
});

export default LogsList;