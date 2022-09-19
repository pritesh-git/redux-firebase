import './MyStyleSheet.css'
import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'

const FormComponent = props => {
  const [fields, setFields] = useState({})
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    props.getUser()
  }, [])

  useEffect(() => {
    if (props.location.state) {
      setFields(props.location.state)
      setFlag(true)
    }
  }, [props])

  const handleChange = e => {
    e.preventDefault()
    setFields({ ...fields, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (flag) props.updateUser(fields)
    else props.createUser(fields)
    props.getUser()
    setFields({})
    setFlag(false)
  }
  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={fields.name || ''}
          placeholder="Enter Name"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          value={fields.email || ''}
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="tel"
          name="mob"
          value={fields.mob || ''}
          pattern="[0-9]{10}"
          placeholder="Enter Mobile Number"
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <h3>Total {props.usrList.length} Entries.</h3>
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
    createUser: data => {
      dispatch({ type: 'createUser', payload: data })
    },
    updateUser: data => {
      dispatch({ type: 'updateUser', payload: data })
    },
    getUser: () => {
      dispatch({ type: 'getUser', payload: '' })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)
