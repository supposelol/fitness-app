import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';

const IndexScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Image
      source={require('../assets/images/index.jpg')}
      style={styles.backgroundImage}
    />
    <LinearGradient
      colors={['transparent', '#18181b']}
      style={styles.gradientContainer}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 0.7 }}
    >
      <Animated.View entering={FadeInDown.delay(100).springify()} style={styles.textContainer}>
        <Text style={styles.headingText}>
          Embrace <Text style={styles.roseText}>Challenges,</Text>
        </Text>
        <Text style={styles.headingText}>thrive in triumphs</Text>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(200).springify()} style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabNav')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Let's crush it</Text>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  gradientContainer: {
    width: wp(100),
    height: hp(50),
    justifyContent: 'flex-end',
    paddingBottom: hp(6),
    paddingTop: hp(8),
    paddingLeft: wp(5),
    paddingRight: wp(5),
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: hp(6),
  },
  headingText: {
    fontSize: hp(4),
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  roseText: {
    color: '#FF007F',
  },
  buttonContainer: {
    marginBottom: hp(2),
  },
  button: {
    height: hp(7),
    width: wp(80),
    backgroundColor: '#FF007F',
    borderRadius: hp(3.5),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: hp(3),
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default IndexScreen;