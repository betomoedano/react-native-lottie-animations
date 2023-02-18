import React, { useState, Fragment } from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet, Linking, Button } from 'react-native';

export interface LottieContainerProps {
  name: string;
  source: string;
  author: string;
  path: string;
}

export default function LottieContainer({
  name,
  source,
  author,
  path,
}: LottieContainerProps): JSX.Element {
  const [show, setShow] = useState<boolean>(true);
  return (
    <Fragment>
      <View style={styles.lottieContainer}>
        {show && (
          <LottieView
            source={path}
            autoPlay
            loop={false}
            onAnimationFinish={() => setTimeout(() => setShow(false), 1000)}
            resizeMode="contain"
          />
        )}
      </View>
      <Button
        title={`Play ${name} by ${author}`}
        onPress={() => setShow(true)}
        color="black"
      />
      <Button
        title="Go to website"
        onPress={async () => await Linking.openURL(source)}
        color="black"
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lottieContainer: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});
