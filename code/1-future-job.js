// ##################################
// ##### ----- Future Job ----- #####
// ##################################

let jobs = ['Astronaut ', 'Firefighter ', 'Police officer ', 'Space doctor ', 'Microbiologists  ', 'Teacher ']

function getJob() {
  //choses a random number out of 5
  let index = Math.floor(Math.random() * 5)
  index = Number(index)
  //takes the number and see what index it lines up to
  alert('Your future job will be ' + jobs[index])
}
