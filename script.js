
document.addEventListener('DOMContentLoaded', function () 
{
    var scene = document.querySelector('a-scene');
    scene.addEventListener('click', function () {
        scene.enterVR();
    });
});