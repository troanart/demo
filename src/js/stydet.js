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
  'Додати групу',
  "Редагувати групу",
  "Видалити групу"
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
    renderMarkup()
  }
}




// Группы ----------------------------------------
function renderButtons(array) {
  const mainContent = document.querySelector('.content');
  const list = document.createElement('ul')
  list.classList.add( 'mx-auto', 'p-2', 'd-flex', 'justify-content-center')


  for (let i = 0; i <= array.length - 1 ; i++) {
    const button = document.createElement('button');
    button.textContent = `${array[i]}`;
    button.classList.add( 'btn' ,'btn-primary');
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
  select.classList.add('form-select', "mt-2", 'mb-2', 'w-50', 'mx-auto');

  for (let i = 0; i <= array.length - 1; i++) {
    const option1 = document.createElement('option');
    option1.value = `${i}`;
    option1.textContent = `${array[i]}`;
    select.appendChild(option1);
  }
 
  mainContent.appendChild(select);
  select.addEventListener('change', () =>  renderTableGroop(select.value, students));
}




function renderTableGroop(selectedOption,array) {
  
  const tableContainer = document.querySelector('.content');
 
  const title = document.createElement('h2');
  title.textContent = `Выбрано: ${selectedOption}`;
  tableContainer.appendChild(title);

  const table = document.createElement('table');
  table.classList.add('table', 'table-sm', 'table-primary', 'table-bordered', 'border-secondary')

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

      
    //   row.addEventListener('click', (function (currentIndex) {
    //     return function () {
    //         createNewTableWithDates(array[i].name, currentIndex);
    //     };
    // })(i));

    

  }
  
  tableContainer.appendChild(table);
  table.addEventListener('click', createNewTableWithDates(students) )
}



function createNewTableWithDates(studentsArray) {
  const newTableContainer = document.querySelector('.content');
  const newTable = document.createElement('table');
  newTable.classList.add('table', 'table-sm', 'table-primary', 'table-bordered', 'border-primary', 'w-50', 'mx-auto');

  const newHeaderRow = newTable.createTHead().insertRow();
  const nameHeaderCell = newHeaderRow.insertCell(0);
  nameHeaderCell.textContent = 'ИМЯ';

  
  for (let i = 1; i <= 14; i++) {
    const date = i < 10 ? `0${i}.11` : `${i}.11`;
    const dateCell = newHeaderRow.insertCell(i);
    dateCell.textContent = date;
  }


  for (let i = 0; i < studentsArray.length; i++) {
    const studentRow = newTable.insertRow();
    const nameCell = studentRow.insertCell(0);
    nameCell.textContent = studentsArray[i].name;

    
    for (let j = 1; j <= 14; j++) {
      const dateCell = studentRow.insertCell(j);
      dateCell.addEventListener('click', (function (index, date) {
        return function () {
          toggleCellColor(index, date);
        };
      })(i, j));
    }
  }

  // newTableContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новой таблицы
  newTableContainer.appendChild(newTable);

  function toggleCellColor(studentIndex, dateIndex) {
    const cell = newTable.rows[studentIndex + 1].cells[dateIndex];
    if (cell.style.backgroundColor === 'red') {
      cell.style.backgroundColor = '';
      studentsArray[studentIndex].checkLessons -= 1;
    } else {
      cell.style.backgroundColor = 'red';
      studentsArray[studentIndex].checkLessons += 1;
    }
  }
}

// ----------------------------------------------------------------------------

/// Управление 

function renderManagment(array) {
  const mainContent = document.querySelector('.content');
  const list = document.createElement('ul');
  list.classList.add('managment-list', 'mx-auto', 'p-2', 'd-flex', 'justify-content-center', "gap-2", 'flex-wrap' )
  
  for (let i = 0; i <= array.length - 1; i++) {
    const button = document.createElement('button');
    button.textContent = `${array[i]}`;
    button.classList.add( 'btn' ,'btn-primary');
    list.appendChild(button);
  }

  mainContent.appendChild(list)
  list.addEventListener('click', (e) => {
    if(e.target.textContent === 'Додати студента') {
      renderAddStudentForm()
    }
    
  })
}
  function renderAddStudentForm() {
    const formContainer = document.querySelector('.tableContainer');
    formContainer.classList.add('d-flex','justify-content-center')
    formContainer.innerHTML = '';
    
  
    const form = document.createElement('form');
    form.classList.add('p-3', 'mt-5', 'border', 'border-primary','rounded')
    form.innerHTML = `
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="Iм'я" aria-label="First name"><br>
      </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Прізвище" aria-label="Last name"><br>
        </div>
    </div>
    <div class="row ">
      <div class="col">
        <input type="tel" class="form-control" placeholder="Телефон(+380)" aria-label="telephon"><br>
      </div>
      <div class="col">
      <select id="group" class="form-select" name="group">
        <option value="Группа 1">Группа 1</option>
        <option value="Группа 2">Группа 2</option>
        <!-- Добавьте остальные группы по аналогии -->
      </select><br>
      </div>
    </div>
    <div class="row ">
      <div class="col">
        <input type="number" class="form-control" placeholder="Тариф" aria-label="First name"><br>
      </div>
        <div class="col">
          <input type="number" class="form-control" placeholder="Депозит" aria-label="Last name"><br>
        </div>
    </div>
      <button class='form-btn btn btn-primary' type="button">Сохранить</button>
    `;
    formContainer.appendChild(form);
    const buton = document.querySelector('.form-btn')
    buton.addEventListener('click',saveStudent)
    
    function saveStudent() {
      formContainer.innerHTML = ''
      const miniContainer = document.createElement('div')
      miniContainer.innerHTML = `<div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
    `
    formContainer.appendChild(miniContainer)
   
      
      

      // const fullName = document.getElementById('fullName').value;
      // const phone = document.getElementById('phone').value;
      // const group = document.getElementById('group').value;
      // const tariff = document.getElementById('tariff').value;
      // const deposit = document.getElementById('deposit').value;

      // console.log('ФИО:', fullName);
      // console.log('Телефон:', phone);
      // console.log('Группа:', group);
      // console.log('Тариф:', tariff);
      // console.log('Депозит:', deposit);

      // formContainer.innerHTML = '';
    }
  }

// Викладач -----------------------------------------------------

function renderTeachersTable() {
  const contentContainer = document.querySelector('.content');
  contentContainer.innerHTML = '';

  const searchInput = document.createElement('input');
  searchInput.type = 'search';
  searchInput.classList.add('me-5', 'd-inline-block', 'rounded-pill', 'rounded-1', 'border', 'border-primary', 'p-2' )
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
  createBtnFilter.classList.add('btn','btn-primary')
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


//Статистика  -----------------------------------------------------------

function generateMarkup() {
  
  function generateRadioGroup(id, label) {
    return `
      <input type="radio" class="btn-check" name="btnradio" id="${id}" autocomplete="off">
      <label class="btn btn-outline-primary" for="${id}">${label}</label>
    `;
  }
 
  const radioGroup1 = generateRadioGroup('btnradio1', '2 недели');
  const radioGroup2 = generateRadioGroup('btnradio2', 'месяц');
  const radioGroup3 = generateRadioGroup('btnradio3', 'год');
  const radioButtons = `${radioGroup1}${radioGroup2}${radioGroup3}`;

 
  const calendarSection = `
    <div class="calendar ms-5 w-75 d-inline-flex justify-content-end ">
      <div class="me-1">
        <input type="email" placeholder="Від" class="form-control  " id="from1" aria-describedby="emailHelp">
      </div>
      <div class="me-1">
        <input type="text"  placeholder="До" class="form-control " id="to">
      </div>
    </div>
  `;


  const listSection = `
    <ul class="list-group-flush d-flex gap-2 justify-content-center mt-5 mb-5 p-2">
      <li class="list-group-item card  w-25">
        <div class="card-body text-center">
          <p class='card-text text-center  mb-2'>Всьго учнів</p>
          <button class='w-25 btn bg-info'>50</button>
        </div>
      </li>
      <li class="list-group-item card w-25">
        <div class="card-body text-center ">
          <p class='card-text text-center  mb-2'>Всього викладачів</p>
          <button class='w-25 btn bg-info'>5</button>
        </div>
      </li>
      <li class="list-group-item card w-50">
        <div class="card-body text-center">
          <p class='card-text text-center  mb-2'>Чистий дохід</p>
          <button class='w-25 btn bg-success'>5000</button>
        </div>
      </li>
      <li class="list-group-item card w-25 ">
        <div class="card-body text-center">
          <p class='card-text text-center mb-2'>Загальний дохід</p>
          <button class='w-25 btn bg-success'>8000</button>
        </div>
      </li>
    </ul>
  `;


  const radioGroup4 = generateRadioGroup('btnradio4', 'Загальна');
  const radioGroup5 = generateRadioGroup('btnradio5', 'Групи');
  const radioGroup6 = generateRadioGroup('btnradio6', 'Викладачі');
  const radioButtons2 = `${radioGroup4}${radioGroup5}${radioGroup6}`;


  const containerSection = `
    <div class="bg-light-subtle">
      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        ${radioButtons2}
      </div>
      <div class="mini-container">
        <p class="text-start">Загальний дохід: <span id="totalIncome"></span></p>
        <p class="text-start">Загальний дохід викладачів: <span id="totalIncomeTeacher"></span></p>
        <p class="text-start">Загальний дохід груп: <span id="totalIncomeGroup"></span></p>
        <p class="text-start">Загальний дохід груп Онлайн: <span id="totalIncomeGroupOffline"></span></p>
        <p class="text-start">Загальний дохід груп Офлайн: <span id="totalIncomeGroupOnline"></span></p>
        <p class="text-start">Загальний дохід груп Корпоративих: <span id="totalIncomeGroupCorporate"></span></p>
        <p class="text-end">Чистий дохід за місяць: <span id="clearIncome"></span></p>
      </div>
      
    </div>
  `;


  const finalMarkup = `
    ${radioButtons}
    ${calendarSection}
    ${listSection}
    ${containerSection}
  `;
 
  return finalMarkup ;
}

function renderMarkup() {
  const contentContainer = document.querySelector('.content');
  const markup = generateMarkup();
  contentContainer.innerHTML = markup;
}












