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


let pairsWin = [];
let cnt = 0;

let checkWin = () => {
    return cnt == 2;
}

$('#btn-modalGanar').on('click', () => {
    let nivel = parseInt($('#nivel').text()) + 1
    if (nivel <= 5)
        window.location.replace('/juego/novato/' + nivel);
    else
        window.location.replace('/resultado');
})

let getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (+max + 1 - +min)) + +min;
}

let cube = new THREE.Mesh(
    new THREE.CubeGeometry(1, 1, 1),
    new THREE.MeshPhongMaterial({ color: 'red'})
  );
cube.position.y = 0;
cube.position.x = 0;
cube.position.z = -10;
cube.name = 'cube';
cube.on('click', () => {
    cnt++;
    if (checkWin()) {
        //console.log('has ganado')
        $('#modalGanar').modal('show');
    }
 
})

let cube2 = new THREE.Mesh(
    new THREE.CubeGeometry(1, 1, 1),
    new THREE.MeshPhongMaterial({ color: 'green'})
  );
cube2.position.y = 3;
cube2.position.x = 2;
cube2.position.z = -10;
cube2.name = 'cube2';
cube2.on('click', () => {
  cnt++;  
  if (checkWin()){
      console.log('has ganado');
      $('#modalGanar').modal('show');

  }
}); 


pairsWin.push({
    a: cube,
    b: cube2,
    msg: 'Selecciona el cubo rojo y el cubo verde',
});


let cube3 = new THREE.Mesh(
    new THREE.CubeGeometry(1, 1, 1),
    new THREE.MeshPhongMaterial({ color: 'yellow'})
  );
cube3.position.y = 1;
cube3.position.x = 0;
cube3.position.z = -10;
cube3.name = 'cube';
cube3.on('click', () => {
    cnt++;
    if (checkWin()) {
        console.log('has ganado')
        $('#modalGanar').modal('show');

    }
 
});

let cube4 = new THREE.Mesh(
    new THREE.CubeGeometry(1, 1, 1),
    new THREE.MeshPhongMaterial({ color: 'blue'})
  );
cube4.position.y = 4;
cube4.position.x = 2;
cube4.position.z = -10;
cube4.name = 'cube2';
cube4.on('click', () => {
  cnt++;  
  if (checkWin()){
      console.log('has ganado');
      $('#modalGanar').modal('show');
      
  }
}); 


pairsWin.push({
    a: cube3,
    b: cube4,
    msg: 'Selecciona el cubo azul y el cubo amarillo',
});


let cube5 = new THREE.Mesh(
    new THREE.CubeGeometry(1, 1, 1),
    new THREE.MeshPhongMaterial({ color: 'white'})
  );
cube5.position.y = 4;
cube5.position.x = 3;
cube5.position.z = -10;
cube5.name = 'cube';
cube5.on('click', () => {
    cnt++;
    if (checkWin()) {
        console.log('has ganado')
        $('#modalGanar').modal('show');

    }
 
});

let cube6 = new THREE.Mesh(
    new THREE.CubeGeometry(1, 1, 1),
    new THREE.MeshPhongMaterial({ color: 'black'})
  );
cube6.position.y = 7;
cube6.position.x = 2;
cube6.position.z = -10;
cube6.name = 'cube2';
cube6.on('click', () => {
  cnt++;  
  if (checkWin()){
      console.log('has ganado');
      $('#modalGanar').modal('show');
  }
}); 


pairsWin.push({
    a: cube5,
    b: cube6,
    msg: 'Selecciona el cubo blanco y el cubo negro',
});


let llenarAleatorio = () => {
    for (let i = 0; i < 10; i++) {
        let cube = new THREE.Mesh(
            new THREE.CubeGeometry(1, 1, 1),
            new THREE.MeshPhongMaterial({ color: 'black'})
          );
        cube.position.y = 7 + i;
        cube.position.x = 2 + i;
        cube.position.z = -10;
        cube.name = 'cube';
        scene.add(cube);
    }
}


let crearNivel = () => {
    let ix = getRandomNumber(0, 2);
    scene.add(pairsWin[ix].a);
    scene.add(pairsWin[ix].b);
    llenarAleatorio();
}


crearNivel();


setInterval(() => {
    $('#time').html(parseInt($('#time').text() - 1)):
    if ($('#time').html() == '0')
        console.log('hola')
}, 1000)

function render() {
    renderer.render(scene, camera);


    requestAnimationFrame(render);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }


render();