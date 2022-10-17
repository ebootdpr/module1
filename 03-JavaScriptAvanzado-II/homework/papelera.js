let cache = {}
function cacheFunction(cb) {
  return function(arg){
      if(!cache.hasOwnProperty(arg)) cache[arg] = cb(arg)
      return cache[arg]
  }
} 
let cache2 = {}
function cacheFunction2(cb) {
  return function(arg){
      if(!cache2.hasOwnProperty(cb)) cache2[cb] = cb(arg)
      return cache2[cb]
  }
} 

function square(n){
  return n * n
}

const squareCache = cacheFunction(square)
const squareCache2 = cacheFunction2(square)

squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
console.log(squareCache(5))  
console.log(squareCache2(5))  

console.log(cache)
console.log(cache2)