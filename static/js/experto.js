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
let pnts = 0;

let checkWin = () => {
    return cnt == 2;
}

$('#btn-modalGanar').on('click', () => {
    let nivel = parseInt($('#nivel').text()) + 1;
    let puntos = parseInt($('#puntos').text());
    if (nivel <= 3){

      window.location.replace('/juego/novato/' + nivel + '/' + puntos);
      console.log(puntos);

    }
    else{
      window.location.replace('/resultado');
    }
      
})

$('#btn-modalPerder').on('click', () => {
  let nivel = parseInt($('#nivel').text()) + 1;
  let puntos = parseInt($('#puntos').text());
  console.log(puntos);
  if (nivel <= 3)
      window.location.replace('/juego/novato/' + nivel + '/' + puntos);
  else
      window.location.replace('/resultado');
})

let getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (+max + 1 - +min)) + +min;
}

let cube = new THREE.Mesh(
    new THREE.CubeGeometry(2, 2, 2),
    new THREE.MeshPhongMaterial({ color: 'white'})
  );
cube.position.y = getRandomNumber(-15, 15);
cube.position.x = getRandomNumber(-15, 15);
cube.position.z = -10;
cube.name = 'cube';
cube.cursor = 'pointer';
cube.on('click', () => {
    cnt++
    pnts = parseInt( $('#puntos').text()) + 10;
    $('#puntos').html(pnts)
    
    scene.remove(cube)
    if (checkWin()) {
  
      $('#modalGanar').modal('show');
        
    }
 
});

let cube2 = new THREE.Mesh(
    new THREE.CubeGeometry(2, 2, 2),
    new THREE.MeshPhongMaterial({ color: 'green'})
  );
cube2.position.y = getRandomNumber(-15, 15);
cube2.position.x = getRandomNumber(-15, 15);
cube2.position.z = -10;
cube2.name = 'cube2';
cube2.cursor = 'pointer';
cube2.on('click', () => {
  cnt++;
  pnts = parseInt( $('#puntos').text()) + 10;
  $('#puntos').html(pnts)
  scene.remove(cube2)  
  if (checkWin()){
    
    $('#modalGanar').modal('show');
  }
}); 


pairsWin.push({
    a: cube,
    b: cube2,
    msg: 'Selecciona el cubo blanco y el cubo verde',
});


let circle1 = new THREE.Mesh(
    new THREE.CircleGeometry(2,32),
    new THREE.MeshBasicMaterial({ color: 'green'})
  );
circle1.position.y = getRandomNumber(-15, 15);
circle1.position.x = getRandomNumber(-15, 15);
circle1.position.z = -10;
circle1.name = 'cube3';
circle1.cursor = 'pointer';
circle1.on('click', () => {
    cnt++;
    pnts = parseInt( $('#puntos').text()) + 10;
    $('#puntos').html(pnts)
    scene.remove(circle1)
    if (checkWin()) {
      
        $('#modalGanar').modal('show');

    }
 
});

let cube4 = new THREE.Mesh(
    new THREE.CubeGeometry(2, 2, 2),
    new THREE.MeshPhongMaterial({ color: 'blue'})
  );
cube4.position.y = getRandomNumber(-15, 15);
cube4.position.x = getRandomNumber(-15, 15);
cube4.position.z = -10;
cube4.name = 'cube4';
cube4.cursor = 'pointer';
cube4.on('click', () => {
  cnt++;
  pnts = parseInt($('#puntos').text()) + 10;
  $('#puntos').html(pnts)  
  scene.remove(cube4)
  if (checkWin()){

      $('#modalGanar').modal('show');
      
  }
}); 


pairsWin.push({
    a: circle1,
    b: cube4,
    msg: 'Selecciona el cubo azul y el circulo verde',
});


let circle2 = new THREE.Mesh(
    new THREE.CircleGeometry(2,32),
    new THREE.MeshBasicMaterial({ color: 'white'})
  );
circle2.position.y = getRandomNumber(-15, 15);
circle2.position.x = getRandomNumber(-15, 15);
circle2.position.z = -10;
circle2.name = 'cube3';
circle2.cursor = 'pointer';
circle2.on('click', () => {
    cnt++;
    pnts = parseInt( $('#puntos').text()) + 10;
    $('#puntos').html(pnts)
    scene.remove(circle2)
    if (checkWin()) {
      
        $('#modalGanar').modal('show');

    }
 
});

let circle3 = new THREE.Mesh(
    new THREE.CircleGeometry(2,32),
    new THREE.MeshBasicMaterial({ color: 'blue'})
  );
circle3.position.y = getRandomNumber(-15, 15);
circle3.position.x = getRandomNumber(-15, 15);
circle3.position.z = -10;
circle3.name = 'cube3';
circle3.cursor = 'pointer';
circle3.on('click', () => {
    cnt++;
    pnts = parseInt( $('#puntos').text()) + 10;
    $('#puntos').html(pnts)
    scene.remove(circle3)
    if (checkWin()) {
      
        $('#modalGanar').modal('show');

    }
 
}); 


pairsWin.push({
    a: circle2,
    b: circle3,
    msg: 'Selecciona el circulo blanco y el circulo azul',
});

let colors_random = ['yellow', 'black', 'red', 'purple'];

let llenarAleatorioCube = (num_fig) => {
    for (let i = 0; i < num_fig; i++) {
        let cube = new THREE.Mesh(
            new THREE.CubeGeometry(2, 2, 2),
            new THREE.MeshPhongMaterial({ color: colors_random[getRandomNumber(0,3)]})
          );
        cube.position.y = getRandomNumber(-15, 15);
        cube.position.x = getRandomNumber(-15, 15);
        cube.position.z = -10;
        cube.name = 'cube';
        cube.cursor = 'pointer';
        scene.add(cube);
        
        cube.on('click', () => {
  
              $('#modalPerder').modal('show');
        }); 
    }
}
let llenarAleatorioCircle = (num_fig) => {
    for (let i = 0; i < num_fig; i++) {
        let circle = new THREE.Mesh(
            new THREE.CircleGeometry(2, 32),
            new THREE.MeshBasicMaterial({ color: colors_random[getRandomNumber(0,3)]})
          );
        circle.position.y = getRandomNumber(-15, 15);
        circle.position.x = getRandomNumber(-15, 15);
        circle.position.z = -10;
        circle.name = 'cube';
        circle.cursor = 'pointer';
        scene.add(circle);
        
        circle.on('click', () => {
  
              $('#modalPerder').modal('show');
        }); 
    }
}



let crearNivel = () => {
    let ix = getRandomNumber(0, 2);
    scene.add(pairsWin[ix].a);
    scene.add(pairsWin[ix].b);
    let num_fig_cube = 4;
    let num_fig_circle = 4;
    llenarAleatorioCube(num_fig_cube);
    llenarAleatorioCircle(num_fig_circle);
    $('#msg_play').html(pairsWin[ix].msg);
}


crearNivel();

$('#time').html(10);
setInterval(() => {

  if(($('#time').text() >= 0) && !checkWin()){
    $('#time').html(parseInt($('#time').text() - 1))
  }
   
    if ($('#time').html() == '0'){
      $('#modalPerder').modal('show');
    }
      
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