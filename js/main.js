


const calculator = document.querySelector('.calculator');
const countButtons= document.querySelector('.operator');
const operator = e.target
const action = operator.dataset.action

if (!action){
  console.log('number')
}

if (
  action === "add" ||
  action === "substract"
){
  console.log('operator')
}






















countButtons.addEventListener('click', e=>{
  if (e.target.matches('button')){
    //count
  }
})
