function getData() {
    fetch("http://localhost:3000/students").then((res) => {
        return res.json();
    }).then((students) => {
        let outPut = "";
        students.map((student, index) => {
            outPut += `
            <tr>
                <td>${++index}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.address}</td>
                <td>
                    <button onclick="updateStudent(${student.id})">Edit</button>
                    <button onclick="deleteStudent(${student.id})">Delete</button>
                </td>
            </tr>
            `;
        })
        document.getElementById("results").innerHTML = outPut;
    }).catch((e) => {
        console.log(e);
    })

}

getData();



async function addStudent(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let findData = await fetch("http://localhost:3000/students");
    let data = await findData.json();
    let lastInsertId = 0;
    if (data.length == 0) {
        lastInsertId = 1;
        let sendData = { id: lastInsertId++, name, email, address };
        fetch("http://localhost:3000/students", {
            method: "POST",
            body: JSON.stringify(sendData)
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            getData();
        }).catch((e) => {
            console.log(e);
        })
    } else {
        lastInsertId = data[data.length - 1].id;
        lastInsertId++;
        let sendData = { id: lastInsertId++, name, email, address };
        fetch("http://localhost:3000/students", {
            method: "POST",
            body: JSON.stringify(sendData)
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            getData();
        }).catch((e) => {
            console.log(e);
        })
    }


}


function deleteStudent(id) {
    let url = `http://localhost:3000/students/${id}`;

    fetch(url, { method: "DELETE" }).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        getData();
    }).catch((e) => {
        console.log(e);
    })
}


async function updateStudent(id) {
    let url = `http://localhost:3000/students/${id}`;
    let findData = await fetch(url);
    let data = await findData.json();
    localStorage.setItem("student", JSON.stringify(data));
    window.location.href = "update.html";
}