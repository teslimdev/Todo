const ul = document.querySelector("ul");
const todos = document.querySelector(".todo");
const button = document.querySelector(".btn");
const clear = document.querySelector(".bt");

if (!ul.children.length) {
  clear.style.display = "none";
}

button.addEventListener("click", (e) => {
  if (todos.value) {
    e.preventDefault();
    const li = document.createElement("li");
    li.innerHTML = `<span><input type="checkbox" class='checkbox'> ${todos.value} </span> <button class='times'>X</button>`;
    ul.appendChild(li);

    const deletes = li.querySelector(".times");
    deletes.addEventListener("click", () => {
      ul.removeChild(li);

      if (!ul.children.length) {
        clear.style.display = "none";
      }
    });
    const checkbox = li.querySelector(".checkbox");

    checkbox.addEventListener("click", (e) => {
      console.log(e);

      const checkboxes = ul.querySelectorAll(".checkbox");
      const anyChecked = Array.from(checkboxes).some(
        (checkbox) => checkbox.checked
      );

      clear.style.display = anyChecked ? "block" : "none";

     
    });


     clear.addEventListener("click", (e) => {
         const checkboxes=ul.querySelectorAll('.checkbox')
         checkboxes.forEach(checkbox=>{
            if(checkbox.checked){
            const lis = checkbox.closest('li')
                ul.removeChild(lis)
                clear.style.display = "none";
            }
         })
      });
  }
});
