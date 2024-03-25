import { AnimateSVG } from '@hestabit/react-native-svg-animate';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { singlePathSVG, sword } from './src/path/Paths'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <AnimateSVG
            strokeWidth={8}
            duration={4000}
            height={400}
            scale={1}
            //width={260}
            d={sword}
            viewBox={"0 0 660 660"}
            type={"async"}
            animEffect={"bounce"}
            ref={ref => (this._animateSVG = ref)}
        />

        <View style={styles.section}>
            <View style={styles.btn}>
                <Button title="Replay" onPress={()=> this._animateSVG.replay()} color="red"  />
            </View>
            <View style={styles.btn}>
                <Button title="Rewind" onPress={()=> this._animateSVG.rewind()} color="blue" />
            </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
