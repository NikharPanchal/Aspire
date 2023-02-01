const janas = {
    fname: "Nikhar",
    lname: "Panchal",
    fullname: function () {
        console.log("In jonas object");
        console.log(this.fname + this.lname);
    }
};

const show_data = () => {
    console.log("in show data function");
    janas.fullname();
}

show_data();