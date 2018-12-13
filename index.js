/*var name = 'jim'

function foo() {
    var name = 'ana'
    console.log(name)
}

foo()
console.log(name)
*/

/*var name = 'jim'

if (true) {
    let name = 'ana'
    console.log(name) //ana
}


console.log(name) //jim*/


/*
for(var i=0; i <=2 ; i++){ //non local
    $('#btn' + i).click(function(){
        console.log(i)
    })
}
*/

/*
for(let i=0; i <=2 ; i++){  //local
    $('#btn' + i).click(function(){
        console.log(i)
    })
}
*/

/*
const name = 'ana'
*/

/*
const name = 'ana'
var name = 'jim'
*/

/*
class User {
    constructor(){
        this.name = 'ana'
    }
avatar(){
    return '/images/' + this.name + '.jpg'
}
}

const user = new User()
console.log(user.avatar())
*/
/*
class User {
    constructor(){
        this.name = 'ana'
    }
avatar(){
    const self = this
    const url = function(){
    return '/images/' + this.name + '.jpg'
    }
    return url()
}
}

const user = new User()
console.log(user.avatar())
*/

/*
class User {
    constructor(){
        this.name = 'ana'
    }
avatar(){
    const url = () => '/images/' + this.name + '.jpg'
    
    return url()
}
}

const user = new User()
console.log(user.avatar())
*/

/*
class User {
    constructor(){
        this.name = 'ana'
    }
avatar(){
    const url = ext => '/images/' + this.name + '.' + ext //ex 1 
    const url = ext => `/images/${this.name}.${ext}` //ex2 ctrl è

    
    return url('png')
}
}

const user = new User()
console.log(user.avatar())

const array = [1,2,3].map(value => value * 2)


for(let i=0; i < array.length; i++){
    let item = array[i]
}

for(let item of array){

}

const obj = {
    directory : 'images',
    extension : 'png'
}

obj.directory
obj['directory']

for (let key in obj){
    console.log(obj[key])
}
*/


class User {
    constructor(){
        this.name = 'ana'
    }
avatar(params){
   /* const url = ext => '/images/' + this.name + '.' + ext //ex 1 */

   /* const directory = params.directory
   const extension = params.extension*/
    const{ diretory, extension} = params
    const url = ext => `/images/${this.name}.${ext}` //ex2  ctrl è

    
    return url('png')
}
}

const user = new User()
console.log(user.avatar())

const array = [1,2,3].map(value => value * 2)


for(let i=0; i < array.length; i++){
    let item = array[i]
}

for(let item of array){

}

/*
const obj = {  //ex1
    directory : 'images',
    extension : 'png'
}
*/

const directory = 'images'
const obj = {  //ex2
    directory,
    extension : 'png'
}

const user = new User()
console.log(user.avatar())

const array = [1,2,3].map(value => value * 2)


