


// dom : document object model 
// with the help of dom java script can access change and style all the element of an html document . 


// access the element : to access the element by using the dom . 
    // there are three way to access the element . 
        // 1. By Id : to access the element by using the Id of an element . 
            // syntex : 
                // document.getElementById(idvalue)

            // let a=document.getElementById("groot3")
            // console.log(a)


        // 2. By Classname : to access the element by using the classname of an element .
            // syntex : 
                // document.getElementsByClassName(class value)

            //   let b=document.getElementsByClassName("groot1")
            //   console.log(b[2])
        
        

        // 3. By Tagname  : to access the element by using the tagname of an element .
            // syntex: 
                // document.getElementsByTagName(tag value)

            // let c=document.getElementsByTagName("p")
            // console.log(c[2])


 
            
// change the elemant : 
        // 1. by id : 
            // document.getElementById("groot2").innerHTML="hello Java Script" ; 
            // document.getElementById("groot1").innerHTML="hello Java" ; 


        // 2. by classname : 
        //    let a= document.getElementsByClassName("groot1")
        //    a[2].innerHTML="hello jatin"
        //    a[0].innerHTML="hello groot"


        
        // 3. by tagname :
        //    let b= document.getElementsByTagName("p") 
        //    b[2].innerHTML="this is my another paragraph"
        //    b[0].innerHTML="this is my another paragraph"



// style the elemant : 
        // 1. by id : 
            document.getElementById("groot2").style.color="blue"
            document.getElementById("groot2").style.backgroundColor="red"
            document.getElementById("groot2").style.fontSize="60px"
            document.getElementById("groot2").style.marginTop="60px"
            document.getElementById("groot2").style.paddingBottom="60px"



        // 2. by classname :
             let a= document.getElementsByClassName("groot1")
             a[0].style.color="green"
             a[0].style.backgroundColor="black"
             a[1].style.backgroundColor="green"


        // 3. by tagname: 
            let b= document.getElementsByTagName("p")
            b[0].style.fontSize="30px"
            b[1].style.paddingLeft="30px"

