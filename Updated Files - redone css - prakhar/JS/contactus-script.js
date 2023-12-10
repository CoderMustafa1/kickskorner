document.addEventListener('DOMContentLoaded', function() {
  let submit = document.getElementById("popup");
  submit.addEventListener("click", function(){
      let dis = document.getElementById("reg");
      dis.style.display = 'block';
  });

  let hide = document.getElementById('hide');
  hide.addEventListener("click", function(){
      let dis = document.getElementById("reg");
      dis.style.display = 'none';
  });
});