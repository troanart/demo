const nameBtn = ['Усі', 'Онлайн', 'Офлайн', 'Корпоративні'];
const selectStudents = ['Артем', 'Катя', 'Олег'];
const selectTeachers = ['Оля', 'Максим', 'Марк'];
const groupsName = [
  'Группа 1 ( вайбер)',
  'Группа 2 ( вайбер)',
  'Группа 1 (офлайн)',
];
const manageBtn = [
  'Додати студента',
  'Редагувати студента',
  'Видалити студента',
  'Додати викладача',
  'Редагувати викладача',
  'Видалити викладача',
];
const students = [
  {
    name: 'Артем',
    tarrif: 3500,
    role: 'student',
    groop: 'Группа 1 (вайбер)',

    allLessons: 8,
    checkLessons: 0,
    id: 1,
  },
  {
    name: 'Катя',
    tarrif: 2500,
    role: 'student',
    groop: 'Группа 1 (вайбер)',
    allLessons: 8,
    checkLessons: 0,
    id: 2,
  },
  {
    name: 'Олег',
    tarrif: 2500,
    role: 'student',
    groop: 'Группа 1 (вайбер)',
    allLessons: 8,
    checkLessons: 0,
    id: 3,
  },
];

const teachers = [
  {
    name: 'Ольга',
    role: 'teacher',
    bid: 150,
    salary: 0,
    id: 1,
  },
];

const btnList = document.querySelector('.admin-list');
const mainContent = document.querySelector('.content');
btnList.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.classList.contains('groups')) {
    mainContent.innerHTML = '';
    renderButtons(nameBtn);
    renderSelect(groupsName);
    createTable(students);
  } else if (e.target.classList.contains('student')) {
    mainContent.innerHTML = '';
    renderButtons(nameBtn);
    renderSelect(selectStudents);
  } else if (e.target.classList.contains('teacher')) {
    mainContent.innerHTML = '';
    renderButtons(nameBtn);
    renderSelect(selectTeachers);
  } else if (e.target.classList.contains('managment')) {
    mainContent.innerHTML = '';
    renderManagment(manageBtn);
  } else if (e.target.classList.contains('stats')) {
  }
}

function renderButtons(array) {
  const mainContent = document.querySelector('.content');

  // mainContent.innerHTML = "";

  for (let i = 0; i <= 3; i++) {
    const button = document.createElement('button');
    button.textContent = `${array[i]}`;
    button.classList.add('content-btn');
    button.style.marginRight = '15px';
    button.style.padding = '8px 15px';
    mainContent.appendChild(button);
  }
}

function renderSelect(array) {
  const select = document.createElement('select');
  const mainContent = document.querySelector('.content');
  select.id = 'contentSelect';
  select.classList.add('select');
  select.style.width = '20%';
  select.style.borderRadius = '10px';
  select.style.padding = '8px 20px';
  select.style.margin = '0 0 0 15px';

  for (let i = 0; i <= array.length - 1; i++) {
    const option1 = document.createElement('option');
    option1.value = `${i}`;
    option1.textContent = `${array[i]}`;
    select.appendChild(option1);
  }

  // const option2 = document.createElement("option");
  // option2.value = "option2";
  // option2.textContent = "Катя";
  // select.appendChild(option2);

  // const option3 = document.createElement("option");
  // option3.value = "option3";
  // option3.textContent = "Олег";
  // select.appendChild(option3);

  mainContent.appendChild(select);
}

function renderManagment(array) {
  const mainContent = document.querySelector('.content');

  // mainContent.innerHTML = "";

  for (let i = 0; i <= array.length - 1; i++) {
    const button = document.createElement('button');
    button.textContent = `${array[i]}`;
    button.classList.add('content-btn');
    button.style.marginRight = '15px';
    button.style.padding = '8px 15px';
    mainContent.appendChild(button);
  }
}

function renderStats() {
  const tableContainer = document.querySelector('.content');

  const table = document.createElement('table');
  table.classList.add('table', 'table-sm', 'table-dark');

  const headerRow = table.createTHead().insertRow();
  headerRow.insertCell(0).textContent = 'Имя';
  headerRow.insertCell(1).textContent = 'Группа';
  headerRow.insertCell(2).textContent = 'Тариф';
  headerRow.insertCell(3).textContent = 'Количество уроков';
  headerRow.insertCell(4).textContent = 'Посещённых уроков';

  // Добавление данных в таблицу
  const tbody = table.createTBody();
  for (const student of students) {
    const row = tbody.insertRow();
    row.insertCell(0).textContent = student.name;
    row.insertCell(1).textContent = student.groop;
    row.insertCell(2).textContent = student.tarrif;
    row.insertCell(3).textContent = student.allLessons;
    row.insertCell(4).textContent = student.checkLessons;
  }
  // tableContainer.innerHTML = "";
  tableContainer.appendChild(table);
}

function createTable(students) {
  // Определение контейнера для таблицы
  const tableContainer = document.querySelector('.content');

  // Создание таблицы
  const table = document.createElement('table');
  table.classList.add('table', 'table-sm', 'table-dark');

  // Создание заголовка таблицы
  const headerRow = table.createTHead().insertRow();
  headerRow.insertCell(0).textContent = 'Имя';
  headerRow.insertCell(1).textContent = 'Группа';
  headerRow.insertCell(2).textContent = 'Тариф';
  headerRow.insertCell(3).textContent = 'Количество уроков';
  headerRow.insertCell(4).textContent = 'Посещённых уроков';

  // Добавление данных в таблицу
  const tbody = table.createTBody();
  for (const student of students) {
    const row = tbody.insertRow();
    row.insertCell(0).textContent = student.name;
    row.insertCell(1).textContent = student.groop;
    row.insertCell(2).textContent = student.tarrif;
    row.insertCell(3).textContent = student.allLessons;
    row.insertCell(4).textContent = student.checkLessons;

    // Поиск учителя по идентификатору
    // const teacher = teachers.find((t) => t.group === student.group);
    // if (teacher) {
    //   row.insertCell(3).textContent = teacher.name;
    // } else {
    //   row.insertCell(3).textContent = "Нет учителя";
    // }
  }

  // Очистка контейнера и добавление таблицы
  // tableContainer.innerHTML = "";
  tableContainer.appendChild(table);
}

// function renderStats() {}
