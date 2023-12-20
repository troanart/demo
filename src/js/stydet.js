import 'bootstrap' 
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
  // 'Додати групу',
  // "Редагувати групу",
  // "Видалити групу"
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
    salary: 600,
    id: 1,
    groop: 'Группа 1 (вайбер)',
    income: '950',
    numberOfLessons: 5,
  },

  {
    name: 'Марк',
    role: 'teacher',
    bid: 250,
    salary: 800 ,
    id: 1,
    groop: 'Группа 2 (вайбер)',
    income: 250,
    numberOfLessons: 7,
  },
  {
    name: 'Олег',
    role: 'teacher',
    bid: 300,
    salary: 1000,
    id: 1,
    groop: 'Группа 1 (офлайн)',
    income: 500,
    numberOfLessons: 4,
  },
];

const teacherSalary = [];

teachers.forEach( teacher => {
  teacherSalary.push(teacher.bid)
})

console.log(teacherSalary)

const checkboxesData = [
  { id: 'salaryFilter', label: 'Больший доход', value: 'option1' },
  { id: '"incomeFilter', label: 'Большая зарплата', value: 'option2' },
  { id: 'lessonsFilter', label: 'Большее кол-во занятий', value: 'option3', }
];








const btnList = document.querySelector('.admin-list');
const mainContent = document.querySelector('.content');
btnList.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.classList.contains('groups')) {
    mainContent.innerHTML = '';
    renderButtons(nameBtn);
    renderSelect(groupsName);
  } else if (e.target.classList.contains('student')) {
    mainContent.innerHTML = '';
    renderButtons(nameBtn);
    renderSelect(selectStudents);
  } else if (e.target.classList.contains('teacher')) {
    mainContent.innerHTML = '';
    renderTeachersTable()
  } else if (e.target.classList.contains('managment')) {
    mainContent.innerHTML = '';
    renderManagment(manageBtn);
  } else if (e.target.classList.contains('stats')) {
  }
}




// Группы ----------------------------------------

function renderTableGroop(selectedOption,array) {
  
  const tableContainer = document.querySelector('.content');
 
  const title = document.createElement('h2');
  title.textContent = `Выбрано: ${selectedOption}`;
  tableContainer.appendChild(title);

  const table = document.createElement('table');
  table.classList.add('table', 'table-sm', 'table-dark')

  const headerRow = table.createTHead().insertRow();
  headerRow.insertCell(0).textContent = 'Имя';
  headerRow.insertCell(1).textContent = 'Группа';
  headerRow.insertCell(2).textContent = 'Тариф';
  headerRow.insertCell(3).textContent = 'Количество уроков';
  headerRow.insertCell(4).textContent = 'Посещённых уроков';
  
  const tbody = table.createTBody();
  for (let i = 0; i <= array.length - 1; i++) {
      const row = tbody.insertRow();
      row.insertCell(0).textContent = students[i].name;
      row.insertCell(1).textContent = students[i].groop;
      row.insertCell(2).textContent = students[i].tarrif;
      row.insertCell(3).textContent = students[i].allLessons;
      row.insertCell(4).textContent = students[i].checkLessons;

      // row.addEventListener('click', () => {
      //     createNewTableWithDates(students[i].name);
      // });
      row.addEventListener('click', (function (currentIndex) {
        return function () {
            createNewTableWithDates(array[i].name, currentIndex);
        };
    })(i));
  }
  
  tableContainer.appendChild(table);
}



function createNewTableWithDates(studentName, index) {
  
  const newTableContainer = document.querySelector('.content');
  const newTable = document.createElement('table');
  newTable.classList.add('table', 'table-sm', 'table-dark')

  const newHeaderRow = newTable.createTHead().insertRow();
  const nameCell = newHeaderRow.insertCell(0);
  nameCell.textContent = `${studentName}`;

  newHeaderRow.insertCell(1);

  for (let i = 1; i <= 14; i++) {
    const date = i < 10 ? `0${i}.11` : `${i}.11`;
    const cell = newHeaderRow.insertCell(i);
    cell.textContent = date;

     cell.addEventListener('click', (function () {
      return function () {
          if (cell.style.backgroundColor === 'red') {
            cell.style.backgroundColor = '';
        } else {
            cell.style.backgroundColor = 'red';
            students[index].checkLessons += 1;
        }
      };
     })(i))
  }
  newTableContainer.appendChild(newTable);
}

//----------------------------------------------

// Общие -----------------------------------------
function renderButtons(array) {
  const mainContent = document.querySelector('.content');
  const list = document.createElement('ul')
  list.classList.add( 'mx-auto', 'p-2', 'd-flex', 'justify-content-center')


  for (let i = 0; i <= array.length - 1 ; i++) {
    const button = document.createElement('button');
    button.textContent = `${array[i]}`;
    button.classList.add('content-btn', 'btn' ,'btn-primary');
    button.style.marginRight = '15px';
    button.style.padding = '8px 50px';
    list.appendChild(button)
  }
  mainContent.appendChild(list);
}

function renderSelect(array) {
  console.log(array)
  const select = document.createElement('select');
  const mainContent = document.querySelector('.content');
  select.id = 'contentSelect';
  select.classList.add('form-select', "mt-2", 'mb-2');

  for (let i = 0; i <= array.length - 1; i++) {
    const option1 = document.createElement('option');
    option1.value = `${i}`;
    option1.textContent = `${array[i]}`;
    select.appendChild(option1);
  }
 
  mainContent.appendChild(select);
  select.addEventListener('change', () =>  renderTableGroop(select.value, students));
}

// ----------------------------------------------------------------------------

/// Управление 

function renderManagment(array) {
  const mainContent = document.querySelector('.content');
  const list = document.createElement('ul')
  list.classList.add( 'mx-auto', 'p-2', 'd-flex', 'justify-content-center')
 
  for (let i = 0; i <= array.length - 1; i++) {
    const button = document.createElement('button');
    button.textContent = `${array[i]}`;
    button.classList.add('content-btn', 'btn' ,'btn-primary');
    button.style.marginRight = '15px';
    button.style.padding = '8px 50px';
    list.appendChild(button);
  }

  mainContent.appendChild(list)
  
}

// Викладач -----------------------------------------------------

function renderTeachersTable() {
  const contentContainer = document.querySelector('.content');
  contentContainer.innerHTML = '';

  const searchInput = document.createElement('input');
  searchInput.type = 'search';
  searchInput.placeholder = 'Поиск';
  contentContainer.appendChild(searchInput);

  checkboxesData.forEach(checkboxData => {
    const div = document.createElement('div');
    div.classList.add('form-check', 'form-check-inline');

    const input = document.createElement('input');
    input.classList.add('form-check-input');
    input.type = 'checkbox';
    input.id = checkboxData.id;
    input.value = checkboxData.value;
    input.disabled = checkboxData.disabled || false;

    const label = document.createElement('label');
    label.classList.add('form-check-label');
    label.htmlFor = checkboxData.id;
    label.textContent = checkboxData.label;

    div.appendChild(input);
    div.appendChild(label);

    contentContainer.appendChild(div);
  });

  const createBtnFilter = document.createElement('button')
  createBtnFilter.textContent = 'Додати фільтр'
  contentContainer.appendChild(createBtnFilter)
  createBtnFilter.addEventListener('click', applyFilters)

  const teachersTable = document.createElement('table');
  teachersTable.classList.add('table', 'table-sm', 'table-hover', 'mt-5');

  const headerRow = teachersTable.createTHead().insertRow();
  headerRow.insertCell(0).textContent = 'Имя';
  headerRow.insertCell(1).textContent = 'Группа';
  headerRow.insertCell(2).textContent = 'Ставка';
  headerRow.insertCell(3).textContent = 'Количество уроков';
  headerRow.insertCell(4).textContent = 'ЗП';
  headerRow.insertCell(5).textContent = 'Доход';

  const tbody = teachersTable.createTBody();
  for (let i = 0; i < teachers.length; i++) {
    const row = tbody.insertRow();
    row.insertCell(0).textContent = teachers[i].name;
    row.insertCell(1).textContent = teachers[i].groop;
    row.insertCell(2).textContent = teachers[i].bid;
    row.insertCell(3).textContent = teachers[i].numberOfLessons;
    row.insertCell(4).textContent = teachers[i].salary;
    row.insertCell(5).textContent = teachers[i].income;
  }

  contentContainer.appendChild(teachersTable);


  function applyFilters() {
   
    
    const checkboxes = document.querySelectorAll('.form-check-input')
    
    const filteredTeachers = teachers.filter(teacher => {
      salaryArray.push(teacher.salary);
    });

    renderFilteredTeachersTable(filteredTeachers);
  }

  function renderFilteredTeachersTable(teachersData) {
    const tbody = teachersTable.tBodies[0];
    tbody.innerHTML = '';

    for (let i = 0; i < teachersData.length; i++) {
      const row = tbody.insertRow();
      row.insertCell(0).textContent = teachersData[i].name;
      row.insertCell(1).textContent = teachersData[i].groop;
      row.insertCell(2).textContent = teachersData[i].bid;
      row.insertCell(3).textContent = teachersData[i].numberOfLessons;
      row.insertCell(4).textContent = teachersData[i].salary;
      row.insertCell(5).textContent = teachersData[i].income;
    }
  }

  searchInput.addEventListener('input', function () {
    const filterValue = searchInput.value.toLowerCase();

    for (let i = 1; i < teachersTable.rows.length; i++) {
      const row = teachersTable.rows[i];
      let isVisible = false;

      for (let j = 0; j < row.cells.length; j++) {
        const cellValue = row.cells[j].textContent.toLowerCase();

        if (cellValue.includes(filterValue)) {
          isVisible = true;
          break;
        }
      }

      row.style.display = isVisible ? '' : 'none';
    }
  });
}


