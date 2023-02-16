
function getAllData() {

    studentList = JSON.parse(localStorage.getItem('studObject')) ?? [];

    console.log(studentList);

    studentList.forEach(val => {

        var table = document.getElementById('tabledata');

        table.innerHTML += `
        <tr>
            <td>${val.rollno}</td>
            <td>${val.fname}</td>
            <td>${val.lname}</td>
            <td>${val.address}</td>
            <td>${val.date}</td>
            <td>${val.contact}</td>
            <td>${val.email}</td>
            <td><button data-toggle="modal" data-target="#exampleModal" type="button" class="btn btn-sm btn-primary" onclick="updateData(${val.rollno})">
            <i class="fa fa-edit"></i></button></td>

            <td><button type='button'  class="btn btn-sm btn-danger" onclick="deleteData(${val.rollno})">
            <i class="fa fa-trash"></i></button></td>
            </tr>
            
            `
    });
}