import {useState} from 'react'
import information from  './Components/Header/img/information.jpg'
import './App.css';
import { Table } from './Components/Table/Table';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
const usersList = [
  { id: 119, firstName: "zahra", lastName: 'nuori sorkhani', job: 'developer' },
  { id: 911, firstName: "reza", lastName: 'naderi rad', job: 'employee' },
  { id: 191, firstName: "hamraz", lastName: 'monfared', job: 'desginer' },
]
function App() {
const [users, setUsers] = useState(usersList)
const [user, setUser] = useState({ firstName: "", lastName: '', job: '' })
  return (
    <div>
      <img src={information} className='Image-header' />
      <Table user={user} setUser={setUser} setUsers={setUsers} users={users}/>
      <Form user={user} setUser={setUser} setUsers={setUsers} users={users}/>
  
    </div>
  );
}

export default App;
