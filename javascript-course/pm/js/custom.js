// function introduction(){
//    setTimeout(function(){
//     console.log("Hello, Introduction");
//    }, 3000);
// }


// function demo(){
//     console.log("Hello, Demo");
// }

// introduction();
// demo();

// let pm  = new Promise((resolve, reject) => {
//     setTimeout(function(){
//            resolve("Hello, Introduction");
//            }, 3000);

// });

// pm.then((res)=>{
//     console.log(res);
// })


// function introduction(){
//   return new Promise((resolve, reject) => {
//     let taks = false;
//     if(taks){
//     resolve("Task Completed");
//     }else{
//      reject("Task Failed");
//     }
 
//   });
// }


// introduction().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// function getData(){
//     fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
//         return res.json();
//     }).then((user)=>{
//         console.log(user);
//     }).catch((err)=>{
//         console.log(err);
//     });
// }

// getData();


function getNews(){
    let url ="https://newsapi.org/v2/everything?q=tesla&from=2024-11-30&sortBy=publishedAt&apiKey=ca3206dc1298409fb3560250bcce05d1";
    fetch(url).then((res)=>{
        return res.json();
    }).then((news)=>{
        console.log(news);
    }).catch((err)=>{
        console.log(err);
    });
}

getNews();