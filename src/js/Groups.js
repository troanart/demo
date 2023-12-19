// const groupsButton = document.querySelector(".groups");
// groupsButton.addEventListener("click", renderButtonsAndSelect);
// console.log(groupsButton);

// function renderButtonsAndSelect() {
//   const mainContent = document.querySelector("main");

//   // Очищаем содержимое main
//   mainContent.innerHTML = "";

//   // Создаем 4 кнопки
//   for (let i = 1; i <= 4; i++) {
//     const button = document.createElement("button");
//     button.textContent = `Группа ${i}`;
//     button.classList.add("btn", "btn-primary");
//     mainContent.appendChild(button);
//   }

//   // Создаем элемент select
//   const select = document.createElement("select");
//   select.id = "contentSelect";
//   select.classList.add("select");
//   // select.style.marginTop = "10px";

//   // Добавляем три опции в select
//   const option1 = document.createElement("option");
//   option1.value = "option1";
//   option1.textContent = "Группа 1 (вайбер)";
//   select.appendChild(option1);

//   const option2 = document.createElement("option");
//   option2.value = "option2";
//   option2.textContent = "Группа 2 (вайбер)";
//   select.appendChild(option2);

//   const option3 = document.createElement("option");
//   option3.value = "option3";
//   option3.textContent = "Группа 1 (офлайн)";
//   select.appendChild(option3);

//   mainContent.appendChild(select);
// }

// function renderGroupContent() {
//   const mainContent = document.querySelector("main");

//   mainContent.innerHTML = "";

//   // Создаем контент для группы
//   const groupContent = document.createElement("p");
//   groupContent.textContent = "Контент для группы";

//   // Добавляем контент в main
//   mainContent.appendChild(groupContent);
// }
