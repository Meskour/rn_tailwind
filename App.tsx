import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

export default function App() {
  

  const MyComponent = () => {
    const tailwind = useTailwind();

    return <Text style={tailwind('text-blue-600')}>Hello world!</Text>;
  };

  return (<TailwindProvider utilities={utilities}>
     <MyComponent/>
   </TailwindProvider> );
  // return (
  //   <TailwindProvider utilities={utilities}>
  //     <SafeAreaView style={tailwind('h-full')}>
        
  //       <View style={tailwind('items-center pt-12')}>
  //         <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
  //           <Text style={tailwind('text-red-100')}>Hello world!</Text>
  //         </View>    
  //         <StatusBar style="auto" />
  //       </View>

  //     </SafeAreaView>
  //   </TailwindProvider>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
