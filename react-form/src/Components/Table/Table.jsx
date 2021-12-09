import './table.style.css'
import Button from '../Button/Button'
export const Table = ({ users, setUsers, setUser }) => {
    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }
    return (
        <div>
            {/* <img src="../Components/Header/img/informaiton.jpg" alt="information"/> */}
            <table>
                <thead>
                    <tr>
                        <td>
                            id
                        </td>
                        <td>
                            first name
                        </td>
                        <td>
                            last name
                        </td>
                        <td>
                            job
                        </td>
                        <td>
                            action
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {users.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.job}</td>
                            <td>
                                <Button onClick={() => { setUser(item) }} >Update</Button>
                                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    )
}

