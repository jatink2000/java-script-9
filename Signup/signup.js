


function Signup(){

    let firstnamevalue=document.getElementById("firstname").value
    let lastnamevalue=document.getElementById("lastname").value
    let addressvalue=document.getElementById("address").value
    let cityvalue=document.getElementById("city").value
    let pincodevalue=document.getElementById("pincode").value
    let emailvalue=document.getElementById("email").value
    let passwordvalue=document.getElementById("password").value

    let userdata={
        "firstname":firstnamevalue,
        "lastname":lastnamevalue, 
        "address":addressvalue, 
        "city":cityvalue,
        "pincode":pincodevalue,
        "email":emailvalue,
        "password":passwordvalue
    }

    // get the localstorage users : 
    let alreadyusers=JSON.parse(localStorage.getItem("myusers"))||[]
    alreadyusers.push(userdata)


    // save the data in localStorage :
        localStorage.setItem("myusers",JSON.stringify(alreadyusers))

}