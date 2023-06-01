const marker = document.querySelector('a-marker');

const button1 = document.getElementById("boton");

marker.addEventListener('markerFound', () => 
{
    button1.hidden = false;
});

marker.addEventListener('markerLost', () => 
{
    button1.hidden = true;
});