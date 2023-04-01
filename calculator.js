
function append(val){
    document.getElementById("display").value +=val; 
   }
 
    function clear1(){
     let cler = " ";
     document.getElementById("display").value = cler ; 
     // document.getElementById("display").value +='';
 
    }
 function calculate(){
 let exp =  document.getElementById("display").value ;
  let result = eval(exp);
  document.getElementById("display").value = result;
 }
 
     