const form = document.getElementsByTagName('*')[0];
const lable = document.createElement('label');
const input = document.createElement('input');
const submit = document.createElement('input');
const fieldset = document.getElementById('first');
const content = document.createElement('textarea');

lable.textContent = 'Topic: '
input.type = "text";
input.id = "title";
input.name = "input"
content.id = "info"
content.name = "content"
content.rows = "5";
content.cols = "30";
submit.type = "submit";


fieldset.appendChild(lable);
fieldset.appendChild(input);
fieldset.appendChild(content);
fieldset.appendChild(submit);

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  const title = event.target.title.value;
  const content = event.target.content.value;

  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.textContent = title;
  p.textContent = content;

  const formContent = document.getElementById('render');

  formContent.appendChild(h2);
  formContent.appendChild(p);
}