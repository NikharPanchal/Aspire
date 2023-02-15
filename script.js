var rollno="";
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

            <td><button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#exampleModalCenteredit" onclick="updateData(${val.rollno})">
            <i class="fa fa-edit">Edit</i></button></a></td>

            <td><button type='button' class="btn btn-sm btn-danger" onclick="deleteData(${val.rollno})">
            <i class="fa fa-trash">Delete</i></button></td>
            </tr>`
    });
}

function save() {

if (localStorage.getItem('studObject') == null) {
    var studArr = [];
    document.getElementById('rollno').setAttribute('value', 100);
}
else {
    studArr = JSON.parse(localStorage.getItem('studObject'));
    console.log(studArr[studArr.length - 1].rollno);
    let rollno = studArr[studArr.length - 1].rollno;
    document.getElementById('rollno').setAttribute('value', rollno);
}

    const studetData = {
        rollno: Number(document.getElementById('rollno').value) + 1,
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        address: document.getElementById('address').value,
        date: document.getElementById('date').value,
        contact: document.getElementById('contact').value,
        email: document.getElementById('email').value
    }

    studArr.push(studetData);
    localStorage.setItem("studObject", JSON.stringify(studArr));

    return false;
}

function deleteData(rollno) {
    studArr = JSON.parse(localStorage.getItem('studObject'));

    const index = studArr.findIndex(i => i.rollno == rollno);

    if (index > -1) {
        studArr.splice(index, 1);
    }
    console.log(studArr);

    localStorage.setItem('studObject', JSON.stringify(studArr));

    window.location.href = "CrudOperation.html"

}

function updateData(rollno) {

    studArr = JSON.parse(localStorage.getItem('studObject')) ?? [];

    console.log(studArr);

    studArr.forEach(function (val) {

        if(val.rollno == rollno){
            
            console.log(val.rollno);
            console.log(val.fname);

            document.getElementById('studrollno').value = val.rollno,
            document.getElementById('studfname').value = val.fname,
            document.getElementById('studlname').value = val.lname,
            document.getElementById('studaddress').value = val.address,
            document.getElementById('studdate').value = val.date,
            document.getElementById('studcontact').value = val.contact,
            document.getElementById('studemail').value = val.email
        }
    })

    // stud1 = studArr.filter(data => {

    //     return data.rollno == rollno;
 
    // })

    // console.log(stud1);
    // document.getElementById('rollno').value = stud1[0].rollno
    // document.getElementById('fname').value = stud1[0].fname
    // document.getElementById('lname').value = stud1[0].lname
    // document.getElementById('address').value = stud1[0].address
    // document.getElementById('date').value = stud1[0].date
    // document.getElementById('contact').value = stud1[0].contact
    // document.getElementById('email').value = stud1[0].email
}

function update(){

    studupdateArr = JSON.parse(localStorage.getItem('studObject')) ?? [];

    studupdateArr.forEach(index=>{
        if(document.getElementById('studrollno').value==index.rollno){
          index.fname=  document.getElementById('studfname').value ,
           index.lname= document.getElementById('studlname').value ,
            index.address=document.getElementById('studaddress').value ,
           index.date= document.getElementById('studdate').value ,
           index.contact= document.getElementById('studcontact').value,
           index.email= document.getElementById('studemail').value 
        }
    })

    localStorage.setItem("studObject", JSON.stringify(studupdateArr));
}