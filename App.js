// App.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Import all necessary screen components
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import SignUpMessageScreen from './components/SignUpMessageScreen';
import HomeMenuScreen from './components/HomeMenuScreen'; // The React Native version

// --- Main App Component ---
export default function App() {
  // State to manage which screen is currently visible
  const [currentScreen, setCurrentScreen] = useState('splash');

  // Control the splash screen duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('home'); // Transition to HomeScreen after splash
    }, 2400); // 2.4 seconds

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once

  // --- Navigation Functions ---
  const navigateToLogin = () => setCurrentScreen('login');
  const navigateToSignUpMessage = () => setCurrentScreen('signupMessage');
  const navigateToHomeMenu = () => setCurrentScreen('homemenu');
  const navigateBackToHome = () => setCurrentScreen('home');

  // Render the current screen based on the state
  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'login':
        return <LoginScreen onGoBack={navigateBackToHome} onSignUpPress={navigateToSignUpMessage} onAdminLoginSuccess={navigateToHomeMenu} />;
      case 'signupMessage':
        return <SignUpMessageScreen onGoBack={navigateToLogin} />;
      case 'homemenu':
        // The onLogout prop in HomeMenuScreen is a placeholder;
        // you can connect it to navigateBackToHome or a dedicated logout flow.
        return <HomeMenuScreen onLogout={navigateBackToHome} />;
      case 'home':
      default: // Fallback to the home screen if the state is unexpected
        return <HomeScreen onLoginPress={navigateToLogin} onSignUpPress={navigateToSignUpMessage} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
