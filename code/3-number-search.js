// #####################################
// ##### ----- Number Search ----- #####
// #####################################

let numberArray = [1, 100, 1000, 10000, 1234567890, 35, 26, 902]

function searchNumbers() {
  //choses a number to search
  let searchTarget = prompt('what number do you want to search for ?')
  searchTarget = Number(searchTarget)
  let searchResult = false

  for (let currentNumber of numberArray) {
    //if number is in the index says true
    if (currentNumber == searchTarget) {
      searchResult = true
    }
  }
  if (searchResult == true) {
    alert(searchTarget + ' found: ' + searchResult + ' congrats ' + searchTarget + ' was found !!!')
  } // if number is not in index say can not be found
  else {
    searchResult == false
    alert(searchTarget + ' found: ' + searchResult + ' sorry that number can not be found ')
  }
}
