import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/navigation/Routes';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {Store, persistor} from './src/store';
import FlashMessage from "react-native-flash-message";
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Routes/>
          <StatusBar
            animated={true}
            backgroundColor="#fff"
            barStyle={'light-content'}
          />
          <FlashMessage position="bottom" /> 
        </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}

