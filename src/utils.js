export function shuffle(array) {
	var currentIndex = array.length;
	var temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};

export function findMinIndex(arr){
  return arr.indexOf(Math.min.apply(Math, arr));
}

export function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }  
  return result.concat(left.slice(l)).concat(right.slice(r));
}
        

export function mergeSort(arr){
  var len = arr.length;
  if(len <2)
     return arr;
  var mid = Math.floor(len/2),
      left = arr.slice(0,mid),
      right =arr.slice(mid);
  //send left and right to the mergeSort to broke it down into pieces
  //then merge those
  return merge(mergeSort(left),mergeSort(right));
}

export function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export function partition(arr, pivot, left, right){
  var pivotValue = arr[pivot],
      partitionIndex = left;

  for(var i = left; i < right; i++){
   if(arr[i] < pivotValue){
     swap(arr, i, partitionIndex);
     partitionIndex++;
   }
 }
 swap(arr, right, partitionIndex);
 return partitionIndex;
}

export function max_heapify(a, i, length) {
  while (true) {
      var left = i*2 + 1;
      var right = i*2 + 2;
      var largest = i;

      if (left < length && a[left] > a[largest]) {
          largest = left;
      }

      if (right < length && a[right] > a[largest]) {
          largest = right;
      }

      if (i == largest) {
          break;
      }

      swap(a, i, largest);
      i = largest;
  }
}

export function heapify(a, length) {
  for (var i = Math.floor(length/2); i >= 0; i--) {
      max_heapify(a, i, length);
  }
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
