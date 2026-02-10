import './App.css';
import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene';
import { OrbitControls } from '@react-three/drei';

function App() {

  return (
    <>
      <div className="canvas-container">
        <Canvas camera={{
	          fov: 75,
	          near: 0.1, 
	          far: 100,
	          position: [0, 2, 6]
	        }}>
          <Scene />
          {/* <OrbitControls /> */}
        </Canvas>
      </div>
    </>
  )
}

export default App