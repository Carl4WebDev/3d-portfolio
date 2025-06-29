import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
  );
  <div class="sketchfab-embed-wrapper">
    {' '}
    <iframe
      title="Node JS Icon"
      frameborder="0"
      allowfullscreen
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
      allow="autoplay; fullscreen; xr-spatial-tracking"
      xr-spatial-tracking
      execution-while-out-of-viewport
      execution-while-not-rendered
      web-share
      src="https://sketchfab.com/models/d0ef6f33bf174a79b5a831d6c003bad9/embed">
      {' '}
    </iframe>{' '}
    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
      {' '}
      <a
        href="https://sketchfab.com/3d-models/node-js-icon-d0ef6f33bf174a79b5a831d6c003bad9?utm_medium=embed&utm_campaign=share-popup&utm_content=d0ef6f33bf174a79b5a831d6c003bad9"
        target="_blank"
        rel="nofollow"
        style="font-weight: bold; color: #1CAAD9;">
        {' '}
        Node JS Icon{' '}
      </a>{' '}
      by{' '}
      <a
        href="https://sketchfab.com/dyud?utm_medium=embed&utm_campaign=share-popup&utm_content=d0ef6f33bf174a79b5a831d6c003bad9"
        target="_blank"
        rel="nofollow"
        style="font-weight: bold; color: #1CAAD9;">
        {' '}
        dyud{' '}
      </a>{' '}
      on{' '}
      <a
        href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=d0ef6f33bf174a79b5a831d6c003bad9"
        target="_blank"
        rel="nofollow"
        style="font-weight: bold; color: #1CAAD9;">
        Sketchfab
      </a>
    </p>
  </div>;

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
