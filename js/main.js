
const countPlusElement = document.getElementById('id')('.add');
const countMinusElement = document.getElementById('id')('.substract');
const countDisplayElement = document.querySelector('.count-display');
const val = parseInt(document.querySelector('input.valueInputField').value, 10);

let input = Num;
let value = 0;

function(makeACount){
  count++;
}
// event listeners
countPlusElement.addEventListener('click', () => {
count++;
makeACount();
});

countMinusElement.addEventListener('click', () =>{
count--;
makeACount();
});
