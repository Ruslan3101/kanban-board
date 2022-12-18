import {v4 as uuidv4} from 'uuid';
import './App.css';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Columns from "./Columns";
import CreatTaskModal from "./CreatTaskModal";

const todo = [
    {
        id: uuidv4(),
        name: 'Learn React',
        status: 'in progress',
        priority: 9,
        description: 'learn function'
    },
    {
        id: uuidv4(),
        name: 'Learn Redux',
        status: 'done',
        priority: 10,
        description: 'learn function'
    }, {
        id: uuidv4(),
        name: 'Learn Server',
        status: 'todo',
        priority: 8,
        description: 'learn To do'
    }, {
        id: uuidv4(),
        name: 'Learn To Do list ',
        status: 'in review',
        priority: 8,
        description: 'make commits to GitHub'
    },
]

function App() {
    const [tasks, setTasks] = useState(todo);

    const [statuses] = useState(['todo', 'in progress', 'in review', 'done'])

    const [priority] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const changePriority = (id, value) => {
        const newTasks = tasks.map(el => id === el.id ? {...el, priority: el.priority + value} : el)
        setTasks(newTasks)
    }
    const changeStatus = (id, value, status) => {
        const currentIndex = statuses.indexOf(status)
        const newStatuse = statuses[currentIndex + value]
        const newTasks = tasks.map(el => id === el.id ? {...el, status: newStatuse} : el)

        setTasks(newTasks)
    }
    const onDelete = (id) => {
        const newTasks = tasks.filter(el => id !== el.id)
        setTasks(newTasks)
    }

    const addNewTask = (newTasks) =>{
        setTasks([...tasks, newTasks])
    }

    const updateTask = (updatedTask) => {
        const newTasks = tasks.map(el => el.id === updatedTask.id ? {...updatedTask} : el)
        setTasks(newTasks)
    }

    return (
        <div className="App">
            <div className="container text-center">
                <h1>Kanban board</h1>
                <CreatTaskModal
                    statuses={statuses}
                    priority={priority}
                    addNewTask={addNewTask}
                />
                <div className="row align-items-start">
                    {statuses.map((el, i) => (
                        <Columns
                            key={i}
                            status={el}
                            tasks={tasks}
                            changePriority={changePriority}
                            changeStatus={changeStatus}
                            statuses={statuses}
                            onDelete={onDelete}
                            priority={priority}
                            updateTask={updateTask}
                        />
                    ))}

                </div>
            </div>
        </div>
    );
}

export default App;


