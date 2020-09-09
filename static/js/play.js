var WIDTH = 1200;
var HEIGHT = 600;
var camera = new THREE.PerspectiveCamera(120, WIDTH / HEIGHT, 0.01, 100);
var renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#webgl'),
  antialias: true,
});
renderer.setClearColor(0x4189B8);
renderer.setSize(WIDTH, HEIGHT);
var scene = new THREE.Scene();

var ambient = new THREE.AmbientLight( 0x999999 );
scene.add( ambient );
var light = new THREE.PointLight(0xffffff);
light.position.set(20, 50, 10);
scene.add(light);


var interaction = new THREE.Interaction(renderer, scene, camera);



var cube = new THREE.Mesh(
    new THREE.CubeGeometry( 5, 5, 5),
    new THREE.MeshPhongMaterial({ color: 'red'})
  );
  cube.cursor = 'pointer';


cube.position.y = 0;
cube.position.x = 0;
cube.position.z = -10;
cube.name = 'cube';


scene.add(cube)

cube.on('click', () => {
    console.log('click en cubo')
})


function render() {
    renderer.render(scene, camera);

    cube.rotation.x += 0.02
    cube.rotation.y += 0.01

    requestAnimationFrame(render);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }


render();