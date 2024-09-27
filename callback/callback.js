function greet(name){
     console.log(`hello ${name}`);
}

function processUserInput(callback){
     const name=prompt('please enter your name.');
     callback(name);

}

processUserInput(greet);