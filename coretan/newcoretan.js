class Calcalator{
  constructor(previousOpValue, currentOpValue){
    this.previousOpValue = previousOpValue;
    this.currentOpValue = currentOpValue;
    this.allClear();
  }
  allClear(){
    this.previousOp = '';
    this.currentOp = '';
    this.Operation = undefined;
    this.previousOpValue.textContent = '';
    this.currentOpValue.textContent = '';
  }
  clear(){
    this.currentOp = `${this.currentOp}`.slice(0, -1); //remove last digit
  }
  getNumber(number){
    if (number == '.' && this.currentOp == '.') return; //prevent to add more than . 
    this.currentOp += `${number}`;
  }
  selecedOperation(operation){
    if (this.currentOp === '') return;// prevent to add emplay value to previousOp
    if (this.previousOp !== '') this.compute(); // this mean  before operation calced and prev has vlaue ;
    this.Operation = operation;
    this.previousOp = this.currentOp;
    this.currentOp = '';
  }
  compute(){
    let computation; // store result opreation;
    const prev = parseFloat(this.previousOp); // convert string Number to number
    const curr = parseFloat(this.currentOp); // 
    if (isNaN(prev) || isNaN(curr)) return;
    switch (this.Operation) {
      case '+':
        if (prev < 1 && curr < 1) computation = (prev * 10 + curr * 10) / 10;
        else computation = prev + curr;
        break;
      case '-':
        computation = prev - curr;
        break;
      case '*':
        computation = prev * curr;
        break;
      case '÷':
        computation = prev / curr;
        break;
      case '%':
        computation = (prev * 0.01) * curr;
        break;
        Defualt:
        return;
    }
    this.currentOp = computation;
    this.previousOp = '';
    this.Operation = undefined;
  }
  updateDisplay(){
    this.currentOpValue.textContent = this.currentOp;
    if (this.Operation != undefined) {
      this.previousOpValue.textContent = `${this.previousOp} ${this.Operation}`;
    } else {
      this.previousOpValue.textContent = this.previosOp;
    }

  }
}
const calcalator = new Calcalator(previousOperand, currentOperand);
btnNumber.forEach(button => {
  button.addEventListener('click', () => {
    calcalator.getNumber(button.textContent);
    calcalator.updateDisplay();
  });
});
allClear.addEventListener('click', () => {
  calcalator.allClear();
  calcalator.updateDisplay();
});
Clear.addEventListener('click', () => {
  calcalator.clear();
  calcalator.updateDisplay();
});
operandKey.forEach(button => {
  button.addEventListener('click', () => {
    calcalator.selecedOperation(button.textContent);
    calcalator.updateDisplay();
  });
});
equal.addEventListener('click', () => {
  calcalator.compute();
  calcalator.updateDisplay();
});

