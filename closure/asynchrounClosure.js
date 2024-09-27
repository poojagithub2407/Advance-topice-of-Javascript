function greetUser(name){
     return function(){
          setTimeout(function(){
               console.log(`hello ${name}`); 
          },2000)
     }
}


const greetJohn=greetUser('john');
greetJohn();