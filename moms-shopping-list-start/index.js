function addLi() {
    const title = document.getElementById('title').value,
        listNode = document.getElementById('list');
        liNode = document.createElement("li"),
        txtNode = document.createTextNode(title);
        console.log(document.getElementById('title').value);

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);


    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.innerHTML = "edit";
    editBtn.addEventListener('click', (e) => {
        e.preventDefault();
    });
    liNode.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.setAttribute("id", "deleteBtn");
    deleteBtn.innerHTML = "X";
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        delItemFromList(e.target.parentNode);
    });
    liNode.appendChild(deleteBtn);
  }

  function delItemFromList(elem) {
    elem.parentNode.removeChild(elem);
}
  
  const myForm = document.querySelector('#add-todo');
  myForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
  });

  


