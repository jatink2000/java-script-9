


// localStorage : the localStorage is used to store the key and value pair in browser . these data is not deleted when we close the browser . 

    // there are four methods : 
        // 1. setitem: the setitem method is used to store the data in localStorage . 
            // syntex : 
                // localStorage.setItem(key,value) 

            
                function tech1(){
                    localStorage.setItem("myname","groot academy")
                    localStorage.setItem("city","alwar")
                    localStorage.setItem("email","groot@gmail.com")
                }


        // 2. getitem : the getitem method is used to access/get the data from localstorage . 
                // syntex : 
                    // localStorage.getItem(key) 


                function tech2(){
                   let a= localStorage.getItem("myname")
                    console.log("myname is",a);
                    let b= localStorage.getItem("city")
                    console.log("my city is",b);
                    let c= localStorage.getItem("email")
                    console.log("my email is",c);
                }


        // 3. removeitem : the removeitem is used to delete/remove the data from localstorage . 
                // syntex : 
                    // localStorage.removeItem(key)

                function tech3(){
                    localStorage.removeItem("email")
                    localStorage.removeItem("myname")
                    localStorage.removeItem("city")
                }


        // 4. clear() : the clear method is used to delete all data from localStorage .
                // syntex : 
                    // localStorage.clear() 

                function tech4(){
                    localStorage.clear()
                }