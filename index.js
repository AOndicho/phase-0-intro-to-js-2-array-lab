// Write your solution here!
const cats=['Milo', 'Otis', 'Garfield'];
beforeEach(function () {

    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyAppendCat(){
      cats.push('Ralph')
  }

  function destructivelyAppendCat(name){
      cats.push(name)
  }

  function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop()
}

function destructivelyRemoveFirstCat(name){
    cats.shift()
}

function appendCat(name){
    let newCats=cats.slice()
    newCats.push(name)
    console.log(newCats)
    return newCats
}

function prependCat(name){
    let newCats=cats.slice()
    newCats.unshift(name)
    return newCats
}

function removeLastCat(){
    let newArray=cats.slice(0,2)
    return newArray
}

function removeFirstCat(){
    let newArray=cats.slice(1)
    return newArray
}