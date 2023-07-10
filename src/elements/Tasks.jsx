import trash from "../assets/trash.svg";
import pencil from "../assets/pencil.svg";
import { useState } from "react";
import './Tasks.scss'

const Tasks = ({data}) => {

  const [modalEdit, setModalEdit] = useState(false);
  const [modalTrash, setModalTrash] = useState(false);
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

  const addTask = () => {
    // Implemente a lógica para adicionar uma nova tarefa
  };

  return (
    <div>
      <table style={{
          display:
            modalEdit || modalTrash ? "none" : "table",
        }} className="table">
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
              <td>
                <input type="checkbox" checked={item.completed}/>
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
              <td className='add' onClick={addTask}>+</td>
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
    {/* {modalTrash && (
      <div>
        <div onClick={() => setModalTrash(false)}>
          <h2>X</h2>
        </div>
        <div>
          <h1>{`Deseja deletar o item "${selectedTitle}"?`}</h1>
          <span>{selectedDescription}</span>
        </div>
        <div>
          <button className="no" onClick={() => setModalTrash(false)}>
            Não
          </button>
          <button className="yes">Sim</button>
        </div>
      </div>
    )} */}
</div>
  )
  }

export default Tasks