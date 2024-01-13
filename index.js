// sessionStorage.setItem('name','lihan');
// sessionStorage.setItem('year','2005');

// const n1 = sessionStorage.getItem("name")
// console.log(n1);

// const n2 = sessionStorage.getItem("year")
// console.log(n2);

// console.log(sessionStorage.removeItem("name"));


const data=['Bangladesh','Saturia','Manikgonj','Dhaka'];
sessionStorage.setItem("alldata",JSON.stringify(data));

console.log(JSON.parse(sessionStorage.getItem("alldata")));