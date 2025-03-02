document.getElementById("discover").addEventListener('click', function () {
  window.location.href = "index2.html";
})
//btn 1
const btn1 = document.getElementById("completeBtn1").addEventListener('click',
  function () {
    alert("Board updated successfully");//alert
  
   //add text
   const btn1 = document.getElementById('extra-add');
   const text = document.createElement('p');
   text.innerText='Fix Mobile Button Issue';
   btn1.appendChild(text);

   //disable
  this.disabled = true;
  this.style.backgroundColor = "#A0AEC0";
  this.style.opacity = 0.5;
  this.innerText = "Completed";
  });

  

//btn2
document.getElementById('completeBtn2').addEventListener('click', function () {
  alert("Board updated successfully");

//add text
  const btn2 = document.getElementById('extra-add');
   const text = document.createElement('p');
   text.innerText='Add Dark Mode';
   btn2.appendChild(text);

   //disable
   this.disabled = true;
   this.style.backgroundColor = "#A0AEC0";
   this.style.opacity = 0.5;
   this.innerText = "Completed"; 
})
//btn3
document.getElementById('completeBtn3').addEventListener('click', function () {
  alert("Board updated successfully");
     
  //add text
  const btn3 = document.getElementById('extra-add');
   const text = document.createElement('p');
   text.innerText='Add Dark Mode';
   btn3.appendChild(text);

   //disable
   this.disabled = true;
   this.style.backgroundColor = "#A0AEC0";
   this.style.opacity = 0.5;
   this.innerText = "Completed";
})
//btn4
document.getElementById('completeBtn4').addEventListener('click', function () {
  alert("Board updated successfully");

  //add text
  const btn4 = document.getElementById('extra-add');
   const text = document.createElement('p');
   text.innerText='Add new emoji';
   btn4.appendChild(text);

   //disable
   this.disabled = true;
   this.style.backgroundColor = "#A0AEC0";
   this.style.opacity = 0.5;
   this.innerText = "Completed";
})
//btn 5
document.getElementById('completeBtn5').addEventListener('click', function () {
  alert("Board updated successfully");

  //add text
  const btn5 = document.getElementById('extra-add');
   const text = document.createElement('p');
   text.innerText='Integrate OpenAI API';
   btn5.appendChild(text);

   //disable
   this.disabled = true;
   this.style.backgroundColor = "#A0AEC0";
   this.style.opacity = 0.5;
   this.innerText = "Completed";
})
//btn6

document.getElementById('completeBtn6').addEventListener('click', function () {
  alert("Board updated successfully");

  //add text
  const btn6 = document.getElementById('extra-add');
   const text = document.createElement('p');
   text.innerText='Improve Job searching';
   btn6.appendChild(text);

   //disable
   this.disabled = true;
   this.style.backgroundColor = "#A0AEC0";
   this.style.opacity = 0.5;
   this.innerText = "Completed";
})

//clear history btn
const button =document.getElementById('clear-history').addEventListener('click',
  function(){
    document.getElementById('extra-add').innerHTML = ''; 
})
