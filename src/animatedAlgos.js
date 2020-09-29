import { swap, sleep,max_heapify,heapify } from './utils';

export default class Algos {
  constructor() {
    this.cancel = false;
    this.startedAnimation = false;
  }
  async animatedBubbleSort(c, drawCallback) {
    var len = c.data.length;
    for (var i = len - 1; i >= 0; i--) {
      for (var j = 1; j <= i; j++) {
        if (this.cancel) {
          return;
        }
        await sleep(c.speed);
        if (c.data[j - 1] > c.data[j]) {
          var temp = c.data[j - 1];
          c.data[j - 1] = c.data[j];
          c.data[j] = temp;
          drawCallback(c.data, j);
        }
      }
    }
    drawCallback(c.data);
    this.startedAnimation = false;
  }

  async animatedSelectionSort(c, drawCallback) {
    var minIdx, temp,
      len = c.data.length;
    for (var i = 0; i < len; i++) {
      minIdx = i;
      for (var j = i + 1; j < len; j++) {
        if (c.data[j] < c.data[minIdx]) {
          minIdx = j;
          if (this.cancel) {
            return;
          }
          await sleep(c.speed)
          drawCallback(c.data, minIdx)
        }
      }
      temp = c.data[i];
      c.data[i] = c.data[minIdx];
      c.data[minIdx] = temp;
    }
    drawCallback(c.data)
    this.startedAnimation = false;

  }

  async animatedInsertionSort(c, drawCallback) {
    var i, len = c.data.length, el, j;

    for (i = 1; i < len; i++) {
      el = c.data[i];
      j = i;

      while (j > 0 && c.data[j - 1] > el) {
        if (this.cancel) {
          return;
        }
        await sleep(c.speed)
        drawCallback(c.data, j)
        c.data[j] = c.data[j - 1];
        j--;
      }

      c.data[j] = el;
    }
    drawCallback(c.data)
    this.startedAnimation = false;

  }

  animatedMergeSort(c, drawCallback) {
    const mergeSort = (array) => {
      var arrays = [array.slice()],
        n = array.length,
        m = 1,
        i = 0,
        array0 = array,
        array1 = new Array(n);
      const nextIteration = () => {

        if (m < n) {
          for (i = 0; i < n; i += (m << 1)) {
            merge(i, Math.min(i + m, n), Math.min(i + (m << 1), n));
          }

          arrays.push(array1.slice());
          array = array0, array0 = array1, array1 = array;
          m <<= 1
          drawCallback(array)
          setTimeout(nextIteration, c.speed);
        } else {
          drawCallback(c.data)
          this.startedAnimation = false;
        }
      }
      nextIteration();


      function merge(left, right, end) {
        for (var i0 = left, i1 = right, j = left; j < end; ++j) {
          array1[j] = array0[i0 < right && (i1 >= end || array0[i0] <= array0[i1]) ? i0++ : i1++];
        }
      }
      return arrays;
    }
    mergeSort(c.data)

  }

  async animatedQuickSort(c, drawCallback) {
    const quickSort = async  (arr, left, right) => {
      var i = left;
      var j = right;
      var tmp;
      var pivotidx = (left + right) / 2;
      var pivot = parseInt(arr[pivotidx.toFixed()]);
      /* partition */
      while (i <= j) {
        while (parseInt(arr[i]) < pivot)
          i++;
        while (parseInt(arr[j]) > pivot)
          j--;
        if (i <= j) {
          if (this.cancel) {
            return;
          }
          await sleep(c.speed)
          drawCallback(arr,j)
          tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
          i++;
          j--;
        }
      }

      /* recursion */
      if (left < j){
        await sleep(c.speed)
        quickSort(arr, left, j);
        drawCallback(arr)
      }
       
      if (i < right){
        await sleep(c.speed)
        quickSort(arr, i, right);
        drawCallback(arr)
      }
      if (JSON.stringify(c.data) === JSON.stringify(c.sortedData) ){
        drawCallback(c.data)
        this.startedAnimation = false;
      }

    }
    await quickSort(c.data,0,c.data.length-1)

  }
  async animatedHeapSort(c, drawCallback) {
    var len = c.data.length;
    for (var i = Math.floor(len/2); i >= 0; i--) {
      max_heapify(c.data, i, len);
      if (this.cancel) {
        return;
      }
      await sleep(c.speed)
      drawCallback(c.data,i)
    }
    for (var i = len - 1; i > 0; i--) {
        swap(c.data, i, 0);
        max_heapify(c.data, 0, i-1);
        await sleep(c.speed)
        drawCallback(c.data,i)
        if (this.cancel) {
          return;
        }
    }

    drawCallback(c.data)
    this.startedAnimation = false;
  }

}

