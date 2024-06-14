import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';
import { fetchExercisesByBodypart } from '../../api/exerciseApi';
import useFavoriteExercises from '../../components/useFavoriteExercises';
import { useDispatch } from 'react-redux';
import { updateAllExercises } from '../../components/favoritesSlice';
import HeartButton from '../../components/heartButton';

const BodyPartScreen = ({ bodyPart }) => {
    const [exercises, setExercises] = useState([]);
    const { favoriteExercises, toggleFavoriteExercise } = useFavoriteExercises();
    const dispatch = useDispatch();

    useEffect(() => {
        const getExercises = async () => {
            try {
                const exercisesData = await fetchExercisesByBodypart(bodyPart);
                setExercises(exercisesData);
                dispatch(updateAllExercises(exercisesData));
            } catch (error) {
                console.error('Error fetching exercises:', error);
            }
        };

        getExercises();
    }, [dispatch, bodyPart]);

    const addToFavoritesHandler = (exercise) => {
        toggleFavoriteExercise(exercise.id);
    };

    const renderInstructions = (instructions) => (
        instructions ? <Text style={styles.instructionsText}>{instructions.join('\n')}</Text> : null
    );

    const capitalizeFirstLetter = (string) => (
        string.charAt(0).toUpperCase() + string.slice(1)
    );

    return (
        <View style={styles.screen}>
            <FlatList
                data={exercises}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Text style={styles.text}>{capitalizeFirstLetter(item.name)}</Text>
                        <ScrollView style={styles.instructionsContainer}>
                            {renderInstructions(item.instructions)}
                        </ScrollView>
                        <View style={styles.contentContainer}>
                            {item.gifUrl && (
                                <View style={styles.gifContainer}>
                                    <Image source={{ uri: item.gifUrl }} style={styles.image} />
                                </View>
                            )}
                            <HeartButton
                                isLiked={favoriteExercises.some((ex) => ex.id === item.id)}
                                onPress={() => addToFavoritesHandler(item)}
                            />
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
    },
    container: {
        backgroundColor: '#333333',
        padding: 15,
        margin: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#18181b',
        alignItems: 'center',
    },
    text: {
        color: '#CD80E2',
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
    instructionsContainer: {
        marginVertical: 8,
    },
    instructionsText: {
        textAlign: 'justify',
        color: 'white',
    },
    image: {
        width: 320,
        height: 240,
        borderColor: '#ddd',
        borderWidth: 10,
        borderRadius: 15,
    },
    gifContainer: {
        marginTop: 16,
    },
    contentContainer: {
        alignItems: 'center',
    },
});

export default BodyPartScreen;