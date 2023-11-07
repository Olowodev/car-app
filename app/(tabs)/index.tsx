import { StyleSheet, Text, View } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { Text, View } from '../../components/Themed';
import {useGLTF} from '@react-three/drei/core/useGLTF'
import modelPath from '../../assets/images/tesla.glb'
import { Canvas, useFrame, MeshProps } from '@react-three/fiber/native';
import { Suspense, useRef } from 'react';

function Model(props) {
  const gltf = useGLTF(modelPath)
  const mesh = useRef(null)
  useFrame((state, delta) => {
    mesh.current.rotation.y += delta
  })
  return <mesh ref={mesh}>
    <primitive {...props} scale={0.0125} object={gltf.scene} />
    </mesh>
}

export default function TabOneScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#272727', padding: 16}}>
    <Canvas style={{flex: 0.5}}>
      <ambientLight />
      {/* <mesh>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh> */}
      <Suspense fallback={'loading'}>
        <Model />
      </Suspense>
    </Canvas>
    <View style={{backgroundColor: 'white'}}>
      <Text>Testing</Text>
    </View>
    <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
      <View>
        <Text>Battery</Text>
        <Text>Last charge 1w ago</Text>
        <View>
          <View>
            <Text>212km</Text>
            <View></View>
            <View>
              <Text>Good</Text>
            </View>
            <Text>85%</Text>
          </View>
        </View>
      </View>
      <View>
        <View>
          <Text>Weather</Text>
          <View>
            <Text>Sunny</Text>
            <View>
              <Text>Coimbatore</Text>
            </View>
            <Text>32c</Text>
          </View>
        </View>
        <View>
          <Text>Total Distance</Text>
          <View>
            <View>
              <Text>17,439.8 KM</Text>
              <View>
                <Text>Check Milage</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    <View style={{backgroundColor: 'white'}}>
      <View>
        <Text>Locked</Text>
      </View>
      <View>
        <Text>Swipe Right to unlock</Text>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
