import TimeAlgos from './simpleAlgosTiming';
import {shuffle} from './utils';

const t = new TimeAlgos();

export function timeAlgos(){
  let size;
  
  let data = [];
  const dataSize = document.getElementById("dataSize");

  size = dataSize.value;
  if (!size){
    UIkit.notification("You must set a data size",{status:'danger',pos:'top-right',timeout:'1500'});
    return;
  }
  for (let i = 1; i <= size; i++) {
    data.push(i);
  };
  const check = document.getElementsByClassName('checkTime');
  let res = document.getElementById('bubbleResult');
  for (let c of check) {
    shuffle(data);
    if(c.checked){
      let alg = c.getAttribute('alg')
      const time = t[alg](data)
      c.parentNode.nextElementSibling.innerHTML = `Sorting an array of ${size} numbers took <span class="uk-label" style="background:#00ad28">${time / 1000}</span> seconds`
    }else{
      c.parentNode.nextElementSibling.innerHTML = ""
    }
  } 
}