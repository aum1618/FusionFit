import React from 'react';
import Navigator from './src/navigation';
import {StatusBar} from 'react-native';
import {AppContextProvider} from './src/services/context/app';
import Wrapper from './src/shared/components/organisms/Wrapper';
import SafeArea from './src/shared/components/organisms/SafeArea';

export default function App() {
  return (
    <>
      <AppContextProvider>
        <Wrapper>
          <SafeArea>
            <Navigator />
          </SafeArea>
        </Wrapper>
        <StatusBar
          backgroundColor={'transparent'}
          translucent={true}
          barStyle={'dark-content'}
        />
      </AppContextProvider>
    </>
  );
}
