var id;
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
function save() {


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

    window.location = "CrudOperation.html";

    return false;
}