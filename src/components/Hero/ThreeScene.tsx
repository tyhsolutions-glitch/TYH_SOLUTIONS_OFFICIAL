import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function Box() {
  return (
    <mesh rotation={[10, 15, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  )
}

export default function ThreeScene() {
  return (
    <Canvas className="absolute inset-0">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Box />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
