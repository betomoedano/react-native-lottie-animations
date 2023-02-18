import React, { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

interface SplashProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export default function Splash({ setIsLoading }: SplashProps): JSX.Element {
  return (
    <View style={styles.splash}>
      <LottieView
        source={require('../../assets/initiativeCompany.json')}
        autoPlay
        loop={false}
        resizeMode="cover"
        onAnimationFinish={() => {
          console.log('animation finished');
          setIsLoading(false);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  splash: {
    flex: 1,
    alighItems: 'center',
    margin: 0,
  },
});
