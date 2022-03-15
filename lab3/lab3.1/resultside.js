let text =document.getElementById("fullname");
let btn = document.getElementById("rad");
let sel = document.getElementById("select");
let radios = document.querySelectorAll("input[type=radio][name=gender]");
let tick = document.querySelectorAll("input[type=checkbox][name=Chooseme]");
let output2 = document.getElementById('out2')
let output3 = document.getElementById("out3");
let output4 = document.getElementById("out4");
let selection = document.querySelectorAll("input[for=Select][name=option]")


radios.forEach( rad => {
    rad.addEventListener("click",func2);
    });

    function func2(e){
      output3.innerHTML = e.target.value
    }
 
  tick.forEach( chek => {
      chek.addEventListener("click",func1);
  });

  function func1(e){
    output2.innerHTML = e.target.value
      
  }
   function func4(e) {
     let selection = document.getElementById("select").selectedIndex;
     output4.innerHTML = document.getElementsByTagName("option")[select].value;
   }
    selection.addEventListener("click",func4);