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
