const fs = require('fs/promises');
const path = 'data.json';
// Verificar si el archivo existe, si no, crearlo
async function createFileIfNotExists(path){
    try{
        await fs.access(path);
    } catch{
        await fs.writeFile(path, '[]');
    }
}

// Leer datos de un archivo JSON
async function readData(path){
    try{
        const fileContent = await fs.readFile(path, 'utf-8');
        const allData = JSON.parse(fileContent);
        console.log(allData);

    }catch(err){
        console.log(err);
    }
}

// Agregar datos a un archivo JSON
async function readAndAddData(path,data){
    try{
        const fileContent = await fs.readFile(path, 'utf-8');
        const allData = JSON.parse(fileContent);
        const newId = allData.length ? allData[allData.length - 1].id + 1 : 1;
        data.id = newId;
        
        const newData = {
            id: newId,
            name: data.name,
            age: data.age
        };
        

        allData.push(newData);
        await fs.writeFile(path, JSON.stringify(allData, null, 2));


        console.log('Se agregó un nuevo dato');
    }catch(err){
        console.log(err);
    }
};

// Actualizar datos de un archivo JSON
async function updateData(path,id,data){
    try{
        const { name, age } = data;
        
        const fileContent = await fs.readFile(path, 'utf-8');
        const allData = JSON.parse(fileContent);
        const index = allData.findIndex((item) => item.id === id);
        
        const updateData = {
            id: id,
            name: name,
            age: age
        };

        if(index !== -1){
            allData[index] = updateData;
            await fs.writeFile(path, JSON.stringify(allData, null, 2));
            console.log('Se actualizó el dato');
            console.log(allData);
        }else{
            console.log('No se encontró el dato');
        }

    }catch(err){
        console.log(err);
    }
}

// Eliminar datos de un archivo JSON
async function deleteData(path,id){
    try{
        const fileContent = await fs.readFile(path, 'utf-8');
        let allData = JSON.parse(fileContent);
        const index = allData.findIndex((item) => item.id === id);
        
        if(index !== -1){

            allData.splice(index, 1);

            await fs.writeFile(path, JSON.stringify(allData, null, 2));
            console.log('Se eliminó el dato');
            console.log(allData);
        }else{
            console.log('No se encontró el dato');
        }

    }catch(err){
        console.log(err);
    }
}

// Llamar a las funciones
async function main(){

    const commands = {
        create: async () => {
            const newData = {
                name: process.argv[3],
                age: parseInt(process.argv[4])
            };
            await createFileIfNotExists(path);
            await readAndAddData(path, newData);
        },
        read: async () => {
            await createFileIfNotExists(path);
            await readData(path);
        },
        update: async () => {
            const newDataUpdate = {
                name: process.argv[4],
                age: parseInt(process.argv[5])
            };
            await createFileIfNotExists(path);
            await updateData(path, parseInt(process.argv[3]), newDataUpdate);
        },
        delete: async () => {
            await createFileIfNotExists(path);
            await deleteData(path, parseInt(process.argv[3]));
        }
    };
    
    const command = process.argv[2];
    if (commands[command]) {
        commands[command]();
    } else {
        console.log('Comando no reconocido');
    }
}


main();