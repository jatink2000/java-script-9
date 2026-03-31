


// loops  :

// types of loops : there are three types of loops : 

    // start , condition , step  


    // 1. for loop : 

    // for(start;condition;step){
    //     code to be excute . 
    // }
    
    
    // for(i=10;i<=110;i++){
    //     document.writeln(i)
    // }



    // 2. while loop : 

    // start 
    // while(condition){
    //     code to be excute 
    //     step 
    // }


    // i=1 
    // while(i<=100){
    //     document.writeln(i )
    //     i++
    // }



    // 3. do while loop : 

    // start 
    // do{
    //     code to be excute 
    //     step 
    // }while(condition) 


    // i=100
    // do{
    //     document.writeln("groot ")
    //     i--
    // }while(i>=1)



    // Q 1 : 
    // **************

    // for : 10 times 
    // for(i=1;i<=10;i++){
    //     document.writeln("*")  // * * * * * * * * * *
    // }



    // i=10
    // while(i>=1){
    //     document.writeln("*")
    //     i--
    // }



    // i=10
    // do{
    //     document.writeln("*")
    //     i++
    // }while(i<=20)




    // Q 2: 
    /*
    *
    *
    * 
    * 
    * 
    *      */



    //  for(i=1;i<=10;i++){
    //     document.writeln("*","<br/>")  // * * * * * * * * * *
    // }



    // i=10
    // while(i>=1){
    //     document.writeln("*","<br/>")
    //     i--
    // }



    // i=11
    // do{
    //     document.writeln("*","<br/>")
    //     i++
    // }while(i<=20)





    // Q 3: 
    // *****        outer loop : row 
    // *****        inner loop : star
    // *****
    // *****
    // *****
   

    // for(j=1;j<=5;j++){                  // * * * * *
    //     for(i=1;i<=5;i++){              // * * * * *
    //         document.writeln("*")       // * * * * * 
    //     }                               // * * * * * 
    //     document.writeln("<br/>")       // * * * * *
    // }




    // j=1
    // while(j<=5){
    //     // inner loop : 
    //         i=1
    //         while(i<=5){
    //             document.writeln("*")
    //             i++
    //         }
    //     document.writeln("<br/>")
    //     j++ 
    // }


    // j=1
    // do{
    //     //inner loop : 
    //     i=1
    //     do{
    //         document.writeln("*")
    //         i++
    //     }while(i<=5)
    //     document.writeln("<br/>")
    //     j++
    // }while(j<=5)


    


    // Q 4: 
    // *
    // **
    // ***
    // ****
    // *****

    // outer loop : 5 row 
    // inner loop : 1, 2, 3, 4, 5


    // for(i=1;i<=5;i++){
    //     // inner loop : 
    //     for(j=1;j<=i;j++){
    //         document.writeln("*")
    //     }        
    //     document.writeln("<br/>")
    // }




    //   j=1
    // while(j<=5){
    //     // inner loop : 
    //         i=1
    //         while(i<=j){
    //             document.writeln("*")
    //             i++
    //         }
    //     document.writeln("<br/>")
    //     j++ 
    // }


    // j=1
    // do{
    //     //inner loop : 
    //     i=1
    //     do{
    //         document.writeln("*")
    //         i++
    //     }while(i<=j)
    //     document.writeln("<br/>")
    //     j++
    // }while(j<=5)





    // Q 5: 
    // *****
    // ****
    // ***
    // **
    // *


    // i=5
    // while(i>=1){
    //     //inner loop : 
    //     j=1
    //     while(j<=i){
    //         document.writeln("*")
    //         j++
    //     }
    //     document.writeln("<br/>")
    //     i--
    // }



    // for(i=5;i>=1;i--){
    //     for(j=1;j<=i;j++){
    //         document.writeln("*")
    //     }
    //     document.writeln("<br/>")
    // }




    // i=1
    // do{
    //     //inner : 
    //     j=5
    //     do{
    //         document.writeln("*")
    //         j--
    //     }while(j>=i)

    //     document.writeln("<br/>")
    //     i++
    // }while(i<=5)




    // Q 6: 
    //     *     outer : row 
    //    **     inner loop : space , star 
    //   ***
    //  ****
    // *****



    // Q 7: 

    // *****
    //  ****
    //   ***
    //    **
    //     *


    // Q 8: 

    // *****
    //  *****
    //   *****
    //    *****
    //     ******