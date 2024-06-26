

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ texture }) {
  const { nodes, materials } = useGLTF(`/${texture}.gltf`)
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} scale={2.5} />
    </group>
  )
}

useGLTF.preload('/earth.gltf')
