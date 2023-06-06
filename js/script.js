const marker = document.querySelector('a-marker');
const modelo = document.getElementById("modelo");

const botonAnim = document.getElementById("botonAnim");
const botonSound = document.getElementById("botonSound");
const botonText = document.getElementById("botonText");
const botonTexture = document.getElementById("botonTexture");

let animControl = false;

marker.addEventListener('markerFound', () => 
{
    botonAnim.hidden = false;
    botonSound.hidden = false;
    botonText.hidden = false;
    botonTexture.hidden = false;
});

marker.addEventListener('markerLost', () => 
{
    botonAnim.hidden = true;
    botonSound.hidden = true;
    botonText.hidden = true;
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