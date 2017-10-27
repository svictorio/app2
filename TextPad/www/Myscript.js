closeSidebar();
function openSidebar() {
    document.getElementById("mySidebar").style.display = "block";
}
function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
}


function saveData(){
  var victorio = localStorage.getItem('sanje'), 
      arr = [];
  if (!victorio) { victorio = ''; }  
  arr = victorio.split(',');

  arr.push(document.getElementById("sanje").value);
  victorio = arr.join(' ');
  localStorage.setItem("sanje", victorio);
}

function showLS() {
  var ls = localStorage.getItem('sanje');
  document.getElementById('sanje').innerHTML =""+ls.substr(1);
}