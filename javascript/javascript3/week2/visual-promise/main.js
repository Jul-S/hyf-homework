async function translateOneByOne() {
    await moveElement(document.getElementById("red-circle"), { x: 20, y: 300 });
    await moveElement(document.getElementById("blue-circle"), { x: 400, y: 300 });
    await moveElement(document.getElementById("green-circle"), { x: 400, y: 20 });
}

function translateAllAtOnce() {
    Promise.all([
        moveElement(document.getElementById("red-circle"), { x: 20, y: 300 }),
        moveElement(document.getElementById("blue-circle"), { x: 400, y: 300 }),
        moveElement(document.getElementById("green-circle"), { x: 400, y: 20 })
    ]).then(() => console.log("All elements have been moved"))
}
