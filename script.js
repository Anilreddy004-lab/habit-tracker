function addHabit(){

let input = document.getElementById("habitInput");
let habit = input.value;

if(habit === ""){
alert("Please enter a habit");
return;
}

let li = document.createElement("li");

let span = document.createElement("span");
span.textContent = habit;

let delBtn = document.createElement("button");
delBtn.textContent = "Delete";
delBtn.className = "delete";

delBtn.onclick = function(){
li.remove();
};

li.appendChild(span);
li.appendChild(delBtn);

document.getElementById("habitList").appendChild(li);

input.value="";
}