//book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//ui constructor
function UI() {}

UI.prototype = {
  addBookToLIst: function(book) {
    const list = document.getElementById("book-list");
    //create tr element
    const row = document.createElement("tr");
    //Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</a></td>
    `;
    list.appendChild(row);
  },

  clearFields: function() {
    (document.getElementById("title").value = ""),
      (document.getElementById("author").value = ""),
      (document.getElementById("isbn").value = "");
  },

  showAlert : function(message,className){
      //create div 
      const div = document.createElement('div');
      //add class 
      div.className = `alert ${className}`;
      //add text 
      div.appendChild(document.createTextNode(message))
      //get parrent 
      const container = document.querySelector('.container');
      //get form 
      const form = document.querySelector('#book-form');
      //insert alert 
      container.insertBefore(div,form);

      // remove error after 3 sec 
      setTimeout(function(){
        document.querySelector('.alert').remove()
      },3000)
  },

  deleteBook : (target)=>{
    if(target.className =='delete'){
        target.parentElement.parentElement.remove();
    }
  }

};

//event listeners
document.getElementById("book-form").addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;
  console.log(title, author, isbn);
  //instantiate ui
  const uu = new UI();
  if (title === "" || author === "" || isbn === "") {
    //Error alert
    uu.showAlert('please fill fields','error');
  } else {
    //instantiate book
    const book = new Book(title, author, isbn);

    //add book to list
    uu.addBookToLIst(book);
    uu.clearFields();
  }
}

// Event listener for delete 
document.getElementById('book-list').addEventListener('click',handleDelete);

function handleDelete(e){
 //instantiate ui
  const uu = new UI();

  //delete book 
  uu.deleteBook(e.target);

  //show message
  uu.showAlert('Book Removed!','success');
  e.preventDefault();
}
