import { NavLink, Route } from 'react-router-dom'
import FormComponent from './asserts/FormComponents'
import TableComponent from './asserts/TableComponent'

const App = () => {
  return (
    <>
      <h2>
        <NavLink to="/">Form</NavLink> | <NavLink to="/table">Table</NavLink>
      </h2>

      <Route exact path="/" component={FormComponent} />
      <Route path="/table" component={TableComponent} />
    </>
  )
}

export default App
