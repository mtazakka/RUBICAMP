const fs = require('fs');
let bacaData = fs.readFileSync('todo.json', 'utf-8')
let konversiData = JSON.parse(bacaData)

if (process.argv[2] == undefined) {
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
} else {
    switch (process.argv[2]) {
        case 'add':
            let command = (' ');
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
            break;

        case 'list':
            console.log('Daftar Kerjaan')
            for (let i = 0; i < konversiData.length; i++) {
                console.log(`${i + 1} ${konversiData[i].status ? '[x] ' : '[ ] '} ${konversiData[i].do_task}.`) // if true -> [x]
            }
            break;

        case 'delete':
            var input = parseInt(process.argv[3] - 1)
            console.log(`"${konversiData[input].do_task}" telah dihapus dari daftar.`)
            konversiData.splice(input, 1)
            fs.writeFileSync('todo.json', JSON.stringify(konversiData))
            break;

        case 'complete':
            var input = parseInt(process.argv[3] - 1)
            konversiData[input].status = true;
            fs.writeFileSync('todo.json', JSON.stringify(konversiData))
            console.log(`"${konversiData[input].do_task}" telah selesai.`)
            break;

        case 'uncomplete':
            var input = parseInt(process.argv[3] - 1)
            konversiData[input].status = false;
            fs.writeFileSync('todo.json', JSON.stringify(konversiData))
            console.log(`"${konversiData[input].do_task}" status selesai telah dibatalkan.`)
            break;

        case 'list:outstanding':
            if (process.argv[3] == 'desc')
                for (let i = 0; i < konversiData.length; i++) {
                    if (konversiData[i].status == false) {
                        console.log(`${i + 1} ${konversiData[i].status ? '[x] ' : '[ ] '} ${konversiData[i].do_task}.`)
                    }
                }
            if (process.argv[3] == 'asc')
                for (let i = konversiData.length - 1; i >= 0; i--) {
                    if (konversiData[i].status == false) {
                        console.log(`${i + 1} ${konversiData[i].status ? '[x] ' : '[ ] '} ${konversiData[i].do_task}.`)
                    }
                }
            break;

        case 'list:complete':
            if (process.argv[3] == 'desc')
                for (let i = 0; i < konversiData.length; i++) {
                    if (konversiData[i].status == true) {
                        console.log(`${i + 1} ${konversiData[i].status ? '[x] ' : '[ ] '} ${konversiData[i].do_task}.`)
                    }
                }
            if (process.argv[3] == 'asc')
                for (let i = konversiData.length - 1; i >= 0; i--) {
                    if (konversiData[i].status == true) {
                        console.log(`${i + 1} ${konversiData[i].status ? '[x] ' : '[ ] '} ${konversiData[i].do_task}.`)
                    }
                }
            break;

        case 'help':
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
            break;

        case 'tag':
            let tagged = ('')
            var input = parseInt(process.argv[3] - 1)
            for (let i = 4; i < process.argv.length; i++) {
                tagged = (process.argv[i]);
                konversiData[input].tag.push(tagged)
            }
            fs.writeFileSync('todo.json', JSON.stringify(konversiData))
            console.log(`Tag '${tagged}' telah ditambahkan ke daftar '${konversiData[input].do_task}'`)
            break;

    }
    if (process.argv[2].includes('filter:')) {
        var sort = process.argv[2].slice(7)
        let urutan = 0

        konversiData.map((filterData) => {
            if (filterData.tag.includes(sort)) {
                console.log(`${urutan += 1} ${filterData.status ? '[x] ' : '[ ] '} ${filterData.do_task}.`)
            }
        })
    }
}


