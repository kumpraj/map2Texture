
import React from 'react';
import * as BABYLON from 'babylonjs';

function Cuboid(props) {
  // Creating a reference for the canvas element
  const canvasRef = React.useRef(null);

  // Using useEffect hook to create the 3D scene
  React.useEffect(() => {
    
    const createScene = async () => {
      
      const engine = new BABYLON.Engine(canvasRef.current, true);      
      const scene = new BABYLON.Scene(engine);

      // Creating a new BABYLON camera and attaching it to the canvas element reference
      const camera = new BABYLON.ArcRotateCamera('Camera', Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
      camera.attachControl(canvasRef.current, true);

      
      const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1, 1, 0));

      
      const box = BABYLON.MeshBuilder.CreateBox('box', { height: 1, width: 0.75, depth: 0.25 });      
      const boxMaterial = new BABYLON.StandardMaterial('boxMaterial', scene);

      // Creating a new BABYLON texture using the image passed in as a prop
      const imageTexture = new BABYLON.Texture(props.image, scene);
      // Setting the diffuse texture of the material to the image texture
      boxMaterial.diffuseTexture = imageTexture;
      // Assigning the material to the box mesh
      box.material = boxMaterial;

      // Running the render loop of the engine to render the scene
      engine.runRenderLoop(() => {
        scene.render();
      });

      
      window.addEventListener('resize', () => {
        engine.resize();
      });

      // Returning the scene object
      return scene;
    };

    // Calling the createScene function
    createScene();
  }, [props.image]); 

  // Returning a canvas element with the canvasRef and style
  return <canvas ref={canvasRef} style={{ width: '80vw', height: '80vh' }} />;
}


export default Cuboid;
