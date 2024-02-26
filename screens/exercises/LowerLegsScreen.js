import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../components/favoritesSlice';
import { fetchExercisesByBodypart } from '../../api/exerciseApi';
import { Icon } from 'react-native-elements';

const LowerLegsScreen = () => {
  const [exercises, setExercises] = useState([]);
  const dispatch = useDispatch();

  const favoriteExercises = useSelector((state) => state.favoriteExercises);

  useEffect(() => {
    const getExercises = async () => {
      try {
        const exercisesData = await fetchExercisesByBodypart('lower legs');
        setExercises(exercisesData);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    getExercises(); 

  }, [favoriteExercises]);

  const addToFavoritesHandler = (exercise) => {
    dispatch(toggleFavorite(exercise.id));
  };

  const renderInstructions = (instructions) => {
    return instructions ? (
      <Text style={styles.instructions}>{instructions}</Text>
    ) : null;
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const shortTitle = (title) => {
    const words = title.split(' ').slice(0, 5);
    return words.join(' ');
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.text}>{capitalizeFirstLetter(shortTitle(item.name))}</Text>
            <Text style={styles.instructionsText}>{renderInstructions(item.instructions)}</Text>
            <View style={styles.contentContainer}>
              <TouchableOpacity style={styles.favoriteButton} onPress={() => addToFavoritesHandler(item)}>
                <Icon
                  name={favoriteExercises.includes(item.id) ? 'heart' : 'heart-o'}
                  type='font-awesome'
                  color='#FF007F'
                  raised
                  reverse
                />
              </TouchableOpacity>
              {item.gifUrl && (
                <View style={styles.gifContainer}>
                  <Image source={{ uri: item.gifUrl }} style={styles.image} />
                </View>
              )}
            </View>
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
  instructionsText: {
    textAlign: 'justify',
    margin: 8,
  },
  image: {
    width: 250,
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
  favoriteButton: {
    position: 'relative',
    alignItems: 'flex-start',
    marginLeft: 8,
    top: 158,
  },
  gifContainer: {
    position: 'relative',
    alignItems: 'flex-end',
    marginRight: 8,
    marginTop: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default LowerLegsScreen;
