var btn =  Array.from(document.querySelectorAll(".btnn"));
console.log(btn)
for ( var i = 0 ;i< btn.length ;i++ )
{
    btn[i].addEventListener("click" ,show)
}
function show()
{
    var come = this.nextElementSibling;
  console.log(come)
  if ( come.style.display =="block")
  {
     
      come.style.display ="none";
    
     
    
  } else
  {
      come.style.display="block";
     
    
  }
}