const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const d = document.querySelector('.date')
const da = new Date();


console.log(da);
d.innerHTML = da.toLocaleDateString()


function addTask(){
    if (inputBox.value === " "){
        alert("Write Something!")
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "x"
        li.appendChild(span)
    }
    inputBox.value = "";
    save();
}

listContainer.addEventListener('click',function(e){
     if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
     }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
     }
},false);

function save(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function show(){
    listContainer.innerHTML = localStorage.getItem("data");
}
show();