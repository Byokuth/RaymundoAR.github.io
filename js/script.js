const marker = document.querySelector('a-marker');
const modelo = document.getElementById("modelo");
const botones = document.getElementById("botones");

let animControl = false;

marker.addEventListener('markerFound', () => 
{
    botones.hidden = false;
});

marker.addEventListener('markerLost', () => 
{
    botones.hidden = true;
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