function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a, b) => a - b); 
    let totalCost = 0;

    while (arr.length > 1) {
        const combinedLength = arr[0] + arr[1];
        totalCost += combinedLength;
        arr.splice(0, 2, combinedLength);
        arr.sort((a, b) => a - b);
    }

    return totalCost;
  
}

module.exports=mincost;
