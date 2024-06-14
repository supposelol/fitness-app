import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
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
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.85)']}
                  style={styles.gradient}
                  locations={[0.5, 0.8]}
                >
                  <Text style={styles.text}>{item.actualName}</Text>
                </LinearGradient>
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
    position: 'relative',
    alignItems: 'center',
  },
  image: {
    width: 165,
    height: 175,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'flex-end',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 102, 178, 0.3)',
    textShadowOffset: { width: 0.5, height: 1 },
    textShadowRadius: 7,
  },
});

export default ExercisesScreen;
