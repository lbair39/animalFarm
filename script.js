'use strict'

 const form = document.getElementsByTagName('FORM')[0];
//  const lable = document.createElement('label');
  // const input = document.createElement('input');
//  const submit = document.createElement('input');
const fieldset = document.getElementById('First');




form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  const title = event.target.title.value;
  const content = event.target.info.value;

  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  h1.textContent = title;
  p.textContent = content;

  const formContent = document.getElementById('render');

  formContent.appendChild(h1);
  formContent.appendChild(p);
}