import React from 'react';
import { 
  StyleSheet,
  SafeAreaView, 
} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { useDimensions } from '@react-native-community/hooks';

// SafeAreaView (Only for iOS) ensures that the content is in the safe area of the device, not blocked or overlapping with the status bar
//    Could dynamically add padding using Platform.OS === 'android' and StatusBar.currentHeight
// Different typs of touchables with different types of feedback to give the user
// TouchableNativeFeedback is only for android
// Alert.prompt ONLY works on iOS devices NOT android

export default function App() {
  return (
    <ViewImageScreen />
  );
}