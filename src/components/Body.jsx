import './body.scss'
import Tasks from '../elements/Tasks';

//import { useState } from 'react';

const Body = ({data}) => {
  
  return (
    <div className='body'>
      <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
      <Tasks data={data}/>
      {/* <table>
        <thead>
          <tr>
            <th>Tarefas</th>
            <th>Status</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
         <tr >
            <td></td>
            <td><input type="checkbox" checked=''/></td>
            <td> 
            <img src={pencil} onClick=''/>
            <img src={trash} onClick=''/></td>
          </tr>
          <tr>
            <td> Nova tarefa...</td>
            <td></td>
            <td className='add'>+</td>
          </tr>
        </tbody>
      </table> */}
        
    </div> )
        }
  
export default Body
