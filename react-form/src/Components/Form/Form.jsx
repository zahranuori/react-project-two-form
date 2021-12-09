import React from 'react'
import './form.style.css'
const makeUinqID = () => {
    return parseInt(100000 * Math.random())
}

const Form = ({users , setUsers , user , setUser}) => {
    const handleAdd = (e) => {
        e.preventDefault()
        if (user.id) {
            setUsers(users.map(oldUser => user.id === oldUser.id ? user : oldUser))
        } else {
            setUsers([...users, { id: makeUinqID(), ...user }])
        }
        setUser({ firstName: "", lastName: '', job: '' })
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    return (
        <div>
            <form className="Forms" onSubmit={handleAdd}>
                <div>
                    <label className='Labels' htmlFor="input1">First Name:</label>
                    <input onChange={handleChange} id={"input1"} type="text" name={'firstName'} value={user.firstName} />
                </div>
                <div>
                    <label className='Labels' htmlFor="input2">Last Name:</label>
                    <input onChange={handleChange} id={"input2"} type="text" name={'lastName'} value={user.lastName} />
                </div>
                <div>
                    <label className='Labels' htmlFor="input3">Job Title:</label>
                    <input onChange={handleChange} id={"input3"} type="text" name={'job'} value={user.job} />
                </div>
                <input className='submit' type="submit"  />
            </form>
        </div>
    )
}

export default Form
