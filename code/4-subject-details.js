// #####################################
// #### ----- Subject Details ----- ####
// #####################################

let subject = {
  name: 'DigiTech ',
  room: 'Room 9 ',
  students: 150,
  teacher: 'random middle-aged man',
}

function showSubject() {
  //shows the name of the subject and the room it is in
  alert(subject.name + subject.room)
}

function changeSubject() {
  //renames subject name typing skills
  let newName = 'Typing Skills'

  subject.name = newName
}

function changeTeacher() {
  let newTeacher = prompt('what is your teachers new name?')
  // shows teachers name
  subject.teacher = newTeacher
  alert('your teachers name is ' + subject.teacher)
}
