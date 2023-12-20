// const students = [
//   {
//     name: "Артем",
//     tarrif: 3500,
//     role: "student",
//     groop: "Группа 1 (вайбер)",

//     allLessons: 8,
//     checkLessons: 0,
//     id: 1,
//   },
//   {
//     name: "Катя",
//     tarrif: 2500,
//     role: "student",
//     groop: "Группа 1 (вайбер)",
//     allLessons: 8,
//     checkLessons: 0,
//     id: 2,
//   },
//   {
//     name: "Олег",
//     tarrif: 2500,
//     role: "student",
//     groop: "Группа 1 (вайбер)",
//     allLessons: 8,
//     checkLessons: 0,
//     id: 3,
//   },
// ];

// const teachers = [
//   {
//     name: "Ольга",
//     role: "teacher",
//     bid: 150,
//     salary: 0,
//     id: 1,
//   },
// ];

// function createTable(teachers, students) {
//   // Определение контейнера для таблицы
//   const tableContainer = document.querySelector(".content");

//   // Создание таблицы
//   const table = document.createElement("table");
//   table.classList.add("table", "table-sm", "table-dark");

//   // Создание заголовка таблицы
//   const headerRow = table.createTHead().insertRow();
//   headerRow.insertCell(0).textContent = "Имя";
//   headerRow.insertCell(1).textContent = "Группа";
//   headerRow.insertCell(2).textContent = "Тариф";
//   headerRow.insertCell(3).textContent = "Количество уроков";
//   headerRow.insertCell(4).textContent = "Посещённых уроков";

//   // Добавление данных в таблицу
//   const tbody = table.createTBody();
//   for (const student of students) {
//     const row = tbody.insertRow();
//     row.insertCell(0).textContent = student.name;
//     row.insertCell(1).textContent = student.groop;
//     row.insertCell(2).textContent = student.tarrif;
//     row.insertCell(3).textContent = student.allLessons;
//     row.insertCell(4).textContent = student.checkLessons;

//     // Поиск учителя по идентификатору
//     // const teacher = teachers.find((t) => t.group === student.group);
//     // if (teacher) {
//     //   row.insertCell(3).textContent = teacher.name;
//     // } else {
//     //   row.insertCell(3).textContent = "Нет учителя";
//     // }
//   }

//   // Очистка контейнера и добавление таблицы
//   tableContainer.innerHTML = "";
//   tableContainer.appendChild(table);
// }

// document.querySelector(".groups").addEventListener("click", () => {
//   createTable(teachers, students);
// });
