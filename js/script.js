const marker = document.querySelector('a-marker');
const botonAnim = document.getElementById("botonAnim");
const modelo = document.getElementById("modelo");

let animControl = false;

marker.addEventListener('markerFound', () => 
{
    botonAnim.hidden = false;
});

marker.addEventListener('markerLost', () => 
{
    botonAnim.hidden = true;
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