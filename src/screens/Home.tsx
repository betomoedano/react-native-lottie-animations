import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView, Text } from 'react-native';
import LottieContainer, {
  LottieContainerProps,
} from '../components/LottieContainer';

export default function Home(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>Welcome Back!</Text>
        {animations.map((animation, index) => (
          <LottieContainer key={index} {...animation} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const animations: LottieContainerProps[] = [
  {
    name: 'Sucess',
    source: 'https://lottiefiles.com/782-check-mark-success',
    author: 'Travis Gregory',
    path: require('../../assets/success.json'),
  },
  {
    name: 'Confetti',
    source: 'https://lottiefiles.com/1370-confetti',
    author: 'Jacques Mauriac',
    path: require('../../assets/confetti.json'),
  },
];
