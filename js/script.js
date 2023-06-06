const marker = document.querySelector('a-marker');
const modelo = document.getElementById("modelo");

const botonAnim = document.getElementById("botonAnim");
const botonTexture = document.getElementById("botonTexture");

let animControl = false;
let textureControl = false;

marker.addEventListener('markerFound', () => 
{
    botonAnim.hidden = false;
    botonTexture.hidden = false;
});

marker.addEventListener('markerLost', () => 
{
    botonAnim.hidden = true;
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
        modelo.setAttribute('gltf-model','model\skipper1.glb');
        animControl = false;
    }
    else
    {
        modelo.setAttribute('gltf-model','model\skipper2.glb');
        animControl = true;
    }
}