import trash from "../assets/trash.svg";
import pencil from "../assets/pencil.svg";
import { useState } from "react";
import './index.scss'

const Tasks = ({data}) => {
  
  const [modalEdit, setModalEdit] = useState(false);
  const [modalTrash, setModalTrash] = useState(false);
  const [modalNew, setModalNew] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");

  const openModalEdit = (title, description) => {
    setSelectedTitle(title);
    setSelectedDescription(description);
    setModalEdit(true);
  };
  const openModalTrash = (title, description) => {
    setSelectedTitle(title);
    setSelectedDescription(description);
    setModalTrash(true);
  };

  const openModalNew = () => {
    setModalNew(true);
  };

  const addNewTask = () => {
    let newTask = document.getElementById('newTask').value;
    let newDesc = document.getElementById('newDesc').value;
    let newTaskdb = {"id": {data}.lenght + 1 , "title": newTask, "description": newDesc, "completed": false}
    console.log(newTaskdb);
    setModalNew(false);
  }

  const changeCheck = () => {
    console.log('changeCheck');
  }

  return (
    <div className="table">
      <table style={{
          display:
            modalEdit || modalTrash || modalNew? "none" : "table",
        }} >
        <thead>
            <tr>
              <th>Tarefas</th>
              <th>Status</th>
              <th>Opções</th>
            </tr>
        </thead>
      <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td className="table_check">
                <input type="checkbox" checked={item.completed}  onChange={changeCheck}/>
              </td>
              <td> 
                <img src={pencil} onClick={() => openModalEdit(item.title, item.description)}/>
                <img src={trash} onClick={() => openModalTrash(item.title, item.description)}/>
              </td>
            </tr>
          ))}
            <tr>
              <td> Nova tarefa...</td>
              <td></td>
              <td className='add' onClick={openModalNew}>+</td>
            </tr>
        </tbody>
      </table>
    {modalEdit && (
      <div className="modal_container">
        <div onClick={() => setModalEdit(false)} className="modal_container--close">
          <h2>X</h2>
        </div>
        <div className="modal_container--desc">
          <h1>{`Deseja editar o item "${selectedTitle}"?`}</h1>
          <span>{selectedDescription}</span>
        </div>
        <div className="modal_container--btn">
          <button className="no" onClick={() => setModalEdit(false)}>
            Não
          </button>
          <button className="yes">Sim</button>
        </div>
      </div>
    )}
    {modalTrash && (
      <div className="modal_container">
        <div onClick={() => setModalTrash(false)} className="modal_container--close">
          <h2>X</h2>
        </div>
        <div className="modal_container--desc">
          <h1>{`Deseja deletar o item "${selectedTitle}"?`}</h1>
          <span>{selectedDescription}</span>
        </div>
        <div className="modal_container--btn">
          <button className="no" onClick={() => setModalTrash(false)}>
            Não
          </button>
          <button className="yes">Sim</button>
        </div>
      </div>
    )}
    {modalNew && (
      <div className="modal_container">
        <div onClick={() => setModalNew(false)} className="modal_container--close">
          <h2>X</h2>
        </div>
        <div className="modal_container--new">
          <div>
            <h1>{`Atividade:`}</h1>
            <input type="text" placeholder="Escreva a atividade aqui..." id="newTask"></input>
          </div>
          <div>
            <h1>{`Descrição:`}</h1>
            <input type="text" placeholder="Escreva a descrição aqui..." id="newDesc"></input>
          </div>
        </div>
        <div className="modal_container--btn">
          <button className="done" onClick={addNewTask}>Concluir</button>
        </div>
      </div>
    )}
    </div>
  )
}

export default Tasks