const arrayOfNodes = Array.from(document.querySelectorAll('.mov'))

document.addEventListener('mousemove', (event) => {
    const posX = event.clientX;
    const posY = event.clientY;

    setParalax(posX, posY, arrayOfNodes)
})

function setParalax(posX, posY, targets) {
    targets.map(node => {
        node.style.transform = `translate(${posX / -100}px, ${posY / -100}px)`
    })
}