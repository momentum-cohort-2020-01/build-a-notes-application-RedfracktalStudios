console.log('hello');


// readme example:
// fetch('http://localhost:3000/notes/', {
//   method: 'POST', 
//   headers: {"Content-Type": "application/json"}, 
//   body: JSON.stringify({"title": "Hi", "body": "COOL"})
// })

document.getElementById('btnSave').addEventListener('click', btnSave);
document.getElementById('btnWrite').addEventListener('click', btnWrite);

function postNote(noteText) {
  return fetch('http://localhost:3000/notes/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "title": "Hi", "body": "COOL" })()
  })

    .then(response => response.json())



  function getNote(noteText) {
    return fetch('http://localhost:3000/notes/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "title": "Hi", "body": "COOL" })

        .then(response => response.json())



// document.getElementById('btnSave').addEventListener('click', btnSave);

// function btnSave() {
//   .then((result) => {

// }).catch((err) => {

// });


//   document.getElementById('btnWrite').addEventListener('click', btnWrite);

//   function btnWrite() {
//   .then((result) => {

//   }).catch((err) => {

//   });
