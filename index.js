"use strict";

const tasks = [
  {
    id: 1,
    body: "I.I",
    prioritet: false,
    option: [],
    worker: "teamleed",
  },
];

const pattern = /^[А-Я][а-я]{3,15} ([А-Я]\.){2}$/;

const { form } = document.forms;
const {body:BodyInput} = form.elements;

BodyInput.addEventListener('change', ({target})=>{
if (pattern.test(target.value)) {
    target.style.setProperty('background-color', '')
}
else{
    target.style.setProperty('background-color', 'pink')
}
})


const ulListTasks = document.createElement("ul");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { body, prioritet, multiprop, worker } = event.target.elements;

  const optionsArray = [];
  for (const propElem of multiprop) {
    if (propElem.checked) {
      optionsArray.push(propElem.value);
    }
  }

  const task = {
    id: tasks.length + 1,
    body: body.value,
    prioritet: prioritet.checked,
    option: [optionsArray],
    worker: worker.value,
  };
  console.log(task);
});

// const liTask = document.createElement("li");
// liTask.innerHTML = `<strong style="color:${tasks.prioritet ? "red" : "blue"}"> ${
//   tasks.body
// } <strong/> <em>(${tasks.worker})</em>`;
// ulListTasks.append(...liTasks);

const liTasks = tasks.map((task) => {
  const liTask = document.createElement("li");
  liTask.innerHTML = `<strong style="color:${
    task.prioritet ? "red" : "blue"
  }"> ${task.body} <strong/> <em>(${task.worker})</em>`;
  return liTask;
});
ulListTasks.append(...liTasks);

// const{form} =document.forms;
console.dir(form);
form.insertAdjacentElement("afterend", ulListTasks);
