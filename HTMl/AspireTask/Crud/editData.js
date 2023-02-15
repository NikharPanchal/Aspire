function updateData(rollno) {
    studArr = JSON.parse(localStorage.getItem('studObject'));

    console.log(studArr);

    stud1 = studArr.filter(data => {


        return data.rollno == rollno;
        // if (data.rollno == rollno) {
        //     document.getElementById('rollno').value = data.rollno
        //     document.getElementById('fname').value = data.fname
        //     document.getElementById('lname').value = data.lname
        //     document.getElementById('address').value = data.address
        //     document.getElementById('date').value = data.date
        //     document.getElementById('contact').value = data.contact
        //     document.getElementById('email').value = data.email
        // }

    })
    console.log(stud1);
    document.getElementById('rollno').value = stud1[0].rollno
    document.getElementById('fname').value = stud1[0].fname
    document.getElementById('lname').value = stud1[0].lname
    document.getElementById('address').value = stud1[0].address
    document.getElementById('date').value = stud1[0].date
    document.getElementById('contact').value = stud1[0].contact
    document.getElementById('email').value = stud1[0].email

    window.location.href = "updateData.html";
}