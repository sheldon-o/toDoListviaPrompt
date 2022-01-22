

let input = prompt("what would you like to do")

const todo=['do the job','find a job'];
while(input!=="quit" && input!="q" ){
  if(input==='list'){
    console.log('***********************')
    for(let i=0;i<todo.length;i++){
      console.log(`${i}:${todo[i]}`);
    }
    console.log('********************')
  }else if(input==='new'){
    const newTodo = prompt("what is new to do");
    todo.push(newTodo);
    console.log(`${newTodo} added to list!`)
  }else if (input==='delete'){
    const index=parseInt(prompt('enter a index to delete'));
    if(!Number.isNaN(index)){
      const deleted = todo.splice(index,1);
    console.log(`ok deleted ${deleted[0]}`);

    }else{
      console.log('Unknown index');
    }
   
  }
  input = prompt("what would u like to do");



}
console.log("ok quit the app")
