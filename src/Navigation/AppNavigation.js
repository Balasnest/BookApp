import React from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Easing, StyleSheet, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AllBooks from '../components/allBooksView';

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
	AllBooks: { screen: AllBooks },
}, {
	// Default config for all screens
	headerMode: 'none',
	title: 'Main',
	initialRouteName: 'AllBooks',
	transitionConfig: noTransitionConfig
});



export default PrimaryNav;

