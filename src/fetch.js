export function getBots(){
    return fetch("https://code-challenge-2-deploy-1.onrender.com/bots")
    .then(res=> res.json())
}
 
export function getBotById(id){
    return fetch(`https://code-challenge-2-deploy-1.onrender.com/bots/${id}`)
    .then(res=> res.json())
}
export function deleteBotById(id) {
    return fetch(`https://code-challenge-2-deploy-1.onrender.com/bots/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
}