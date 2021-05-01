import React, { Suspense, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { mouseDegrees, mousePosition } from '../../utils/mouse';
import styles from './styles.scoped.css';

export default function Home() {
  const mouse = useRef({ x: 0, y: 0 });
  const history = useHistory();
  const dataMenu = [
    {
      name: 'Profile',
      path: '/profile',
    },
    {
      name: 'Service',
      path: '/service',
    },
    {
      name: 'Project',
      path: '/project',
    },
    {
      name: 'Gallery',
      path: '/gallery',
    },
    {
      name: 'Testimoni',
      path: '/testimoni',
    },
  ];
  const d = 8.25;

  return (
    <Canvas onMouseMove={(e) => (mouse.current = mousePosition(e))} shadowMap>
      <pointLight intensity={0.5} position={[0, 10, 10]} />
      <directionalLight
        castShadow
        position={[-8, 20, 8]}
        shadow-camera-bottom={d * -1}
        shadow-camera-far={1500}
        shadow-camera-left={d * -1}
        shadow-camera-near={0.1}
        shadow-camera-right={d}
        shadow-camera-top={d}
      />
      <Suspense fallback={null}>
        <Model
          mouse={mouse}
          position={[0, -1.4, 0]}
          scale={[0.45, 0.45, 0.08]}
        />
        <Backdrop
          position={[-0.25, -3.13, -2.75]}
          rotation={[0, -0.07, 0]}
          scale={[1.5, 1.5, 0.7]}
        />
      </Suspense>
      <Html className={styles.content} fullscreen scaleFactor={10}>
        <section>
          {dataMenu.map((data, index) => (
            <button key={index} onClick={() => history.push(data.path)}>
              <img alt="" src={`/assets/ic-${data.name.toLowerCase()}.svg`} />
              {data.name}
            </button>
          ))}
        </section>
        <section>
          "Selamat datang di telkom developer network, disini adalah tempat kami
          para developer berkembang bersama. Berkolaborasi menciptakan sesuatu
          yang berguna untuk bangsa ."
        </section>
        <footer>
          <a href="https://www.instagram.com/devceria" target="_blank">
            <img alt="dev-instagram" src="/assets/ic-black-ig.svg" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCA5KKaClnatT5saGcKV8Cjw"
            target="_blank"
          >
            <img alt="dev-youtube" src="/assets/ic-black-yt.svg" />
          </a>
        </footer>
      </Html>
    </Canvas>
  );
}

function Backdrop({ ...props }) {
  const { scene } = useLoader(GLTFLoader, '/assets/bg-home.gltf');

  return <primitive object={scene} {...props} />;
}

function Model({ mouse, ...props }) {
  const { nodes, scene } = useLoader(GLTFLoader, '/assets/robot.glb');
  const [mixer] = useState(() => new THREE.AnimationMixer());
  const group = useRef();

  useFrame((state, delta) => {
    mixer.update(delta);
    moveJoint(mouse, nodes.mixamorigNeck);
    moveJoint(mouse, nodes.mixamorigHead);
    moveJoint(mouse, nodes.mixamorigSpine);
  });

  return (
    <group dispose={null} ref={group} {...props}>
      <primitive object={scene} />
    </group>
  );
}

Model.defaultProps = {
  mouse: {},
};

Model.propTypes = {
  mouse: PropTypes.object,
};

function moveJoint(mouse, joint, degreeLimit = 40) {
  let degrees = mouseDegrees(mouse.current.x, mouse.current.y, degreeLimit);
  joint.rotation.xD = THREE.MathUtils.lerp(
    joint.rotation.xD || 0,
    degrees.y,
    0.1
  );
  joint.rotation.yD = THREE.MathUtils.lerp(
    joint.rotation.yD || 0,
    degrees.x,
    0.1
  );
  joint.rotation.x = THREE.Math.degToRad(joint.rotation.xD);
  joint.rotation.y = THREE.Math.degToRad(joint.rotation.yD);
}
