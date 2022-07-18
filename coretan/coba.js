const fs = require('fs');
let bacaData = fs.readFileSync('todo.json', 'utf-8')
let konversiData = JSON.parse(bacaData)

switch (process.argv[2]) {
    case undefined:
        console.log('>>> JS TODO <<<')
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
        console.log(`$ node todo.js filter:<tag_name>`);

    case 'add':
        let command = " ";
        for (let i = 3; i < process.argv.length; i++) {
            command += `${process.argv[i]} `;
        }
        konversiData.push({
            "status": false,
            "do_task": command,
            "tag": [],
        })
        let myJSON = JSON.stringify(konversiData)
        fs.writeFileSync('todo.json', myJSON, 'utf-8')
        console.log(`"${command}" telah ditambahkan.`)
        process.exit(0)

    case 'list':
        console.log('Daftar Kerjaan')
        for (let i = 0; i < konversiData.length; i++){
            console.log(`${i+1} ${konversiData[i].status? '[x] ' : '[ ] '} ${konversiData[i].do_task}.`) // if true -> [x]
        }
    
    case 'delete':
        


}