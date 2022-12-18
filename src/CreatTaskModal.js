import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, Input} from 'reactstrap';
import {v4 as uuidv4} from 'uuid';

function CreatTaskModel(props) {
    const {statuses, priority, addNewTask} = props;
    const [modal, setModal] = useState(false);
    const [name, setName]= useState('');
    const [description, setDescription]= useState('');
    const [status, setStatus]= useState(statuses[0]);
    const [taskPriority, setTaskPriority]= useState(priority[4]);

    const okButtonHandler = () => {
        const newTask ={
            id: uuidv4(),
            name,
            description,
            status,
            priority: taskPriority,

        }
        addNewTask(newTask);
        toggle();
    }



    const toggle = () => {
        setModal(!modal);
        setName('');
        setDescription('');
        setStatus(statuses[0]);
        setTaskPriority(priority[4])
    }

    return (
        <div>
            <div style={{margin: '30px' , textAlign: 'right' }}>

            <Button color="danger" onClick={toggle}>
                Creat New Task
            </Button>
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Creat New Task</ModalHeader>
                <ModalBody>

                    <InputGroup>
                        <InputGroupText>
                            Task Name:
                        </InputGroupText>
                        <Input value={name} onChange={(event)=> setName(event.target.value)}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                           Description:
                        </InputGroupText>
                        <Input value={description} onChange={(event)=> setDescription(event.target.value)}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                    <InputGroupText>
                        Statuses:
                    </InputGroupText>
                        <select className="form-select" aria-label="Default select example"
                        value={status} onChange={(event) =>setStatus(event.target.value)}>
                            {statuses.map((el, i) => <option key={i} value={el}>{el}</option>)}
                        </select>
                    </InputGroup>

                    <br/>

                    <InputGroup>
                        <InputGroupText>
                            Priority:
                        </InputGroupText>
                        <select className="form-select" aria-label="Default select example"
                        value={taskPriority} onChange={(event)=> setTaskPriority(event.target.value)}
                        >
                            {priority.map((el, i) => <option key={i} value={el}>{el}</option>)}
                        </select>
                    </InputGroup>


                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={okButtonHandler}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CreatTaskModel;