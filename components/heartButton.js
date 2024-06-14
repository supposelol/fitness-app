import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Animated, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const HeartButton = ({ onPress, isLiked }) => {
    const [liked, setLiked] = useState(isLiked);
    const textOpacity = useRef(new Animated.Value(isLiked ? 1 : 0)).current;

    useEffect(() => {
        setLiked(isLiked);
        Animated.timing(textOpacity, {
            toValue: isLiked ? 1 : 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [isLiked]);

    const handlePress = () => {
        setLiked(!liked);
        onPress();
        Animated.timing(textOpacity, {
            toValue: liked ? 0 : 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <Svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke={liked ? '#B26ECE' : '#ffffff'}
                fill={liked ? '#B26ECE' : 'none'}
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </Svg>
            <View style={styles.action}>
                <Animated.Text style={[styles.optionText, { opacity: textOpacity }]}>
                    {liked ? 'Added to Favorites' : 'Add to Favorites'}
                </Animated.Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(36, 36, 36)',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: 10,
        paddingRight: 15,
        borderRadius: 10,
        boxShadow: 'rgba(46, 46, 46, 0.2) 0px 8px 24px',
        color: 'rgb(255, 255, 255)',
        flexDirection: 'row',
        marginTop: 10,
    },
    action: {
        position: 'relative',
        overflow: 'hidden',
    },
    optionText: {
        fontSize: 16,
        color: 'white',
    },
});

export default HeartButton;