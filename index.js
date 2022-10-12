const inputNumber = document.querySelectorAll('.calculator')
const display = document.getElementById('display');





const calculate = (x, y, o) => {
 
  switch(o) {
    case '+':
      console.log(x + y)
      return x + y;
      break;
    
    case '-':
      console.log(x -y);
      return x - y;
      break;

    case '*':
      console.log(x * y);
      return x * y;

    case '/':
      console.log(x / y);
      return x / y;
      break;
  }
}

const clearScreen = () => {
  return display.innerHTML = ''
}