function hello(){
  console.log("hello")
}

function scheduler(fn) {
  
  setTimeout(fn, 100);
  
}

scheduler(hello)
