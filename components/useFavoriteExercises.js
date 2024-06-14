import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from './favoritesSlice';

const useFavoriteExercises = () => {
    const dispatch = useDispatch();
    const favoriteExerciseIds = useSelector((state) => state.favoriteExercises.favoriteExercises);
    const allExercises = useSelector((state) => state.favoriteExercises.allExercises);

    const favoriteExercises = allExercises.filter((exercise) => favoriteExerciseIds.includes(exercise.id));

    const toggleFavoriteExercise = (exerciseId) => {
        console.log('toggleFavoriteExercise called with exerciseId:', exerciseId);
        dispatch(toggleFavorite(exerciseId));
    };

    useEffect(() => {
        console.log('Favorite exercise IDs:', favoriteExerciseIds);
        console.log('All exercises:', allExercises);
    }, [favoriteExerciseIds, allExercises]);

    return { favoriteExercises, toggleFavoriteExercise };
};

export default useFavoriteExercises;
