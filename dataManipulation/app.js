// document.addEventListener("DOMContentLoaded", getTasks);
document.addEventListener("DOMContentLoaded", loadData);

function loadData() {
  let api = new HTTP();
  let tbody = document.createElement("tbody");
  tbody.className = "tbodyHook";
  api.get("https://jsonplaceholder.typicode.com/todos").then(data => {
    data.forEach(elm => {
      tbody.innerHTML += `<tr class='trSelector'>
                    <td class="sortSelector delete${elm.id}" uniqueId="${
        elm.id
      }">${elm.id}</td>
                    <td>${elm.userId}</td>
                    <td class="title">${elm.title}</td>
                    <td>${elm.completed}</td>
                    <td class="delete">X</td>
                    </tr>
                `;
    });
  });
  let appender = document.getElementById("table");
  appender.appendChild(tbody);
}

//access filter dom
let filter = document.querySelector("#filter");
filter.addEventListener("keyup", handleFilter);
function handleFilter(e) {
  let searchText = e.target.value.toLowerCase();

  // console.log(e.target.value);
  let titleDom = document.querySelectorAll(".title");
  console.log(titleDom);
  titleDom.forEach(data => {
    let textContent = data.textContent;
    if (textContent.toLowerCase().indexOf(searchText) != -1) {
      console.log(data.parentElement);
      data.parentElement.style.display = "table-row";
    } else {
      data.parentElement.style.display = "none";
    }
  });
  e.preventDefault();
}

// sort function
let sort = document.querySelector(".sort");
sort.textContent = "Sort by Desc"
sort.addEventListener("click", handleSorting);
let sortState = "asc";

function handleSorting(e) {
  e.preventDefault();

  let api = new HTTP();
  api.get("https://jsonplaceholder.typicode.com/todos").then(data => {
    let result;
    if (sortState === "asc") {

      result = data.sort((x, y) => {
        e.target.textContent = "Sort by Asc"

        //  console.log(x)
        sortState = "desc";
        return parseInt(y.id) - parseInt(x.id);
      });
    } else if (sortState === "desc") {
      result = data.sort((x, y) => {
        sortState = "asc";
        e.target.textContent = "Sort by Desc "

        return parseInt(x.id) - parseInt(y.id);
      });
    }
    let newtbody="";
    result.forEach(elm => {
        newtbody +=`<tr class='trSelector'>
                      <td class="sortSelector delete${elm.id}" uniqueId="${elm.id}">${elm.id}</td>
                      <td>${elm.userId}</td>
                      <td class="title">${elm.title}</td>
                      <td>${elm.completed}</td>
                      <td class="delete">X</td>
                      </tr>
                  `;
      });

      console.log(newtbody)

      document.querySelector(".tbodyHook").innerHTML = newtbody;

  });
}


let addRow = document.querySelector(".addRow");
addRow.addEventListener("click",function (e){
    e.preventDefault()
    
    let test = document.querySelectorAll(".trSelector");
    console.log(test);

    test.forEach((elm,index)=>{
        console.log(index+1);
        elm.style.display = "table-row";
        if((index+1) % 2 == 0){
            //even
            elm.style.display = "none";
            elm.disabled = true;
        } 
    }) 

})


let evenRow = document.querySelector(".evenRow");
evenRow.addEventListener("click",function (e){
    e.preventDefault()
    
    let test = document.querySelectorAll(".trSelector");
    console.log(test);

    test.forEach((elm,index)=>{
        elm.style.display = "table-row";
        console.log(index+1);
        if((index+1) % 2 == 0){
            //even
            
        } else {
            elm.style.display = "none";
        }
    }) 

})