/*
Example 1:

Input: nums = [2,2,1]
Output: 1

Example 2:

Input: nums = [4,1,2,1,2]
Output: 4

Example 3:

Input: nums = [1]
Output: 1
*/

var singleNumber = function (array) {
    array = array.sort();
    console.log("array",array);
    console.log("array.splice(i, 1)",array.splice(3, 1));
    let temp = [];
    for(let i=0;i<array.length;i++){
        let tempArray = array.splice(i, 1);
        let unique = true;
        if(tempArray.includes(array[i])){
            unique = false;
        };
        
        if(unique){
            temp.push(array[i])
        };
     }
     return temp;
  };

  let nums = [4,5,1,2,1,2]
  console.log(singleNumber(nums))