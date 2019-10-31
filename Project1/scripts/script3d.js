window.onload = function(){

function main1() {
  const canvas = document.querySelector('.c1');
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 40;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 120;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xc6d602);

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }
  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(1, -2, -4);
    scene.add(light);
  }

  const objects = [];
  const spread = 1;

  function addObject(x, y, obj) {
    obj.position.x = x * spread;
    obj.position.y = y * spread;

    scene.add(obj);
    objects.push(obj);
  }

  function createMaterial() {
    const material = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
    });

    const hue = Math.random();
    const saturation = 1;
    const luminance = 1;
    material.color.setHSL(hue, saturation, luminance);

    return material;
  }

  function addSolidGeometry(x, y, geometry) {
    const mesh = new THREE.Mesh(geometry, createMaterial());
    addObject(x, y, mesh);
  }

  function addLineGeometry(x, y, geometry) {
    const material = new THREE.LineBasicMaterial({color: 0x000000});
    const mesh = new THREE.LineSegments(geometry, material);
    addObject(x, y, mesh);
  }

  {
    const loader = new THREE.FontLoader();
    loader.load('https://threejsfundamentals.org/threejs/resources/threejs/fonts/helvetiker_regular.typeface.json', (font) => {
      const geometry = new THREE.TextBufferGeometry('in-Beauty', {
        font: font,
        size: 20.0,
        height: 1.5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.15,
        bevelSize: .3,
        bevelSegments: 5,
      });
      const mesh = new THREE.Mesh(geometry, createMaterial());
      geometry.computeBoundingBox();
      geometry.boundingBox.getCenter(mesh.position).multiplyScalar(-1);

      const parent = new THREE.Object3D();
      parent.add(mesh);

      addObject(-1, -1, parent);
    });
  }

    function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {
    time *= 0.007;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    objects.forEach((obj, ndx) => {
      const speed = .1 + ndx * .05;
      const rot = time * speed;
      obj.rotation.x = rot;
      obj.rotation.y = rot;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main1();



// function main2() {
//   const canvas = document.querySelector('#d');
//   const renderer = new THREE.WebGLRenderer({canvas});

//   const fov = 40;
//   const aspect = 2;  // the canvas default
//   const near = 0.1;
//   const far = 1000;
//   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//   camera.position.z = 120;

//   const scene = new THREE.Scene();
//   scene.background = new THREE.Color(0xAAAAAA);

//   {
//     const color = 0xFFFFFF;
//     const intensity = 1;
//     const light = new THREE.DirectionalLight(color, intensity);
//     light.position.set(-1, 2, 4);
//     scene.add(light);
//   }
//   {
//     const color = 0xFFFFFF;
//     const intensity = 1;
//     const light = new THREE.DirectionalLight(color, intensity);
//     light.position.set(1, -2, -4);
//     scene.add(light);
//   }

//   const objects = [];
//   const spread = 15;

//   function addObject(x, y, obj) {
//     obj.position.x = x * spread;
//     obj.position.y = y * spread;

//     scene.add(obj);
//     objects.push(obj);
//   }

//   function createMaterial() {
//     const material = new THREE.MeshPhongMaterial({
//       side: THREE.DoubleSide,
//     });

//     const hue = Math.random();
//     const saturation = 1;
//     const luminance = .5;
//     material.color.setHSL(hue, saturation, luminance);

//     return material;
//   }

//   function addSolidGeometry(x, y, geometry) {
//     const mesh = new THREE.Mesh(geometry, createMaterial());
//     addObject(x, y, mesh);
//   }

//   function addLineGeometry(x, y, geometry) {
//     const material = new THREE.LineBasicMaterial({color: 0x000000});
//     const mesh = new THREE.LineSegments(geometry, material);
//     addObject(x, y, mesh);
//   }

 
//   {
//       const shape = new THREE.Shape();
//     const x = -2.5;
//     const y = -5;
//     shape.moveTo(x + 2.5, y + 2.5);
//     shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
//     shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
//     shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
//     shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
//     shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
//     shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);
//     addSolidGeometry(1, 0, new THREE.ShapeBufferGeometry(shape));
//    }

//    {

//   function resizeRendererToDisplaySize(renderer) {
//     const canvas = renderer.domElement;
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;
//     const needResize = canvas.width !== width || canvas.height !== height;
//     if (needResize) {
//       renderer.setSize(width, height, false);
//     }
//     return needResize;
//   }

//   function render(time) {
//     time *= 0.007;

//     if (resizeRendererToDisplaySize(renderer)) {
//       const canvas = renderer.domElement;
//       camera.aspect = canvas.clientWidth / canvas.clientHeight;
//       camera.updateProjectionMatrix();
//     }

//     objects.forEach((obj, ndx) => {
//       const speed = .1 + ndx * .05;
//       const rot = time * speed;
//       obj.rotation.x = rot;
//       obj.rotation.y = rot;
//     });

//     renderer.render(scene, camera);

//     requestAnimationFrame(render);
//   }

//   requestAnimationFrame(render);
// }
// }
// main2();


}