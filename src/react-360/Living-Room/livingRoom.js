/*
auto-generated by: https://github.com/react-spring/gltfjsx
author: Yao Zhong (https://sketchfab.com/yaoz2)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/bedroom-empty-wip-56d51ffc593e4c74bc0e4f910bf23568
title: Bedroom (Empty)  ----> WIP
*/

//import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/assests/gltf/scene.gltf')

  
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0,0,0]} scale={[1,1,1]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh material={materials.Wall_B} geometry={nodes.wall_b_0.geometry} />
        <group position={[0, 0.36, 0]}>
          <mesh material={materials.Wall_R} geometry={nodes.wall_l_0.geometry} />
        </group>
        <mesh material={materials.Floor} geometry={nodes.wooden_floor_0.geometry} />
        <group position={[-0.23, -0.15, 0.87]} />
        <group position={[0, -0.33, 0]}>
          <mesh material={materials.wood01} geometry={nodes.wooden_cover_l_3_0.geometry} />
        </group>
        <group position={[0, -0.33, 0]}>
          <mesh material={materials.wood01} geometry={nodes.wooden_cover_l_2_0.geometry} />
        </group>
        <group position={[0, -0.33, 0]}>
          <mesh material={materials.wood01} geometry={nodes.wooden_cover_l_1_0.geometry} />
        </group>
        <group position={[0, -0.33, 0]}>
          <mesh material={materials.Wall_L} geometry={nodes.wall_r_0.geometry} />
        </group>
        <group position={[0, -0.33, 0]}>
          <mesh material={materials.wood01} geometry={nodes.wooden_cover_l_curve1_0.geometry} />
        </group>
        <group position={[0, -0.33, 0]}>
          <mesh material={materials.wood01} geometry={nodes.wooden_cover_l_curve2_0.geometry} />
        </group>
        <group position={[0, -0.33, 0]}>
          <mesh material={materials.wood01} geometry={nodes.wooden_cover_l_5_0.geometry} />
        </group>
        <group position={[0, -0.33, 0]}>
          <mesh material={materials.wood01} geometry={nodes.wooden_cover_l_4_0.geometry} />
        </group>
        <group position={[0, 0.36, 0]} rotation={[0, 0, -Math.PI]}>
          <mesh material={materials.wood01} geometry={nodes.wooden_cover_r_3_0.geometry} />
        </group>
        <group rotation={[0, 0, Math.PI / 2]}>
          <mesh material={materials.wood01} geometry={nodes.wooden_cover_b_3_0.geometry} />
        </group>
        <group rotation={[0, 0, -Math.PI / 2]}>
          <mesh material={materials.wood01} geometry={nodes.wooden_cover_f_0.geometry} />
        </group>
        <group position={[0, 0.3, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh material={materials.wood01} geometry={nodes.wooden_cover_r_curve1_0.geometry} />
        </group>
        <group position={[0, 0.3, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh material={materials.wood01} geometry={nodes.wooden_cover_r_2_0.geometry} />
        </group>
        <group position={[0, 0.3, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh material={materials.wood01} geometry={nodes.wooden_cover_r_1_0.geometry} />
        </group>
        <group position={[0, 0.3, 0]} rotation={[0, 0, 3.14]}>
          <mesh material={materials.wood01} geometry={nodes.wooden_cover_b_1_0.geometry} />
        </group>
        <group position={[0, 0.3, 0]} rotation={[0, 0, 3.14]}>
          <mesh material={materials.wood01} geometry={nodes.wooden_cover_b_2_0.geometry} />
        </group>
        <group position={[0, 0.3, 0]} rotation={[0, 0, 3.14]}>
          <mesh material={materials.wood01} geometry={nodes.wooden_cover_b_curve_0.geometry} />
        </group>
        <group position={[0, -0.37, 0]}>
          <mesh material={materials.windows_frame} geometry={nodes.windows_frame_0.geometry} />
        </group>
        <group position={[-2.21, 1.41, 1.1]} rotation={[0, 0, -Math.PI / 4]}>
          <mesh material={materials.windows_frame} geometry={nodes.windows_0.geometry} />
        </group>
        <group position={[-2.2, 1.42, 1.3]}>
          <mesh material={materials.Root} geometry={nodes.screw_window_L1_0.geometry} />
        </group>
        <group position={[-2.2, 1.42, 0.93]}>
          <mesh material={materials.Root} geometry={nodes.screw_window_L2_0.geometry} />
        </group>
        <group position={[-2.15, 0.92, 1.54]}>
          <mesh material={materials.Root} geometry={nodes.certain_hanger_0.geometry} />
        </group>
        <group position={[-2.12, 0.9, 1.1]}>
          <mesh material={materials.Root} geometry={nodes.Plane_0.geometry} />
        </group>
        <group position={[-2.21, 0.39, 1.1]} rotation={[0, 0, Math.PI / 4]}>
          <mesh material={materials.windows_frame} geometry={nodes.windows001_0.geometry} />
        </group>
      </group>
    </group>
  )
}
