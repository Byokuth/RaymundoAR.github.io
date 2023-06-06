const marker = document.querySelector('a-marker');
const botonAnim = document.getElementById("botonAnim");
const botonTexture = document.getElementById("botonTexture");
const modelo = document.getElementById("modelo");

let animControl = false;
let textureControl = false;

marker.addEventListener('markerFound', () => 
{
    botonAnim.hidden = false;
    botonAnim.hidden = false;
});

marker.addEventListener('markerLost', () => 
{
    botonTexture.hidden = true;
    botonTexture.hidden = true;
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
    modelo.removeAttribute('gltf-model');
    if(textureControl)
    {
        modelo.setAttribute('gltf-model','model\skipper2.glb');
        textureControl = false;
    }
    else
    {
        modelo.setAttribute('gltf-model','model\skipper.glb');
        textureControl = true;
    }
}