import trash from "../assets/trash.svg";
import pencil from "../assets/pencil.svg";

const Tasks = ({data}) => {

  return (
    <table>
          
      <tr>
        <th>Tarefas</th>
        <th>Status</th>
        <th>Opções</th>
      </tr>
    
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>
            <input type="checkbox" checked={item.completed}/>
          </td>
          <td> 
            <img src={pencil} onClick=''/>
            <img src={trash} onClick=''/>
          </td>
        </tr>
      ))}
        <tr>
          <td> Nova tarefa...</td>
          <td></td>
          <td className='add'>+</td>
        </tr>
      
          
    </table>
  )
}

export default Tasks