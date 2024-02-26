import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { bodyParts } from '../components/bodyParts';

const ExercisesScreen = () => {
  const navigation = useNavigation();

  const handleBodyPartPress = (bodyPart) => {
    navigation.navigate(`${bodyPart.name}Screen`);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#18181b" barStyle="light-content" />
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={bodyParts}
        keyExtractor={(item) => item.actualName}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleBodyPartPress(item)}>
            <View style={styles.bodyPartContainer}>
              <View style={styles.bodyPartContent}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.actualName}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18181b',
    padding: 10,
    paddingBottom: 0,
  },
  flatListContainer: {
    flexGrow: 1,
  },
  bodyPartContainer: {
    alignItems: 'center',
    margin: 10,
  },
  bodyPartContent: {
    backgroundColor: 'black',
    padding: 4,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#18181b',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  text: {
    color: '#FF007F',
    fontSize: 18.5,
    marginTop: 6,
    marginBottom: 4,
    textAlign: 'center',
    textTransform: 'capitalize',
    textShadowColor: 'rgba(255, 102, 178, 0.3)',
    textShadowOffset: { width: 0.5, height: 1 },
    textShadowRadius: 7,
  },
});

export default ExercisesScreen;