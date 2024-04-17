function mincost(arr)
{ 
//write your code here
// return the min cost
    function heapify(arr) {
        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            heapifyDown(arr, i);
        }
    }
    
    function heapifyDown(arr, i) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let smallest = i;
        
        if (left < arr.length && arr[left] < arr[smallest]) {
            smallest = left;
        }
        
        if (right < arr.length && arr[right] < arr[smallest]) {
            smallest = right;
        }
        
        if (smallest !== i) {
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
            heapifyDown(arr, smallest);
        }
    }
    heapify(arr);
    
    let totalCost = 0;
    while (arr.length > 1) {
        const min1 = arr.shift();
        const min2 = arr.shift();
        
        const cost = min1 + min2;
        totalCost += cost;
        arr.push(cost);
        
        heapifyDown(arr, 0);
    }
    
    return totalCost;
}


module.exports=mincost;
