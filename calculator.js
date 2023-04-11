// function append(val){
//     document.getElementById("display").value +=val;
//    }

//     function clear1(){
//      let cler = " ";
//      document.getElementById("display").value = cler ;
//      // document.getElementById("display").value +='';

//     }
//  function calculate(){
//  let exp =  document.getElementById("display").value ;
//   let result = eval(exp);
//   document.getElementById("display").value = result;
//  }
function append(val){
        document.getElementById("display").value +=val;
       }
    
        function clear1(){
         let cler = " ";
         document.getElementById("display").value = cler ;
         // document.getElementById("display").value +='';
    
        }
function calculate() {
    let expression = document.getElementById("display").value;
    let operands = expression.split(/[+\-*/]/);
    let operator = expression.match(/[+\-*/]/);
  //agr operator  2 lag jayn or ya to operator na ho to ERror dy ga 
    if (operands.length !== 2 || !operator) {
      // Invalid expression
      document.getElementById("display").value = "Error";
      return;
    }
  
    let a = parseFloat(operands[0]);
    let b = parseFloat(operands[1]);
    let res = a+b
    console.log(res);

    let result;
  
    switch (operator[0]){
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = a / b;
        break;
    }
  
    document.getElementById("display").value = result;
  }
  