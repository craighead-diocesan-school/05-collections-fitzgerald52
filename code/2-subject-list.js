// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = ['English', 'Digital Technology']

function showSubjects() {
  alert(subjects)
}

function addSubject() {
  let answer = ''
  while (answer != 'stop') {
    let newSubject = prompt('choose a new subject to add')

    // add a new item to the end of the subjects array
    subjects.push(newSubject)
    answer = prompt('do you want to add another subject, if not say stop')
  }
}

function removeSubject() {
  let index = prompt('choose a number to delete a subject')
  index = Number(index)

  let arrayLength = subjects.length
  if (index < arrayLength) {
    // remove 1 item at the index position of the subjects array
    subjects.splice(index, 1)
  } else {
    alert('index value invalid')
  }
}
