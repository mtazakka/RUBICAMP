function list(){
    console.log(`$ node todo.js <command> `)
    console.log(`$ node todo.js list `)
    console.log(`$ node todo.js task <task_id>`)
    console.log(`$ node todo.js add <task_content>`)
    console.log(`$ node todo.js delete <task_id>`)
    console.log(`$ node todo.js complete <task_id>`)
    console.log(`$ node todo.js uncomplete <task_id>`)
    console.log(`$ node todo.js list:outstanding asc|desc`)
    console.log(`$ node todo.js list:complete asc|desc`)
    console.log(`$ node todo.js tag<task_id> <tag_name_1> <tag_name_2>...<tag_name_N>`)
    console.log(`$ node todo.js filter:<tag_name>`)
    return
}
const fs = require('fs');
let database = fs.readFileSync('todo.json', 'utf-8')
let inputData = process.argv[2]
switch (new list().getinputData()) {
    case list:
      inputData = 'add'
      break;
    case 1:
      inputData = "task";
      break;
    case 2:
      inputData = "TuesinputData";
      break;
    case 3:
      inputData = "WednesinputData";
      break;
    case 4:
      inputData = "ThursinputData";
      break;
    case 5:
      inputData = "FriinputData";
      break;
    case  6:
      inputData = "SaturinputData";
  }
list()
