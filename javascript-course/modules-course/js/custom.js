// import add from './calculator.js'

// console.log(add(5,7))


function getData(){
    let http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
            let data = JSON.parse(http.responseText);
            console.log(data);
        }else{
            console.log('Error');
        }
    }

    http.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    http.send();
}

getData();