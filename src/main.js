console.log('main.js is there')
// Some starter code
document.querySelector("#btn-lego_save").addEventListener("click", () => {
    const creator = document.querySelector("#lego_creator").value
    const color = document.querySelector("#lego_color").value
    const shape = document.querySelector("#lego_shape").value
    const creation = document.querySelector("#lego_creation").value
    // Once you have collected all the values, build your data structure
    const legoToSave = buildLegoInfo(creator, color, shape, creation)
    addNewLego(legoToSave)
        .then(data => data.json)
        .then(dataJS => {
            console.table(dataJS)
        })
})
function addNewLego(creation) {
    fetch("http://localhost:8088/legos", { // Replace "url" with your API's URL
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(creation)
    })
}

function buildLegoInfo(creator, color, shape, creation) {
    return ({
        creator: creator,
        color: color,
        shape: shape,
        creation: creation
    })
}
