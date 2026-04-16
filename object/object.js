

// object : a object is a container which is used to store the collection of key and value pair data .  

    // to creact an object : to create an object , define the object name and then store the key and value data inside the {}. and each key and value sepreate by the : . 
        
    // syntex : 
        // objectname={
        //     key:value, 
        //     key:value, 
        //     key:value, 
        //     key:value
        // }


        // let student={
        //     name : "ravi kumar",
        //     city: "jaipur",
        //     age:27,
        //     email: "ravi@gmail.com"
        // }


    
        // 2. using new object() : 
        // let student=new Object(); 
        // student.name="rahul"
        // student.age=25
        // student.city="alwar"


    // accessing the object properties : 
        // let student={
        //     name : "ravi kumar",
        //     city: "jaipur",
        //     age:27,
        //     email: "ravi@gmail.com"
        // }

        // console.log(student.city) // jaipur
        // console.log(student["age"]) // 27


    // add : 
        // let student={
        //     name : "ravi kumar",
        //     city: "jaipur",
        //     age:27
        // }
        // student.email="ravi@gmail.com" // add 
        // console.log(student)

    
    // update : 
        // let student={
        //     name : "ravi kumar",
        //     city: "jaipur",
        //     age:27
        // }
        // student.name="rahul" // update 
        // student.city="alwar" // update 
        // console.log(student)


    // delete the key : 
        // let student={
        //     name : "ravi kumar",
        //     city: "jaipur",
        //     age:27
        // }
        // delete student.age  // delete 
        // console.log(student)



    // function inside the object : 
        // let student={
        //     name : "ravi kumar",
        //     city: "jaipur",
        //     age:function (){
        //         console.log("27")
        //     }
        // }
        // console.log(student.name)
        // student.age()
    

    // keys : 
    // let obj={
    //     a:1, 
    //     b:2,
    //     name : "ravi kumar",
    //     city: "jaipur"
    // } 
    // console.log(Object.keys(obj)) // a,b 


    // value :
    // let obj={
    //     a:1, 
    //     b:2,
    //     name : "ravi kumar",
    //     city: "jaipur"
    // } 
    // console.log(Object.values(obj)) // 1,2,"ravi", jaipur 


    // nested object : 
    // let obj={
    //     a:1,
    //     b:{
    //         name:"ravi",
    //         city: "jaipur"
    //     }
    // }
    // console.log(obj.a)
    // console.log(obj.b.name)


    // arrays of object : 

    // let student1={
    //         name : "ravi kumar",
    //         city: "jaipur",
    //         age:27
    // }

    //  let student2={
    //         name : "rahul",
    //         city: "alwar",
    //         age:22
    // }

    // let students=[
    //     {
    //         name : "ravi kumar",
    //         city: "jaipur",
    //         age:27
    //     },
    //     {
    //         name : "rahul",
    //         city: "alwar",
    //         age:22
    //     }
    // ]
    // console.log(students[1].city)



    // spread operators (...) : 
    // let obj1={a:1,b:2}
    // let obj2={...obj1,c:3}
    // console.log(obj2)


    // let obj1={a:1}
    // let obj2={b:2}
    // let obj3={...obj1,...obj2}
    // console.log(obj3)



    // freeze :  no change allowed 
    // let obj1={a:1,b:2}
    // Object.freeze(obj1) // no change allowed 
    // obj1.a=30
    // console.log(obj1)



    // check : 
    // let obj1={a:1,b:2}
    // console.log("a" in obj1) // true 
    // console.log("i" in obj1) // false 
