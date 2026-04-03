


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
//    **     inner loop : space 4,3,2,1,0:  star: 1,2,3,4,5 
//   ***
//  ****
// *****


// let i,j,k;
// row :  
// for(i=1;i<=5;i++){
//     // space : 
//     for(j=1;j<=5-i;j++){
//         document.writeln("&nbsp;&nbsp;")
//     }
//     // star : 
//     for(k=1;k<=i;k++){
//         document.writeln("*")
//     }
//     document.writeln("<br/>")
// }






// Q 7:    
// *****    0 , 5
//  ****    1 , 4
//   ***    2 , 3
//    **    3 , 2
//     *    4 , 1


// for(i=5;i>=1;i--){
//     // space : 
//     for(j=5;j>i;j--){
//         document.writeln("&nbsp;&nbsp;")
//     } 
//     // star : 
//     for(k=1;k<=i;k++){
//         document.writeln("*")
//     }
//     document.writeln("<br/>")
// }




// Q 8: 
// *****
//  *****
//   *****
//    *****
//     ******



// for(i=1;i<=5;i++){
//     // space : 
//     for(j=1;j<i;j++){
//         document.writeln("&nbsp;&nbsp;")
//     }
//     // star : 
//     for(k=1;k<=5;k++){
//         document.writeln("*")
//     }
//     document.writeln("<br/>")
// }




// Q 9: 
//     *****     
//    *****    
//   *****
//  *****
// *****

// for(i=1;i<=5;i++){
//     // space : 4,3,2,1,0
//     for(j=1;j<=5-i;j++){
//         document.writeln("&nbsp;&nbsp;")
//     }
//     // star : 5 
//     for(k=1;k<=5;k++){
//         document.writeln("*")
//     }
//     document.writeln("<br/>")
// }



// Q 10 : 

//     *       : 1   i=1 : 2*i-1  : 1
//    ***      : 3   i=2 : 2*2-1 : 3
//   *****      : 5  i=3 : 2*3-1 : 5 
//  *******         i=4 : 2*4-1 : 7 
// *********        i=5 : 2*5-1 : 9 


// for(i=1;i<=5;i++){
//     // space : 4,3,2,1,0 
//     for(j=1;j<=5-i;j++){
//         document.writeln("&nbsp;&nbsp;")
//     }
//     // star :
//     for(k=1;k<=2*i-1;k++){
//         document.writeln("*")
//     } 
//     document.writeln("<br/>")
// }




// Q 11 : 
// *********
//  *******
//   *****
//    ***
//     * 


// for(i=5;i>=1;i--){
//     // space : 0,1,2,3,4 
//     for(j=5;j>i;j--){
//         document.writeln("&nbsp;&nbsp;")
//     }
//     //star : 
//     for(k=1;k<=2*i-1;k++){
//         document.writeln("*")
//     }
//     document.writeln("<br/>")
// }




// Q 12 : 

// *        *      2*i-2  : 2*5-2 :  8
// **      ** 
// ***    ***
// ****  ****
// **********


// outer loop : row
// inner : star 1,2,3,4,5 , space : 8,6,4,2,0  , star 1,2,3,4,5


// for(i=5;i>=1;i--){
//     for(j=5;j>=i;j--){
//         document.writeln("*")
//     }
//     for(k=1;k<=2*i-2;k++){
//         document.writeln("&nbsp;&nbsp;")
//     }
//     for(j=5;j>=i;j--){
//         document.writeln("*")
//     }
//     document.writeln("<br/>")
// }




// Q 13 : 
// **********
// ****  ****
// ***    ***
// **      **
// *        * 



// Q 14: 

//         *    space : 8,6,4,2,0
//       **    star : 1,2,3,4,5
//     ***
//   ****
// *****


// for (i = 5; i >= 1; i--) {
//     for (k = 1; k <= 2 * i - 2; k++) {
//         document.writeln("&nbsp;&nbsp;")
//     }
//     for (k = 5; k >= i; k--) {
//         document.writeln("*")
//     }
//     document.writeln("<br/>")
// }



// Q : 15

    // 12345

    // for(i=1;i<=500;i++){
    //     document.writeln(i)
    // }


// Q 16: 

    // 1
    // 2
    // 3
    // 4
    // 5

    // for(i=1;i<=5;i++){
    //     document.writeln(i,"<br/>")
    // }

// Q 17: 
    // 12345
    // 12345
    // 12345
    // 12345
    // 12345

    // for(i=1;i<=5;i++){
    //     for(j=1;j<=5;j++){
    //         document.writeln(i)
    //     }
    //     document.writeln("<br/>")
    // }


    // Q 18: 
    // 1
    // 12
    // 123
    // 1234
    // 12345


    // Q 19: 
    // 5
    // 54
    // 543
    // 5432
    // 54321


    // Q 20: 
    // 12345
    //  1234 
    //   123
    //    12
    //     1



    // Q 21: 
    //  54321
    //   5432
    //    543
    //     54
    //      5
   



    // Q 22: 
    // *****        
    // *   *        
    // *   *
    // *   *
    // *****


    // for(i=1;i<=5;i++){
    //     // star : 
    //     for(j=1;j<=5;j++){
    //         // condition : 
    //         if(i==1||i==5||j==1||j==5){
    //             document.writeln("*")
    //         }
    //         else{
    //             document.writeln("&nbsp;&nbsp;")
    //         }
    //     }
    //     document.writeln("<br/>")
    // }





    // Q 23 : 

    // *
    // **
    // * *
    // *  *
    // *****


    // for(i=1;i<=5;i++){
    //     // star : 
    //     for(j=1;j<=i;j++){
    //         if(i==5||j==1||j==i){
    //             document.writeln("*")
    //         }
    //         else{
    //             document.writeln("&nbsp;&nbsp;")
    //         }
    //     }
    //     document.writeln("<br/>")
    // }



    // Q 24: 
    // *****
    // *  *
    // * *
    // **
    // * 


    // for(i=5;i>=1;i--){
    //     for(j=1;j<=i;j++){
    //         if(i==5||j==1||j==i){
    //             document.writeln("*")
    //         }
    //         else{
    //             document.writeln("&nbsp;&nbsp;")
    //         }
    //     }
    //     document.writeln("<br/>")
    // }


    // Q 25: 
    //     *
    //    **
    //   * *
    //  *  *
    // *****


    // for(i=1;i<=5;i++){
    //     for(j=5;j>i;j--){
        //         document.writeln("&nbsp;&nbsp;")
        //     }
        //     for(k=1;k<=i;k++){
    //         if(i==5||k==1||k==i){
    //             document.writeln("*")
    //         }
    //         else{
    //             document.writeln("&nbsp;&nbsp;")
    //         }
    //     }
    //     document.writeln("<br/>")
    // }



    // Q m : 

    // *     *
    // * * * *
    // *  *  * 
    // *     *
    // *     * 


    // for(i=1;i<=5;i++){
    //     for(j=1;j<=7;j++){
    //         if(j==1||j==7||(i==2&&j==3)||(i==2&&j==5)||(i==3&&j==4)){
    //             document.writeln("*")
    //         }
    //         else{
    //             document.writeln("&nbsp;&nbsp;")
    //         }
    //     }
    //     document.writeln("<br/>")
    // } 