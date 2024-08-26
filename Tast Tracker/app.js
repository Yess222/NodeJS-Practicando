const fs = require('fs');
const path = './tasks.json';

// Crear el archivo JSON si no existe
async function createFileIfNotExists(filePath) {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
}

// Leer las tareas del archivo JSON
async function readTasks(filePath) {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

// Tareas escritas en el archivo JSON
async function writeTasks(filePath, tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// Adicionar una tarea
async function addTask(filePath, description) {
    const tasks = await readTasks(filePath);
    const newTask = {
        id: tasks.length + 1,
        description,
        status: 'todo'
    };
    tasks.push(newTask);
    await writeTasks(filePath, tasks);
    console.log('Task added:', newTask);
}

// Actualizar una tarea
async function updateTask(filePath, id, description, status) {
    const tasks = await readTasks(filePath);
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.description = description || task.description;
        task.status = status || task.status;
        await writeTasks(filePath, tasks);
        console.log('Task updated:', task);
    } else {
        console.log('Task not found');
    }
}

// eliminar una tarea
async function deleteTask(filePath, id) {
    let tasks = await readTasks(filePath);
    tasks = tasks.filter(t => t.id !== id);
    await writeTasks(filePath, tasks);
    console.log('Task deleted');
}

// Lista de tareas
async function listTasks(filePath, status = null) {
    const tasks = await readTasks(filePath);
    const filteredTasks = status ? tasks.filter(t => t.status === status) : tasks;
    console.log(filteredTasks);
}

// Comando para adicionar uma nueva tarea
async function main() {
    await createFileIfNotExists(path);

    const command = process.argv[2];
    const args = process.argv.slice(3);

    switch (command) {
        case 'add':
            await addTask(path, args[0]);
            break;
        case 'update':
            await updateTask(path, parseInt(args[0]), args[1], args[2]);
            break;
        case 'delete':
            await deleteTask(path, parseInt(args[0]));
            break;
        case 'list':
            await listTasks(path);
            break;
        case 'list-done':
            await listTasks(path, 'done');
            break;
        case 'list-not-done':
            await listTasks(path, 'todo');
            break;
        case 'list-in-progress':
            await listTasks(path, 'in-progress');
            break;
        default:
            console.log('Unknown command');
    }
}

main();