function deleteData(rollno) {
    studArr = JSON.parse(localStorage.getItem('studObject'));

    // studList = studArr.forEach(function (cur, i) {
    //     if (cur.rollno == rollno) {
    //         alert(cur.fname);
    //         alert(i);
    //         if (i >= -1) {
    //             studArr.splice(i, 1);
    //         }
    //     }
    //     return studArr;
    // });

    const index = studArr.findIndex(i => i.rollno == rollno);

    if (index > -1) {
        studArr.splice(index, 1);
    }
    console.log(studArr);

    localStorage.setItem('studObject', JSON.stringify(studArr));

    window.location.href = "CrudOperation.html"

}