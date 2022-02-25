import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Navigator } from './src/infrastructure/navigations';
import { FavouriteContextProvider} from './src/services/Favourites';



export default function App() {
  return (
            <FavouriteContextProvider>
                  <Navigator />
            </FavouriteContextProvider>      
       );
}


