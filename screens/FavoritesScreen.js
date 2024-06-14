import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../components/favoritesSlice';
import HeartButton from '../components/heartButton';

const FavoritesScreen = () => {
  const dispatch = useDispatch();
  const favoriteExerciseIds = useSelector((state) => state.favoriteExercises.favoriteExercises);
  const allExercises = useSelector((state) => state.favoriteExercises.allExercises);

  console.log('Favorite exercise IDs:', favoriteExerciseIds);
  console.log('All exercises:', allExercises);

  const favoriteExercises = allExercises.filter(exercise => favoriteExerciseIds.includes(exercise.id));
  console.log('Filtered favorite exercises:', favoriteExercises);

  const addToFavoritesHandler = (exercise) => {
    dispatch(toggleFavorite(exercise.id));
  };
  console.log('All exercise IDs:', allExercises.map(exercise => exercise.id));
  console.log('Favorite exercise IDs:', favoriteExerciseIds);
  console.log('Favorite Exercises in State:', useSelector((state) => state.favoriteExercises));

  if (!allExercises.length || !favoriteExerciseIds.length) {
    console.log('Data not fully loaded yet');
  }
  const renderInstructions = (instructions) => (
    instructions ? <Text style={styles.instructions}>{instructions.join('\n')}</Text> : null
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={favoriteExercises}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.instructionsText}>{renderInstructions(item.instructions)}</Text>
            {item.gifUrl && (
              <View style={styles.gifContainer}>
                <Image source={{ uri: item.gifUrl }} style={styles.image} />
                <HeartButton
                  isLiked={favoriteExercises.some((ex) => ex.id === item.id)}
                  onPress={() => addToFavoritesHandler(item)}
                />
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
    backgroundColor: '#18181b',
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#B26ECE',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'white',
    marginBottom: 8,
    paddingBottom: 8,
    width: '100%',
  },
  instructionsText: {
    textAlign: 'justify',
    margin: 8,
    color: 'white',
  },
  image: {
    width: 320,
    height: 240,
    borderColor: '#ddd',
    borderWidth: 10,
    borderRadius: 15,
    padding: 5,
  },
  gifContainer: {
    position: 'relative',
    alignItems: 'center',
    marginTop: 16,
  },

});

export default FavoritesScreen;