export const bubblecodes = {
  js:
    `function bubbleSort(arr){
        var len = arr.length;
        for (var i = len-1; i>=0; i--){
          for(var j = 1; j<=i; j++){
            if(arr[j-1]>arr[j]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
          }
        }
        return arr;
    }`,
  python:
    `def bubble_sort(nums):
      # We set swapped to True so the loop looks runs at least once
      swapped = True
      while swapped:
          swapped = False
          for i in range(len(nums) - 1):
              if nums[i] > nums[i + 1]:
                  # Swap the elements
                  nums[i], nums[i + 1] = nums[i + 1], nums[i]
                  # Set the flag to True so we'll loop again
                  swapped = True`,
  c:
    `void bubbleSort(int arr[], int n) { 
      int i, j; 
      for (i = 0; i < n-1; i++)       
                
      // Last i elements are already in place    
      for (j = 0; j < n-i-1; j++)  
        if (arr[j] > arr[j+1]) 
        swap(&arr[j], &arr[j+1]); 
    } `,
}

export const selectioncodes = {
  js:
    `function selectionSort(arr){
      var minIdx, temp, 
          len = arr.length;
      for(var i = 0; i < len; i++){
        minIdx = i;
        for(var  j = i+1; j < len; j++){
           if(arr[j] < arr[minIdx]){
              minIdx = j;
           }
        }
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
      }
      return arr;
    }`,
  python:
  `def selection(A):
    for i in range(len(A)): 
      # Find the minimum element in remaining  
      # unsorted array 
      min_idx = i 
      for j in range(i+1, len(A)): 
          if A[min_idx] > A[j]: 
              min_idx = j 
                
      # Swap the found minimum element with  
      # the first element         
      A[i], A[min_idx] = A[min_idx], A[i] `,
  c:
    `void selectionSort(int arr[], int n) 
    { 
        int i, j, min_idx; 
      
        // One by one move boundary of unsorted subarray 
        for (i = 0; i < n-1; i++) 
        { 
            // Find the minimum element in unsorted array 
            min_idx = i; 
            for (j = i+1; j < n; j++) 
              if (arr[j] < arr[min_idx]) 
                min_idx = j; 
      
            // Swap the found minimum element with the first element 
            swap(&arr[min_idx], &arr[i]); 
        } 
    } `,
}

export const insertioncodes = {
  js:
    `function insertionSort(arr){
      var i, len = arr.length, el, j;
    
      for(i = 1; i<len; i++){
        el = arr[i];
        j = i;
    
        while(j>0 && arr[j-1]>toInsert){
          arr[j] = arr[j-1];
          j--;
       }
    
       arr[j] = el;
      }
    
      return arr;
    }`,
  python:
  `def insertion_sort(InputList):
      for i in range(1, len(InputList)):
          j = i-1
          nxt_element = InputList[i]
    # Compare the current element with next one
      
          while (InputList[j] > nxt_element) and (j >= 0):
              InputList[j+1] = InputList[j]
              j=j-1
          InputList[j+1] = nxt_element`,
  c:
    `void insertionSort(int arr[], int n) 
    { 
        int i, key, j; 
        for (i = 1; i < n; i++) { 
            key = arr[i]; 
            j = i - 1; 
      
            /* Move elements of arr[0..i-1], that are 
              greater than key, to one position ahead 
              of their current position */
            while (j >= 0 && arr[j] > key) { 
                arr[j + 1] = arr[j]; 
                j = j - 1; 
            } 
            arr[j + 1] = key; 
        } 
    } `,
}

export const mergecodes = {
  js:
    `function mergeSort(arr){
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
   
   function merge(left, right){
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
    //remaining part needs to be addred to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
  }
   
   `,
  python:
  `def mergeSort(a): 
    if len(a) > 1: 
        mid = len(a) // 2
        L = a[:mid] 
        R = a[mid:] 
        mergeSort(L) 
        mergeSort(R) 
          
        a.clear() 
        while len(L) > 0 and len(R) < 0: 
            if L[0] <= R[0]: 
                a.append(L[0]) 
                L.pop(0) 
            else: 
                a.append(R[0]) 
                R.pop(0) 

        for i in L: 
            a.append(i) 
        for i in R: 
            a.append(i) `,
  c:
    `// Merges two subarrays of arr[]. 
    // First subarray is arr[l..m] 
    // Second subarray is arr[m+1..r] 
    void merge(int arr[], int l, int m, int r) 
    { 
        int i, j, k; 
        int n1 = m - l + 1; 
        int n2 =  r - m; 
      
        /* create temp arrays */
        int L[n1], R[n2]; 
      
        /* Copy data to temp arrays L[] and R[] */
        for (i = 0; i < n1; i++) 
            L[i] = arr[l + i]; 
        for (j = 0; j < n2; j++) 
            R[j] = arr[m + 1+ j]; 
      
        /* Merge the temp arrays back into arr[l..r]*/
        i = 0; // Initial index of first subarray 
        j = 0; // Initial index of second subarray 
        k = l; // Initial index of merged subarray 
        while (i < n1 && j < n2) 
        { 
            if (L[i] <= R[j]) 
            { 
                arr[k] = L[i]; 
                i++; 
            } 
            else
            { 
                arr[k] = R[j]; 
                j++; 
            } 
            k++; 
        } 
      
        /* Copy the remaining elements of L[], if there 
           are any */
        while (i < n1) 
        { 
            arr[k] = L[i]; 
            i++; 
            k++; 
        } 
      
        /* Copy the remaining elements of R[], if there 
           are any */
        while (j < n2) 
        { 
            arr[k] = R[j]; 
            j++; 
            k++; 
        } 
    } 
      
    /* l is for left index and r is right index of the 
       sub-array of arr to be sorted */
    void mergeSort(int arr[], int l, int r) 
    { 
        if (l < r) 
        { 
            // Same as (l+r)/2, but avoids overflow for 
            // large l and h 
            int m = l+(r-l)/2; 
      
            // Sort first and second halves 
            mergeSort(arr, l, m); 
            mergeSort(arr, m+1, r); 
      
            merge(arr, l, m, r); 
        } 
    } `,
}

export const quickcodes = {
  js:
    `
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
      return arr;
    }
        
    function partition(arr, pivot, left, right){
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
    function swap(arr, i, j){
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      }
    
   `,
 
}
export const heapcodes = {
  js:
    `
    function swap(a, i, j) {
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }
  
  function max_heapify(a, i, length) {
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
  
  function heapify(a, length) {
      for (var i = Math.floor(length/2); i >= 0; i--) {
          max_heapify(a, i, length);
      }
  }
  
  function heapsort(a) {
      heapify(a, a.length);
  
      for (var i = a.length - 1; i > 0; i--) {
          swap(a, i, 0);
  
          max_heapify(a, 0, i-1);
      }
  }
   `,
 
}