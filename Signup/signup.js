


function Signup() {

    let firstnamevalue = document.getElementById("firstname").value
    let lastnamevalue = document.getElementById("lastname").value
    let addressvalue = document.getElementById("address").value
    let cityvalue = document.getElementById("city").value
    let pincodevalue = document.getElementById("pincode").value
    let emailvalue = document.getElementById("email").value
    let passwordvalue = document.getElementById("password").value

    let userdata = {
        "firstname": firstnamevalue,
        "lastname": lastnamevalue,
        "address": addressvalue,
        "city": cityvalue,
        "pincode": pincodevalue,
        "email": emailvalue,
        "password": passwordvalue
    }

    let alreadyusers = JSON.parse(localStorage.getItem("myusers")) || []

    // email alreday : 
    let emailalreday = alreadyusers.filter(data => data.email == emailvalue)



    if (!firstnamevalue || !lastnamevalue || !addressvalue || !cityvalue || !pincodevalue || !emailvalue || !passwordvalue) {
        Swal.fire({
            icon: "error",
            title: "Fill The Form!",
        });
    }
    else if (emailalreday.length > 0) {
        Swal.fire({
            icon: "error",
            title: "already user..",
        });
    }
    else {
        alreadyusers.push(userdata)
        localStorage.setItem("myusers", JSON.stringify(alreadyusers))

        Swal.fire({
            title: "Signup Success..",
            icon: "success"
        });
    }


}