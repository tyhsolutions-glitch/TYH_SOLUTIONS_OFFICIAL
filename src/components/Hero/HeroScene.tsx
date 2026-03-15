import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function Blob() {
  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh>
        <icosahedronGeometry args={[2, 16]} />
        <MeshDistortMaterial
          color="#f59e0b"
          emissive="#92400e"
          distort={0.35}
          speed={1.5}
          roughness={0.2}
          metalness={0.6}
          opacity={0.15}
          transparent
        />
      </mesh>
    </Float>
  )
}

function Ring() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * 0.12
      ref.current.rotation.x += delta * 0.05
    }
  })
  return (
    <mesh ref={ref} rotation={[Math.PI / 3, 0, 0]}>
      <torusGeometry args={[3.5, 0.015, 2, 120]} />
      <meshStandardMaterial color="#f59e0b" opacity={0.25} transparent />
    </mesh>
  )
}

function Ring2() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z -= delta * 0.08
      ref.current.rotation.y += delta * 0.06
    }
  })
  return (
    <mesh ref={ref} rotation={[Math.PI / 5, Math.PI / 4, 0]}>
      <torusGeometry args={[4.5, 0.01, 2, 120]} />
      <meshStandardMaterial color="#38bdf8" opacity={0.12} transparent />
    </mesh>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} color="#f59e0b" intensity={0.5} />
        <Stars radius={80} depth={40} count={800} factor={3} fade speed={0.5} />
        <Blob />
        <Ring />
        <Ring2 />
      </Canvas>
    </div>
  )
}
