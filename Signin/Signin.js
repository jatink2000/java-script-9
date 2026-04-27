


function Login(){
    let emailvalue=document.getElementById("email").value
    let passwordvalue=document.getElementById("password").value
    

    // get the all data from localstorage: 
    let allusers=JSON.parse(localStorage.getItem("myusers"))||[]

    // filter only one user by email : 
    let oneuserfind=allusers.filter(data=> data.email==emailvalue)
    let oneuserobj=oneuserfind[0]

    if(oneuserfind.length==0){
         Swal.fire({
            icon: "error",
            title: "User Not Found",
        });
    }
    else if(oneuserobj.email==emailvalue && oneuserobj.password==passwordvalue){
        Swal.fire({
            title: "Login Success..",
            icon: "success"
        });
    }
    else{
        Swal.fire({
            icon: "error",
            title: "invalid password..",
        });
    }

}