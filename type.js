const ul = document.querySelector("ul");
const todos = document.querySelector(".todo");
const button = document.querySelector(".btn");
const clear = document.querySelector(".bt");
 const hit = document.querySelector('.checkeds')


if (!ul.children.length) {
  clear.style.display = "none";
}
 hit.style.display='none';


button.addEventListener("click", (e) => {
  if (todos.value) {
    e.preventDefault();
    const li = document.createElement("li");
    li.innerHTML = `<span ><input type="checkbox" class='checkbox' style='display:none;'> ${todos.value} </span> <button class='times'>X</button>`;
    ul.appendChild(li);

    const deletes = li.querySelector(".times");
    deletes.addEventListener("click", () => {
      ul.removeChild(li);

      if (!ul.children.length) {
        clear.style.display = "none";
      }
    });
      const hit = document.querySelector('.checkeds')

     
    const checkbox = li.querySelector(".checkbox");
    const checks =ul.querySelectorAll('.checkbox')
    checkbox.addEventListener("click", (e) => {
      console.log(e);

      const checkboxes = ul.querySelectorAll(".checkbox");
      const anyChecked = Array.from(checkboxes).some(
        (checkbox) => checkbox.checked
      );

      clear.style.display = anyChecked ? "block" : "none";
      hit.style.display=anyChecked ? 'block' : 'none';
    });


     clear.addEventListener("click", (e) => {
         const checkboxes=ul.querySelectorAll('.checkbox')
         checkboxes.forEach(checkbox=>{
            if(checkbox.checked){
            const lis = checkbox.closest('li')
                ul.removeChild(lis)
                clear.style.display = "none";
                hit.checked=false;
                hit.style.display = "none";

            }
         })
      });

  const lists = ul.querySelectorAll('li')
      lists.forEach(list=>{
        list.addEventListener('touchstart', (e)=>{
          setTimeout(()=>{
             checks.forEach(check=>{
        check.style.display='flex'
        
       })
          },2000)
      

       
    })
      })
    
   

     hit.addEventListener('click',(e)=>{
      console.log(e.target)
       if(e.target.checked){
        checks.forEach(check=>{
          check.checked = true
        })
       }else{
         checks.forEach(check=>{
          check.checked = false
           clear.style.display = "none";
        })
       }
     })

  }
});
