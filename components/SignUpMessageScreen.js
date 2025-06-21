// components/SignUpMessageScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SignUpMessageScreen = ({ onGoBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>
        Please talk to the school administrator to activate your account.
      </Text>
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Go Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  messageText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 30,
    lineHeight: 30,
  },
  backButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUpMessageScreen;
