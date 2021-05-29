function init() {

  // const firstName = (window.prompt("Hello There what is your name?"))
  // let lifes=Number(window.prompt(`hello ${firstName} how many lifes do you want to begin with?`))

  // if (lifes>5){
  //   lifes=Number(window.prompt(`${firstName} dont you think you asking for too many lifes choose again but less that 5 this time!?`))
  // }

  // if (lifes>5){
  //   lifes=Number(window.prompt(`${firstName} dont you think you asking for too many lifes choose again but less that 5 this time!?`))
  // }
  const scoreDisplay=document.querySelector('.score-display')
  const lifesDisplay=document.querySelector('.lifes-display')
  let score=0
  let lifes=3
  // scoreDisplay.innerText=score
  lifesDisplay.innerText=lifes

  // console.log(scoreDisplay,lifesDisplay)
  
  console.log(lifes)

  const theGrid = document.querySelector(".grid-screen")
  console.log(theGrid)
  const width = 20
  const numberCells = width * (width) - 39
  console.log("the number of cells:", numberCells)
  const cellsArray = []
  console.log("my array with all divs:", cellsArray)


  // spaceship stuff
  const spaceshipClass = 'spaceShip'
  const shipStartPosition = numberCells - 11
  let shipCurrentPosition = numberCells - 11


  //! this is enemy stuff
  const enemyClass = "enemy"
  const enemyStartPosition = 7
  let enemyCurrentPosition = 7






  //?The Grid
  function createGrid() {
    for (let i = 1; i < numberCells; i++) {
      const cell = document.createElement("div")
      cell.innerText = i
      theGrid.appendChild(cell)
      cellsArray.push(cell)
    }
    addSpaceShip(shipStartPosition)
    addEnemy(enemyStartPosition)
  }



  //Add the ship to the grid
  function addSpaceShip(position) {
    console.log('ADD SPACESHIP:', position)
    cellsArray[position].classList.add(spaceshipClass)
    console.log("ship current poss",shipCurrentPosition)
  }

  //! add enemy to the grid!
  function addEnemy(position) {
    console.log('ADD EENEMY FUNCTION', position)
    cellsArray[position].classList.add(enemyClass)
    console.log("enemy current pos" ,enemyCurrentPosition)
  }

  //remove spacehip to the grid
  function removeSpaceShip(position) {
    console.log("REMOVE SPACESHIP FUNCTION")
    cellsArray[position].classList.remove(spaceshipClass)
  }

  //!remove enemy from the grid
  function removeEnemy(position) {
    cellsArray[position].classList.remove(enemyClass)
  }

  //movement logic 
  function handleKeyUp(event) {
    const key = event.keyCode
    console.log("MOVEMENT LOGIC",key)
    removeSpaceShip(shipCurrentPosition)

    if (key == 39 && shipCurrentPosition < numberCells - 2) {
      shipCurrentPosition++
    }
    if (key == 37 && shipCurrentPosition > 0) {
      shipCurrentPosition--
    }
    if (key == 38 && shipCurrentPosition >= width) {
      shipCurrentPosition = shipCurrentPosition - width
    }
    if (key == 40 && shipCurrentPosition < 341) {
      shipCurrentPosition = shipCurrentPosition + width
    }

    addSpaceShip(shipCurrentPosition)
  }


  document.addEventListener('keyup', handleKeyUp)
  createGrid()
  enemymoves(enemyStartPosition)
  //! move enemy
  function enemymoves(position) {
    addEnemy(position)

    const timer = setInterval(() => {
      removeEnemy(enemyCurrentPosition)
      console.log("ENEMY MOVEMENT", position)
      enemyCurrentPosition = enemyCurrentPosition + 1
      addEnemy(enemyCurrentPosition)
      //collision detection 
      if (shipCurrentPosition==enemyCurrentPosition){
        lifes--
        lifesDisplay.innerText=lifes
      }


    }, 10000)
  }
    
    
    
  


}
window.addEventListener('DOMContentLoaded', init)