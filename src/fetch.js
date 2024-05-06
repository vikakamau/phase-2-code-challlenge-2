export function getBots(){
    return fetch("http://localhost:3000/bots")
    .then(res=> res.json())
}
 
export function getBotById(id){
    return fetch(`http://localhost:3000/bots/${id}`)
    .then(res=> res.json())
}
export function deleteBotById(id) {
    return fetch(`http://localhost:3000/bots/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
}