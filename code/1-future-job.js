// ##################################
// ##### ----- Future Job ----- #####
// ##################################

let jobs = [
  'Astronaut ',
  'Firefighter ',
  'Police officer ',
  'Space doctor ',
  'Microbiologists  ',
  'Teacher ',
]

function getJob() {
  let index = Math.floor(Math.random () * 5)
  index = Number(index) 
  alert('Your future job will be ' + jobs[index])
}
