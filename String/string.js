


// string : string are used to store the text . 
       //  string are written with quotes . 

    
    // create a string : to create a string use the string name and the store the text in single and double quotes. 

    // let tech='hello';
    // let tech2="hello"; 


    // access the string : to access the string write the string variable inside the document.write function . 

    // document.writeln(tech)
    // document.writeln(tech2)


    // quotes inside quotes : you can use the quotes inside quotes , but dont match the quotes surrounding the string . 

    // let myname=' my name is "groot" academy . ' 
    // document.writeln(myname , "<br/>") 


    // let myname2= "it's groot. "
    // document.write(myname2 , "<br/>")

    // template string : the template are used to enclosed in backticks . it allow to signle and double quotes inside a string .   
    // let myname3=`my name is "groot" & it's full name is groot academy. `
    // document.writeln(myname3 , "<br/>")

    // multi line string : 

    // let myname4=`my name is groot . 
    //             it full name is groot academy. `
    // document.writeln(myname4 , "<br/>")



    // string with variable :

    // interpolation :  interpolation allow to use the variable inside the string . 
        //`${variablename}`

    // let a="groot academy"; 
    // let b=`my name is ${a}`; 
    // document.write(b)



    // string methods : 
    // 1. length: the length method is used to get the number of Element in string . 
    // let a="groot academy"; 
    // let b=a.length ;
    // document.write(b) 

    // 2. chatAt() :the chatAt method is used to find the char at specify index number . 
    // let a="groot academy";
    // let b=a.charAt(6)
    // document.write(b)


    // 3. at() : the at and chatAt is smiliar . 
    //  let a="groot academy";
    // let b=a.at(4)
    // document.write(b)


    // 4. slice : the slice method is used to select the element in a string . 
       // note :  end not count . 
    // let a="groot academy";
    // let b=a.slice(1,8)
    // document.write(b)

    // 5. substring() : the substring and slice is smiliar . 
    // let a="groot academy";
    // let b=a.substring(1,8)
    // document.write(b)


    // 6. touppercase() : the touppercase is used to convert the upper case of string . 

    // let a="groot academy";
    // let b=a.toUpperCase()
    // document.write(b)


    // 7. tolowercase: 
    // let a="GROOT ACADEMY"
    // let b=a.toLowerCase()
    // document.write(b)


    // 8. concat : the concat method is used to marge the two strings . 
    // let a="groot ";
    // let b="academy"; 
    // let c=a.concat(b)
    // document.write(c)


    // 9. trim() : the trim method is used to remove the extra space form both sides . 

    // let a="   groot academy        ";
    // let c=a.trim() // remove extra space 
    // let b=c.length  // 
    // document.write(b)


    // 10 . trimstart: the trimstart method is used to remove the extra space form left sides . 

    //  let a="   groot academy        ";
    // let c=a.trimStart() // remove extra space 
    // let b=c.length  // 
    // document.write(b)

    // 11. trimend() : 



    // 12. indexof: the indexof method is used to get the index number of a string . 
    // let a="hy jatin";
    // let b=a.indexOf("a")
    // document.write(b)



    // 13. : search() : the search and indexof both are similar . 
    // let a="hy jatin";
    // let b=a.search("i")
    // document.write(b)


    // 14. includes :
    // let a="hy jatin";
    // let b=a.includes("ti") 
    // document.write(b)



    // 15. startswith: 
    // let a="hy jatin";
    // let b=a.startsWith("h") 
    // document.write(b)


    // 16. endwith() : 
    // let a="hy jatin";
    // let b=a.endsWith("in") 
    // document.write(b)