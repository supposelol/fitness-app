import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { fetchAllExercises } from '../api/exerciseApi';

const FavoritesScreen = () => {
  const [favoriteExercisesData, setFavoriteExercisesData] = useState([]);
  const favoriteExercises = useSelector((state) => state.favoriteExercises);

  useEffect(() => {
    const getFavoriteExercisesData = async () => {
      try {
        const allExercisesData = await fetchAllExercises();
        const favoriteExercisesData = allExercisesData.filter((exercise) =>
          favoriteExercises.includes(exercise.id)
        );
        setFavoriteExercisesData(favoriteExercisesData);
      } catch (error) {
        console.error('Error fetching favorite exercises data:', error);
      }
    };

    getFavoriteExercisesData();

  }, [favoriteExercises]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={favoriteExercisesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.text}>{capitalizeFirstLetter(item.name)}</Text>
            {item.instructions && (
              <Text style={styles.instructions}>{item.instructions}</Text>
            )}
            {item.gifUrl && (
              <View style={styles.gifContainer}>
                <Image source={{ uri: item.gifUrl }} style={styles.image} />
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  container: {
    backgroundColor: '#333333',
    padding: 15,
    margin: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#18181b',
  },
  text: {
    color: '#FF007F',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'capitalize',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'white',
    marginBottom: 8,
    paddingBottom: 8,
    width: '100%',
  },
  gifContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 200,
    borderColor: '#ddd',
    borderWidth: 10,
    borderRadius: 15,
    padding: 5,
  },
  instructions: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default FavoritesScreen;
