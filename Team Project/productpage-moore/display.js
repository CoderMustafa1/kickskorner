//sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


//popup
function openForm() {
  document.getElementById("myForm", "myform").style.display = "block";

}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}