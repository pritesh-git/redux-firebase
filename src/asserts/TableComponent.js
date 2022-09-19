import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './MyStyleSheet.css'

const TableComponent = props => {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    props.getUser()
    if (props.usrList) setUserList(props.usrList)
  }, [])

  const handleEdit = e => {
    e.preventDefault()
    props.history.push('/', userList[e.target.value])
  }

  const handleDelete = (usrId, indx) => {
    props.deleteUser(usrId)
    props.getUser()
    props.history.push('/')
  }
  return (
    <div className="formDiv">
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((usr, i) => (
            <tr key={i}>
              <td>{usr.id}</td>
              <td>{usr.name}</td>
              <td>{usr.email}</td>
              <td>{usr.mob}</td>
              <td>
                <button value={i} className="btn1" onClick={handleEdit}>
                  {' '}
                  Edit{' '}
                </button>
                <button
                  className="btn2"
                  onClick={() => handleDelete(usr.id, i)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    usrList: state,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteUser: id => {
      dispatch({ type: 'deleteUser', payload: id })
    },
    getUser: () => {
      dispatch({ type: 'getUser', payload: '' })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableComponent)
