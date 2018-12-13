/*new Promise ((resolve, reject) => {
    setTimeout(() => {
        reject (new Error ('mon erreur'))
        resolve('hey')
    }, 2000)
}).then(() => {
console.log(str)
return new Promise((resolve, reject)=>{
    setTimeout(() => {
    resolve('other')
    }, 2000)
})
}).then(() => {
    console.log(str2)
    }).then(() => {
        console.log('ok')
        }).then(() => {
            console.log('ok')
            }).catch(() => {
                console.log(err)
            })*/


 const http = require('axios')           

async function foo(){
 /*   HTMLOutputElement.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data)*/
  try{
   const res = await http.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data)
}catch (err){
    console.log(err.response.status)
    throw err.response.status
}
}            

foo().then(() => {
    console.log('terminé')
}).catch(err => console.log(err))