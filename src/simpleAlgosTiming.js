import {mergeSort ,partition,heapify,max_heapify,swap} from './utils'

export default class TimeAlgos {
  constructor() {
    this.loading = false;
  }
 
  timeBubbleSort(arr) {
    var len = arr.length;
    var t0 = performance.now();
    this.loading = true;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    var t1 = performance.now();
    this.loading = false;
    return (t1 - t0);
  }
  timeSelectionSort(arr) {
    var minIdx, temp,
      len = arr.length;
    var t0 = performance.now();
    for (var i = 0; i < len; i++) {
      minIdx = i;
      for (var j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
    var t1 = performance.now();
    return (t1 - t0);
  }
  timeInsertionSort(arr) {
    var i, len = arr.length, el, j;
    var t0 = performance.now();
    for (i = 1; i < len; i++) {
      el = arr[i];
      j = i;

      while (j > 0 && arr[j - 1] > el) {
        arr[j] = arr[j - 1];
        j--;
      }

      arr[j] = el;
    }
    var t1 = performance.now();
    return (t1 - t0);
  }
  timeMergeSort (arr) {
    var t0 = performance.now();
    mergeSort(arr)
    var t1 = performance.now();
    return (t1 - t0);
  }

  timeQuickSort (arr){

    function quickSort(arr, left, right){
      var len = arr.length, 
      pivot,
      partitionIndex;
   
   
     if(left < right){
       pivot = right;
       partitionIndex = partition(arr, pivot, left, right);
       
      //sort left and right
      quickSort(arr, left, partitionIndex - 1);
      quickSort(arr, partitionIndex + 1, right);
     }
   }
   var t0 = performance.now();
   quickSort(arr,0,arr.length-1)
   var t1 = performance.now();
   return (t1 - t0);
  }

  timeHeapSort (a){
    var t0 = performance.now();
    heapify(a, a.length);

    for (var i = a.length - 1; i > 0; i--) {
        swap(a, i, 0);

        max_heapify(a, 0, i-1);
    }
    var t1 = performance.now();
    return (t1 - t0);
  }

}





