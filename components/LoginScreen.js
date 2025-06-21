// components/LoginScreen.js
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  Image,
  Animated,
  Easing,
  Alert,
} from 'react-native';

import { db, auth } from '../utils/firebase-config'; // Ensure this path is correct
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const LoginScreen = ({ onGoBack, onSignUpPress }) => {
  const navigation = useNavigation(); // Get the navigation object
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const breatheAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(breatheAnimation, {
          toValue: 1.1,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(breatheAnimation, {
          toValue: 1,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [breatheAnimation]);

  const saveOrUpdateUserData = async (user) => {
    try {
      const userDocRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userDocRef);

      if (!docSnap.exists()) {
        await setDoc(userDocRef, {
          email: user.email,
          displayName: user.displayName || 'N/A',
          photoURL: user.photoURL || null,
          createdAt: new Date(),
        });
        console.log("New user data saved for ID:", user.uid);
      } else {
        console.log("Existing user data confirmed for ID:", user.uid);
      }
      return true;
    } catch (e) {
      console.error("Error saving/updating user data:", e);
      Alert.alert("Error", "Failed to save user profile data.");
      return false;
    }
  };

  const handleLogin = async () => {
    console.log('Login button pressed!');
    setLoginError('');
    setIsLoading(true);

    if (!email || !password) {
      setLoginError('Please enter both email and password.');
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log('User logged in successfully:', user.email);
      const dataSaved = await saveOrUpdateUserData(user);

      if (dataSaved) {
        // Navigate to HomeMenuScreen on successful login
        navigation.replace('HomeMenuScreen');
      } else {
        setLoginError("Login successful, but failed to update profile data.");
      }

    } catch (error) {
      console.error("Firebase Login Error:", error.code, error.message);
      let errorMessage = "An unknown error occurred during login.";
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'That email address is invalid!';
          break;
        case 'auth/user-disabled':
          errorMessage = 'This user account has been disabled.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No user found with this email.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password.';
          break;
        case 'auth/invalid-credential':
          errorMessage = 'Invalid email or password.';
          break;
        default:
          errorMessage = "Login failed. Please check your credentials.";
          break;
      }
      setLoginError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    console.log('Continuing with Google');
    setIsLoading(true);
    setLoginError('');
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = GoogleAuthProvider.credential(idToken);
      const userCredential = await signInWithCredential(auth, googleCredential);
      
      const user = userCredential.user;
      console.log('Google Sign-In successful for:', user.email);

      const dataSaved = await saveOrUpdateUserData(user);

      if (dataSaved) {
        // Navigate to HomeMenuScreen on successful login
        navigation.replace('HomeMenuScreen');
      } else {
          setLoginError("Google login successful, but failed to save profile data.");
      }

    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('User cancelled the login flow');
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('Sign in is in progress already');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            setLoginError('Play services not available or outdated.');
        } else {
            console.error("Google Sign-In Error:", error);
            setLoginError('An error occurred during Google Sign-In.');
        }
    } finally {
        setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password?');
    Alert.alert(
      "Forgot Password",
      "This would typically navigate the user to a password reset screen or trigger a password reset email using `sendPasswordResetEmail(auth, email)`."
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Your existing JSX for the UI remains largely the same */}
      <View style={styles.topSection}>
        <Animated.View style={[
          styles.animatedBackgroundLayer,
          { transform: [{ scale: breatheAnimation }] }
        ]} />

        {onGoBack && (
          <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
        )}

        <Image
          source={require('../assets/png_logo.png')}
          style={styles.headerLogo}
        />
        <Text style={styles.subtitle}>Welcome to Presidential Graduate School</Text>
      </View>

      <View style={styles.card}>
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin} disabled={isLoading}>
          <Image
            source={require('../assets/google_logo.png')}
            style={styles.googleLogo}
          />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <Text style={styles.orLoginWith}>Or login with</Text>

        {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Your Email here"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          editable={!isLoading}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="********"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            editable={!isLoading}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.passwordToggle} disabled={isLoading}>
            <Text style={{ color: '#888', fontSize: 18 }}>{showPassword ? '👁️' : '🔒'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={styles.checkbox} disabled={isLoading}>
            <View style={[styles.checkboxBox, rememberMe && styles.checkboxBoxChecked]}>
              {rememberMe && <Text style={styles.checkboxCheck}>✓</Text>}
            </View>
            <Text style={styles.checkboxText}>Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword} disabled={isLoading}>
            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={isLoading}>
          <Text style={styles.loginButtonText}>
            {isLoading ? 'Logging In...' : 'Log In'}
          </Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <TouchableOpacity onPress={onSignUpPress} disabled={isLoading}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
        <Text style={styles.footerText}>Copyright © Presidential Graduate School 2025</Text>
      </View>
    </SafeAreaView>
  );
};

// Your existing styles...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E0E0',
  },
  topSection: {
    paddingVertical: 150,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: 'relative',
    overflow: 'hidden',
  },
  animatedBackgroundLayer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FF6F00',
    borderRadius: 50,
    zIndex: 0,
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 50 : 60,
    left: 20,
    zIndex: 1,
    padding: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  headerLogo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop: Platform.OS === 'android' ? 0 : 20,
    zIndex: 1,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    zIndex: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: -80,
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 14,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 5,
    paddingVertical: 12,
    marginBottom: 15,
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    color: '#555555',
  },
  orLoginWith: {
    textAlign: 'center',
    color: '#AAAAAA',
    marginVertical: 15,
  },
  input: {
    height: 50,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    height: 50,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  passwordToggle: {
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkboxBoxChecked: {
    backgroundColor: '#FF6F00',
    borderColor: '#FF6F00',
  },
  checkboxCheck: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  checkboxText: {
    fontSize: 14,
    color: '#555555',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#FF6F00',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#FF6F00',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signUpText: {
    fontSize: 14,
    color: '#555555',
  },
  signUpLink: {
    fontSize: 14,
    color: '#FF6F00',
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
    footerText: {
    position: 'absolute',
    bottom: 20, // or 0 to stick to the bottom
    width: '100%',
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
}

});

export default LoginScreen;