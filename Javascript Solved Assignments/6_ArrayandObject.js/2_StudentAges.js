const ages=[19,22,19,24,20,25,26,24,25,24];

// 1 (Sort the array and find the min and max age.)
ages.sort((a,b)=>a-b);
const min = ages[0];
const max = ages[ages.length-1];
console.log(ages);
console.log("Min =",min,"Max =",max);

// 2 (Find the median age)
const ages1=[19,22,19,24,20,25,26,24,25,24];

if(ages1.length%2==0){
let index1=ages1.length/2;
let index2=(ages1.length/2)-1;
console.log(index1,index2);
console.log(ages1[index1],ages1[index2]);
const median=(ages1[index1]+ages1[index2])/2
console.log("Median =",median);
}
else{
    const index = Math.floor(ages1.length/2);
    const median = ages1[index];
    console.log("Median =",median);

}

// 3 (Find the average age)
const ages3=[19,22,19,24,20,25,26,24,25,24];

let total=0;
ages3.forEach(element => {
    total+=element;
});
const average=total/ages.length
console.log("Average =",average);


// 4 (Find the range of the ages)
console.log("Range of ages =",max-min);


// 5 (Compare the value of (min - average) and (max - average), use abs() method)
const minavg = Math.abs(min-average);
const maxavg = Math.abs(max-average);
const compare = Math.abs(minavg-maxavg);
