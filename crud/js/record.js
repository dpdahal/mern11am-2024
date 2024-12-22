
let students=[
    {id:1,name:'ram',address:'ktm'},
    {id:2,name:'shyam',address:'bkt'},
    {id:3,name:'hari',address:'lalitpur'},
    {id:4,name:'gopal',address:'lalitpur'},
]


function display(){
    let outPut="";
    students.map((student,index)=>{
    outPut+=`<tr>
                <td>${index+1}</td>
                <td>${student.name}</td>
                <td>${student.address}</td>
                <td>
                <button>Edit</button>
                  <button onclick="deleteData(${student.id})">Delete</button>
                </td>
            </tr>`
    })

    document.getElementById("result").innerHTML=outPut;
}

display();

function deleteData(id){
    console.log(id);
}


let sId=5;
function addRecord(){
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let storeData={
        id:sId,
        name:name,
        address:address
    }

    students.push(storeData);

    display();

    document.getElementById("name").value="";
    document.getElementById("address").value="";

    sId++;
   
}