import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  SpotLight,
  View,
  Box,
  Sphere,
  Cylinder,
  MediaPlayerState,
} from 'react-vr';
import Forest from './components/Forest';
import SoundShape from './components/SoundShape';
// import aframe;
// import aframe-dev-components;



export default class musical_exp_react_vr_pusher extends React.Component {
  constructor(props) {
    super(props);

      this.config = [
        {sound: asset('sounds/kick.wav'), playerState: new MediaPlayerState({})},
        {sound: asset('sounds/floor-tom.wav'), playerState: new MediaPlayerState({})},
        {sound: asset('sounds/snare-1.wav'), playerState: new MediaPlayerState({})},
        {sound: asset('sounds/closed-hat.wav'), playerState: new MediaPlayerState({})},
        {sound: asset('sounds/open-hat.wav'), playerState: new MediaPlayerState({})},
        {sound: asset('sounds/rimshot2.wav'), playerState: new MediaPlayerState({})}
      ];
  }

  onShapeClicked(index) {
    this.config[index].playerState.play();
  }

  render() {
    console.log("umm......");
      const shapes = [
        <Cylinder
            radiusTop={0.4}
            radiusBottom={0.4}
            dimHeight={0.3}
            segments={128}
            lit={true}
            style={{color: '#FFD20F',
              transform: [{translate: [-1.5,-0.5,-3]}, {rotateX: 30}, {rotateZ: 90}],
            }}
        />,
        <Cylinder
            radiusTop={0}
            radiusBottom={0.2}
            dimHeight={0.6}
            segments={4}
            lit={true}
            style={{
              color: '#96de4e',
              transform: [{translate: [-1,-0.5,-3]}, {rotateX: 30}],
            }}
        />,
        <Sphere
            radius={0.25}
            widthSegments={20}
            heightSegments={12}
            lit={true}
            style={{
              color: '#FF358F',
              transform: [{translate: [-0.5,-0.5,-3]}, {rotateX: 30}],
            }}
        />,
        <Box
            dimWidth={0.4}
            dimDepth={0.8}
            dimHeight={0.2}
            lit={true}
            style={{
              color: '#00FF40',
              transform: [{translate: [0,-0.4,-3]}, {rotateX: 30}],
            }}
        />,
        <Sphere
            radius={0.15}
            widthSegments={20}
            heightSegments={12}
            lit={true}
            style={{
              color: '#cee030',
              transform: [{translate: [0.5,-0.5,-3]}, {rotateX: 30}],
            }}
        />,
        <Box
            dimWidth={0.5}
            dimDepth={0.5}
            dimHeight={0.5}
            lit={true}
            style={{
              color: '#5BD3FF',
              transform: [{translate: [1,-0.5,-3]}, {rotateX: 30}],
            }}
        />
      ];

      return (
      <View>
        <Pano source={asset('images/oie_oie_canvas.png')} />

        <Forest tress={100} perimeter={10} colors={['#016549', '#87b926', '#b1c96b']} />

        <SpotLight intensity={1} style={{transform: [{translate: [1, 4, 4]}],}} />

        {shapes.map((shape, index) => {
          console.log("heyyy");
          return (
            <SoundShape
              onClick={() => this.onShapeClicked(index)}
              sound={this.config[index].sound}
              playerState={this.config[index].playerState}>
                {shape}
            </SoundShape>
          );
        })}
      </View>
    );
  }
};

AppRegistry.registerComponent('musical_exp_react_vr_pusher', () => musical_exp_react_vr_pusher);
