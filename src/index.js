module.exports = function zeros(expression) {

let numbers_one=[],
    numbers_two=[],
    zeros=0;
expression+="*";
let my_number=[],
    my_string="";

       for(let i=0;i<=expression.length;i++){    
            if(expression[i]==="*"){
            my_number.push(my_string);
             my_string="";
             i++;
         }
         my_string+=expression[i];                      
        }
    //sorting my numbers for "!" or "!!"
        for(let i=0;i<my_number.length;i++){
            if(my_number[i].includes("!!")){
                my_number[i]=my_number[i].replace(/!/g,"");
                numbers_two.push(my_number[i]);
            }
            if(my_number[i].includes("!")){
                my_number[i]=my_number[i].replace(/!/g,"");
                numbers_one.push(my_number[i]);
            }
            
        }
        //search ZEeeROS for normal factorial
        for(let i=0;i<numbers_one.length;i++){
            for (let e = 5; Number(numbers_one[i])/e >= 1; e *= 5){
            zeros += Math.floor(Number(numbers_one[i])/e);   
            }    
        }

        //search ZeeROS for NOT NORMALS factorial
        for(let i=0;i<numbers_two.length;i++){
            for (let e = 5; Number(numbers_two[i])/e >= 1; e *= 5){                
                zeros += Math.floor(Number(numbers_two[i])/e);
                if(Number(numbers_two[i])>=e*10){                    
                    zeros-=Math.floor(Number(numbers_two[i]/(e*10)));
                 }
            }
            if(Number(numbers_two[i])>=10){                    
                zeros-=Math.floor(Number(numbers_two[i]/10));
           }
          


               
        }


      return zeros;
      
 }
