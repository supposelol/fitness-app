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
            <Text style={styles.logItemText}>{`Date: ${item.date}`}</Text>
            <Text style={styles.logItemText}>{`Workout Name: ${item.workoutName}`}</Text>
            <Text style={styles.logItemText}>{`Duration: ${item.duration}`}</Text>
            <Text style={styles.logItemText}>{`Exercises Completed: ${item.exercisesCompleted}`}</Text>
            <Text style={styles.logItemText}>{`Total Weight Lifted: ${item.totalWeightLifted}`}</Text>
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
    color: '#FF007F',
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
});

export default LogsList;
