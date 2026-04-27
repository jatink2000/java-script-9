

function DeleteAccount() {
    let emailvalue = document.getElementById("email").value


    let allusers=JSON.parse(localStorage.getItem("myusers"))||[]

    let onlyoneuser=allusers.filter(data=> data.email!=emailvalue) 
    
    localStorage.setItem("myusers",JSON.stringify(onlyoneuser))
    
     Swal.fire({
            title: "Account Deleted",
            icon: "success"
        });

}