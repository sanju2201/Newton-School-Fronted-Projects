// calculate power(x,n)

// // normal function
// function pow (x, n){
// let result = 1;
// for(let i=0;i<n;i++){
//     result *= x;
// }
// return result;
// }
// console.log(pow(2,3));


// // Recursively
// function pow(x,n){
//     if(n ===1){
//         return x;
//     } else{
//         return x * pow(x, n-1);
//     }
// }

// 1-Linear function
// function pow(x,n){
//     return (n==1) ? x : (x * pow(x, n-1));
// }
// console.log(pow(2,6));

// // Object of Emplyoee

// let company = {
//     sales : [{name: 'john', salary: 1000},{name: 'Alice', salary: 1600}],
//     development: {
//         sites:[{name: 'Peter', salary: 2000},{name: 'Alex', salary: 1800}],
//         internals: [{name: 'Jack', salary: 1300}]
//     }
// }

// // Write a Recursive Function to add All the salary of Emploees
// function sumSalaries(department){
//     if(Array.isArray(department)){
//         return department.reduce((prev,current) => prev + current.salary, 0);
//     } else{
//         let sum =0;
//         for(let subDepartment of Object.values(department)){
//             sum += sumSalaries(subDepartment);
//         }
//         return sum;
//     }
// }

// let ans = sumSalaries(company);
// console.log(ans);

