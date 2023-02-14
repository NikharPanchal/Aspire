function save() {
    const studetData = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        address: document.getElementById('address').value,
        date: document.getElementById('date').value,
        contact: document.getElementById('contact').value,
        email: document.getElementById('email').value

    }
    console.log(studetData);
    window.localStorage.setItem("studObject", JSON.stringify(studetData));
}