const t=["Усі","Онлайн","Офлайн","Корпоративні"],e=["Артем","Катя","Олег"],n=["Оля","Максим","Марк"],s=["Группа 1 ( вайбер)","Группа 2 ( вайбер)","Группа 1 (офлайн)"],o=["Додати студента","Редагувати студента","Видалити студента","Додати викладача","Редагувати викладача","Видалити викладача"],l=[{name:"Артем",tarrif:3500,role:"student",groop:"Группа 1 (вайбер)",allLessons:8,checkLessons:0,id:1},{name:"Катя",tarrif:2500,role:"student",groop:"Группа 1 (вайбер)",allLessons:8,checkLessons:0,id:2},{name:"Олег",tarrif:2500,role:"student",groop:"Группа 1 (вайбер)",allLessons:8,checkLessons:0,id:3}],c=document.querySelector(".admin-list"),r=document.querySelector(".content");function a(t){const e=document.querySelector(".content");for(let n=0;n<=3;n++){const s=document.createElement("button");s.textContent=`${t[n]}`,s.classList.add("content-btn"),s.style.marginRight="15px",s.style.padding="8px 15px",e.appendChild(s)}}function i(t){const e=document.createElement("select"),n=document.querySelector(".content");e.id="contentSelect",e.classList.add("select"),e.style.width="20%",e.style.borderRadius="10px",e.style.padding="8px 20px",e.style.margin="0 0 0 15px";for(let n=0;n<=t.length-1;n++){const s=document.createElement("option");s.value=`${n}`,s.textContent=`${t[n]}`,e.appendChild(s)}n.appendChild(e)}c.addEventListener("click",(function(c){c.target.classList.contains("groups")?(r.innerHTML="",a(t),i(s),function(t){const e=document.querySelector(".content"),n=document.createElement("table");n.classList.add("table","table-sm","table-dark");const s=n.createTHead().insertRow();s.insertCell(0).textContent="Имя",s.insertCell(1).textContent="Группа",s.insertCell(2).textContent="Тариф",s.insertCell(3).textContent="Количество уроков",s.insertCell(4).textContent="Посещённых уроков";const o=n.createTBody();for(const e of t){const t=o.insertRow();t.insertCell(0).textContent=e.name,t.insertCell(1).textContent=e.groop,t.insertCell(2).textContent=e.tarrif,t.insertCell(3).textContent=e.allLessons,t.insertCell(4).textContent=e.checkLessons}e.appendChild(n)}(l)):c.target.classList.contains("student")?(r.innerHTML="",a(t),i(e)):c.target.classList.contains("teacher")?(r.innerHTML="",a(t),i(n)):c.target.classList.contains("managment")?(r.innerHTML="",function(t){const e=document.querySelector(".content");for(let n=0;n<=t.length-1;n++){const s=document.createElement("button");s.textContent=`${t[n]}`,s.classList.add("content-btn"),s.style.marginRight="15px",s.style.padding="8px 15px",e.appendChild(s)}}(o)):c.target.classList.contains("stats")}));
//# sourceMappingURL=admin.5ad5c19e.js.map