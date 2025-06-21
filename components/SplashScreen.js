// components/SplashScreen.js
import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Animated, Easing } from 'react-native'; // Import Animated and Easing

const SplashScreen = () => {
  // Create an animated value for controlling the scale
  const breatheAnimation = useRef(new Animated.Value(1)).current; // Initial scale is 1

  useEffect(() => {
    // Define the breathing animation sequence
    Animated.loop( // Loop the animation indefinitely
      Animated.sequence([
        Animated.timing(breatheAnimation, {
          toValue: 1.05, // Scale up slightly
          duration: 1500, // Duration of the scale up
          easing: Easing.inOut(Easing.ease), // Smooth easing
          useNativeDriver: true, // Use native driver for performance
        }),
        Animated.timing(breatheAnimation, {
          toValue: 1, // Scale back to original size
          duration: 1500, // Duration of the scale down
          easing: Easing.inOut(Easing.ease), // Smooth easing
          useNativeDriver: true, // Use native driver for performance
        }),
      ]),
    ).start(); // Start the animation

    // No cleanup needed for a looping animation that runs for the life of the component
    // (or until it unmounts naturally after the splash screen duration in App.js)
  }, [breatheAnimation]); // Re-run effect if breatheAnimation reference changes (unlikely)

  return (
    <View style={styles.container}>
      <Animated.Image // Use Animated.Image for animated styles
        source={require('../assets/logo.png')} // Path to your app's main logo
        style={[
          styles.logo,
          {
            transform: [{ scale: breatheAnimation }], // Apply the animated scale
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background for the splash screen
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',    // Center content horizontally
  },
  logo: {
    width: 200, // Adjust size as needed
    height: 200, // Adjust size as needed
    resizeMode: 'contain', // Ensures the whole image is visible within the bounds without cropping
  },
});

export default SplashScreen;
