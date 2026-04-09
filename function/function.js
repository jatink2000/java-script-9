


// functions : functions is a block of code it works when it is called . 

    // create a function : to create a function , declare the function keyword and then define the function name followed by the () . and start the function body using the {} . 

    // syntex : 
        // function functionname(){
        //     code to be excute . 
        // }


        // function groot(){
        //     document.write("my name is groot","<br/>")
        // }

    // call a function : to call the function write the function name using the () in your program file ; 

        // groot() // call 
        // groot() // call 
        // groot() // call 
        // groot() // call 
        // groot() // call 



        // note : you can call the funtion multiple time . 


    
    // function argument & parameter : you can pass the data or information inside the function using the argument & parameter . 

        // syntex : 
            // function functionname(name/variable){ // parameter
            //     code to be excute . 
            // }

            //functionname(value/data) // argument 


            // parameter : parameter is a name or variable it is used where we declare the function 

            // argument : argument is data or value . it  is used where we call the function .  


    // single parameter : 

        // function groot(myname){
        //     document.write(myname) // groot 
        // }

        // groot("groot")


    // multiple parameter : if you can pass the multiple values inside the function you can use the multiple parameter . 


        // function groot(myname,mycity,year){
        //     document.write(myname,"<br/>",mycity,"<br/>",year) // groot 
        // }

        // groot("groot","jaipur",2026)



    // default parameter value : if you cannot pass the argument you can use the default parameter value . 

        // function groot(myname,mycity="jaipur"){
        //     document.write(myname,"<br/>",mycity,"<br/>") 
        // }

        // groot("groot academy"); // groot academy , jaipur
        // groot("groot software","alwar");  // groot software, alwar



    
        
    // function local scope / global scope : 

    //  local scope : if you can create the variable inside the function this is known as local scope . and they access inside that function only . 


        // function groot(){
        //     let a=40; // local scope
        //     document.write(a) // 40 
        // }
        // groot()


    // global scope : if you can create the variable ouside the function this is known as global scope . and they access inside and outside that function .

        // let a=40; // global scope
        // function groot(){
        //     document.write(a , "<br/>") // 40 
        // }
        // groot()

        // document.write(a) // 40 



    // both :

        //  let a=40; // global scope
        // function groot(){
        //     let a=20; // local scope
        //     document.write(a , "<br/>") // 20 
        // }
        // groot()

        // document.write(a) // 40 



    // function return : the function return is used to pass the data and information outside the function . 

        // function groot(){
        //     let a=40; // local scope
        //     return a; 
        // }
        // let x=groot() // 40 
        // document.write(x)




    // types of function structure : there are four types of function structure. 
    
    // 1. no return no argument  : 

        // function groot(){
        //     document.write("groot")
        // }
        // // call 
        // groot() ; 



    // 2. no return with argument  : 
        
        // function groot(myname,year){
        //     document.writeln("my name is ",myname)
        //     document.writeln("& year is ",year)
        // }
        // groot("groot", 2026) ; 


    // 3. with return no argument  : 
        // function groot(){
        //     let myname="groot"
        //     return myname ; 
        // }
        // let x=groot()
        // document.write("my name is ",x) ; 


    // 4. with return with argument  :
    
        // function groot(myname){
        //     return myname ; 
        // }
        // let x=groot("groot academy")
        // document.write("my name is ",x) ; 




    // types of functions : 
    // 1. simple function : to create a simple function , declare the function keyword and then define the function name followed by the () . and start the function body using the {} . 
        // syntex : 

        // function functionname(){
        //     code to be excute . 
        // }
        // functionname() ; 

        // function groot(){
        //     document.write("hello")
        // }
        // groot(); 



    // 2. anonymous functions :  an anonymous functions is that function that have no function name . unliked unnamed function . to craete that function , define the function keyword . with () . then start the function body {} . 

        // syntex : 
        // function (){
        //     code to be excute . 
        // }


        // let x=function (){
        //     document.write("hello groot")
        // }

        // x() ; 


    // 3. arrow function:   in an arrow function there is no function keyword , to create that function function name using the single =. followed by the () the declare the => and start the function body using the {} . 

        // syntex : 
        // functionname=()=>{
        //     code to be excute 
        // }
        // functionname() 


        // let groot=()=>{
        //     document.write("hello java script")
        // }

        // groot(); 



    // 4. self invoked function : the self invoked function are javascipt function that excute immediately . to  define the function yo can enclose the anonymous function in (). to call the function use the (). 
        
        // (function (){
        //     code to be excute 
        // })() 



        // (function (){
        //     document.write("hello java")
        // })() 

