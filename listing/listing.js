


    let allusers=JSON.parse(localStorage.getItem("myusers"))||[]

    let userstable=document.getElementById("userstable")

    allusers.map((data)=>{
       let tablerow = document.createElement("tr")

       let firstnamevalue = document.createElement("td")
        firstnamevalue.innerHTML=data.firstname

        let lastnamevalue = document.createElement("td")
        lastnamevalue.innerHTML=data.lastname

        let emailvalue = document.createElement("td")
        emailvalue.innerHTML=data.email


        let addressvalue = document.createElement("td")
        addressvalue.innerHTML=data.address

        let cityvalue = document.createElement("td")
        cityvalue.innerHTML=data.city

        let pinvalue = document.createElement("td")
        pinvalue.innerHTML=data.pincode


       userstable.appendChild(tablerow)
       tablerow.appendChild(firstnamevalue)
       tablerow.appendChild(lastnamevalue)
       tablerow.appendChild(emailvalue)
       tablerow.appendChild(addressvalue)
       tablerow.appendChild(cityvalue)
       tablerow.appendChild(pinvalue)
       
    })