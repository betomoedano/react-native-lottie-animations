import React, { useState } from 'react';
import Home from './src/screens/Home';
import Splash from './src/screens/Splash';

export default function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? <Splash setIsLoading={setIsLoading} /> : <Home />;
}
