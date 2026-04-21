

// events : events are the actions that excute the java script code when the users can happen something in browser . 

// there are two types of events : 
// 1. HTML events : the html events is used as a attributes . 
// some examples of html events is : 
//         1. when an users clicks the mouse . 
//         2. when an input is changed . 
//         3. when a user move the mouse over of an element . 
//         4. when a user move the mouse out of an element .


// 1. onclick events :the onclick event when an users clicks the mouse of an element . 

// function groot1() {
//     document.getElementById("tech").innerHTML = "Hello Js"
//     document.getElementById("tech").style.color = "red"
// }

// function groot2() {
//     document.getElementById("tech").innerHTML = "Hello Html"
//     document.getElementById("tech").style.color = "black"
// }


// 2. onchange event : 



// function groot3(){
// let inputvalue = document.getElementById("input").value
//     document.getElementById("displayname").innerHTML=inputvalue
// }



// 3. onmouseover event : the onmouseover event is used when a user move the mouse over of an element . 

    // function groot4(){
    //     document.getElementById("tech2").innerHTML="Hello Js"
    //     document.getElementById("tech2").style.backgroundColor="blue"
    // }



    // 4. onmouseout : the onmouseout event is used when a user move the mouse out of an element . 

    // function groot5(){
    //     document.getElementById("tech2").innerHTML="hello CSS"
    //     document.getElementById("tech2").style.backgroundColor="white"
    // }




// 2. Timing events : java script can excute in time intervals . it is called the timing evenets . 
    // the window object excute te code at specified time intervals . 
    // these time intervals are called timing events .

    // there are two types of timing evenets :=> 

        // 1. settimeout : the settimeout excute a function , after waiting a specify numbers of millisecond .

            // syntex :
                // setTimeout(function,millisecond)

                // function groot(){
                //     alert("Welcome")
                // }
                
                // let a=setTimeout(()=>{
                //     groot()
                // },5000)


                // a. cleartimeout : the cleartimeout is used to stop the settimeout excutation . 

                    // syntex : 
                        // clearTimeout(settimeout variable)

                    // function tech(){
                    //     clearTimeout(a)
                    // }

               
                

        // 2. setinterval : the setinterval excute a function after waiting a specify numbers of millisecond .but it repeat specify numbers of millisecond  . 

                // syntex : 
                // setInterval(function,millisecond)


                function groot(){
                    alert("Welcome")
                }

                let b=setInterval(()=>{
                    groot()
                },5000)


                // a. clearinterval : the clearInterval is used to stop the setinterval excutation . 

                    // syntex :
                        // clearInterval(setInterval variable)

                        function tech1(){
                            clearInterval(b)
                        }
