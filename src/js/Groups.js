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

