



function resetpassword(){
    let emailvalue=document.getElementById("email").value
    let passwordvalue=document.getElementById("password").value


    // all users data : 
    let allusers=JSON.parse(localStorage.getItem("myusers"))||[]


    let updatedata=allusers.map((item)=>{
            if(item.email==emailvalue){
                item.password=passwordvalue
            }
            return item ; 
    })
    localStorage.setItem("myusers",JSON.stringify(updatedata))

}