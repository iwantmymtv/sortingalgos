import _ from 'lodash';
import hljs from 'highlight.js';

import Bar from './BarCanvas';
import  { shuffle } from './utils';
import  Algos from './animatedAlgos';
import {content} from './datas';
import {timeAlgos} from './timeAlgos';


const algoTitle = document.getElementById("algoTitle");
const barnum = document.getElementById("barnumbers");
const canh = document.getElementById("height");
const canw = document.getElementById("width");
const speed = document.getElementById("speed");
const shuffleData = document.getElementById("shuffleData");
const startAlgo = document.getElementById("startAlgo");
const stopAlgo = document.getElementById("stopAlgo");
const canvas = document.getElementById('bar');
const c = new Bar(canvas,50);
const a = new Algos();

let currentAlgo;

c.canWidthStyle();
c.canHeightStyle(`${canh.value}px`);
c.populateData();
c.generateHeights();
c.drawBars(c.data);


barnum.addEventListener('change', (event) => {
  if (a.startedAnimation){
    UIkit.notification("Cannot set during animation...",{status:'warning',pos:'top-right',timeout:'1500'});
    return;
  }
  if (event.target.value > 500){
    c.setBarMargin = 0;
  } else if(event.target.value < 500){
    c.setBarMargin = 2;
  }
  c.barsCount = event.target.value;
  c.populateData();
  c.drawBars(c.data);
});

startAlgo.addEventListener('click', function() {
  if (JSON.stringify(c.data) === JSON.stringify(c.sortedData)){
    UIkit.notification("Already Sorted...",{status:'success',pos:'top-right',timeout:'1500'});
    a.startedAnimation = false;
    return
  } else if(a.startedAnimation){
    UIkit.notification("Already started sorting...",{status:'danger',pos:'top-right',timeout:'1500'});
    return
  }
  a.cancel=false; 
  a.startedAnimation = true;
  currentAlgo();
});


shuffleData.addEventListener('click', () => {
  if (!a.startedAnimation){
    shuffle(c.data)
    c.drawBars(c.data);
  }else{
    UIkit.notification("Can't shuffle during sorting...",{status:'danger',pos:'top-right',timeout:'1500'});
    return
  }
});

speed.addEventListener('change', (event) => {
  c.speed = event.target.value;
});


canh.addEventListener('change', (event) => {
  c.canHeightStyle(`${event.target.value.toString()}px`);
});

canw.addEventListener('change', (event) => {
  c.canWidthStyle(`${event.target.value.toString()}%`);
});

stopAlgo.addEventListener('click', () => {
  a.cancel = true;
  a.startedAnimation = false;
});

const newAlgos = document.getElementsByClassName('newAlgo');
const jsCode = document.getElementById("javascript");
const pythonCode = document.getElementById("python");
const cCode = document.getElementById("clang");
const wikiLink = document.getElementById("wikiID");
function changeContentText(id){
  var doctitle = document.getElementsByTagName("TITLE")[0];
  doctitle.innerHTML = content[id].title
  wikiLink.setAttribute("src",content[id].wikiLink)
  algoTitle.innerHTML = content[id].title
  jsCode.innerHTML = content[id].codes.js 
  pythonCode.innerHTML = content[id].codes.python
  cCode.innerHTML = content[id].codes.c  
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
}

document.addEventListener('DOMContentLoaded', (event) => {
  changeContentText("bubbleSortID");
  currentAlgo = () => a.animatedBubbleSort(c,(k,j) => {c.drawBars(c.data,j)})
  const comp = document.getElementById('compareList')
  Object.keys(content).map(function(key) {
    let ob = content[key];
    let li = document.createElement('li');
    li.className ="uk-width-1-1 uk-margin-small-top"
    let label = `
        <label>
            <input class="uk-checkbox checkTime" type="checkbox" alg="${ob.timeFuncName}"> ${ob.title}
        </label>
      <span class="uk-margin-left uk-text-bold uk-text-italic" ></span>
    `
    li.innerHTML = label
    comp.appendChild(li); 
    
  });

});

for(let i = 0; i < newAlgos.length; i++) {
  newAlgos[i].addEventListener("click", function() {
    UIkit.offcanvas(document.getElementById("offcanvas-push")).hide();
    if (a.startedAnimation){
      UIkit.notification("Can't change algorithm during sorting...",{status:'danger',pos:'top-right',timeout:'1500'});
      return;
    }
    var algoid =this.id; 
    switch(algoid){
      case "bubbleSortID":
        changeContentText("bubbleSortID");
        document.querySelectorAll('pre code').forEach((block) => {
          hljs.highlightBlock(block);
        });
        currentAlgo = () => a.animatedBubbleSort(c,(k,j) => {c.drawBars(c.data,j)})
        break
      case "selectionSortID":
        changeContentText("selectionSortID");
        currentAlgo = () => a.animatedSelectionSort(c,(k,j) => {c.drawBars(c.data,j)})
        break  
      case "insertionSortID":
        changeContentText("insertionSortID");
        currentAlgo = () => a.animatedInsertionSort(c,(k,j) => {c.drawBars(c.data,j)})
        break
      case "mergeSortID":
        changeContentText("mergeSortID");
        currentAlgo = () => a.animatedMergeSort(c,(k,j) => {c.drawBars(c.data,j)})
        break
      case "quickSortID":
        changeContentText("quickSortID");
        currentAlgo = () => a.animatedQuickSort(c,(k,j) => {c.drawBars(c.data,j)})
        break 
      case "heapSortID":
        changeContentText("heapSortID");
        currentAlgo = () => a.animatedHeapSort(c,(k,j) => {c.drawBars(c.data,j)})
        break             
    }
  })
}

const compare = document.getElementById("compareAlgos");

compare.addEventListener("click",() => {
  timeAlgos();
});







