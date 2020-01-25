const parallax = document.querySelector('.parallax__full');
const layers = parallax.children;

// По скроллу
// function moveLayersOnScroll(wScroll) {
    
//     Array.from(layers).forEach(layer =>{
//         const divider = layer.dataset.speed;
//         const strafe = wScroll * divider /20;

//         layer.style.transform = `translateY(-${strafe}%)`;
//     })
// }

// window.addEventListener('scroll', e =>{
//     const wScroll = pageYOffset;
//     moveLayersOnScroll(wScroll);
// })


// По движению мыши

function moveLayersOnMouseMove(x, y) {
    
    Array.from(layers).forEach(layer =>{
        const divider = layer.dataset.speed;

        const strafeX = -(x * divider /50);
        const strafeY = -(y * divider /50);

        layer.style.transform = `translate(${strafeX}%, ${strafeY}%)`;
    })
}

window.addEventListener('mousemove', e =>{
    const xOffset = document.documentElement.clientWidth/2 - e.clientX;
    const yOffset = document.documentElement.clientHeight/2 - e.clientY;

    moveLayersOnMouseMove(xOffset, yOffset);
})