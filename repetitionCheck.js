function repetitionCheck(){
//     var num = []; method 1
//     var num = new array(); method 2
        const num =[1,9,8,7,10,11,11,13];

        //Sorting the number in ascending order
        num.sort(function(a, b){return a-b});
        console.log("Smallest Number" + num[0]);
        console.log("Highest Number" + num[num.length-1]);

        //  Sorting the number in decending order
        //  num.sort(function(a, b){return b-a});
        //  console.log("Highest Number" + num[0]);
        // console.log("Smallest Number" + num[num.length-1]);

        

            for(i = 0;i<num.length;i++)
            {
                for(j=0;j<num.length;j++)
                {
                    if(i!=j && num[i]==num[j])
                    {
                        console.log("repeated" + num[j]);
                        // return ;
                        // console.log("repeat"+num[j]);                
                    }      
                    else
                    {
                            
                    }
                    
                }

            }

        }
    console.log(repetitionCheck());
     
