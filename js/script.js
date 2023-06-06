const marker = document.querySelector('a-marker');
const modelo = document.getElementById("modelo");
const modelo2 = document.getElementById("modelo2");
let sound = document.getElementById("sound");

let animControl = false;
let textureControl = false;
let soundControl = false;

marker.addEventListener('markerFound', () => 
{

});

marker.addEventListener('markerLost', () => 
{

});

function controlAnimacion()
{
    modelo.removeAttribute('animation-mixer');
    modelo2.removeAttribute('animation-mixer');
    if(animControl)
    {
        modelo.setAttribute('animation-mixer','clip: Static Pose');
        modelo2.setAttribute('animation-mixer','clip: Static Pose');
        animControl = false;
    }
    else
    {
        modelo.setAttribute('animation-mixer','clip: Take 001');
        modelo2.setAttribute('animation-mixer','clip: Take 001');
        animControl = true;
    }
}

function controlTextura()
{
    modelo.removeAttribute('visible');
    modelo2.removeAttribute('visible');
    if(textureControl)
    {
        modelo.setAttribute('visible','true');
        modelo2.setAttribute('visible','false');
        textureControl = false;
    }
    else
    {
        modelo.setAttribute('visible','false');
        modelo2.setAttribute('visible','true');
        textureControl = true;
    }
}

function controlSonido()
{
    if(soundControl)
    {
        sound.pause();
        soundControl = false;
    }
    else
    {
        sound.load();
        sound.play();
        soundControl = true;
    }
}