const marker = document.querySelector('a-marker');
const modelo = document.getElementById("modelo");

let animControl = false;
let textureControl = false;

marker.addEventListener('markerFound', () => 
{

});

marker.addEventListener('markerLost', () => 
{

});

function controlAnimacion()
{
    modelo.removeAttribute('animation-mixer');
    if(animControl)
    {
        modelo.setAttribute('animation-mixer','clip: Static Pose');
        animControl = false;
    }
    else
    {
        modelo.setAttribute('animation-mixer','clip: Take 001');
        animControl = true;
    }
}

function controlTextura()
{
    if(textureControl)
    {
        modelo.setAttribute('gltf-model','model\skipper.glb');
        textureControl = false;
    }
    else
    {
        modelo.setAttribute('gltf-model','model\skipper.glb');
        textureControl = true;
    }
}