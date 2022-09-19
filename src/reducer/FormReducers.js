import firebase from '../Firebase'
const firestore = firebase.database().ref('/UserInfo')

const iState = []

const FormReducers = (state = iState, action) => {
  if (action.type === 'getUser') {
    firestore.on('value', res => {
      var data = res.val()
      let tempUser = []
      for (let id in data) {
        tempUser.push({ ...data[id], id: id })
      }
      state = tempUser
    })
  }

  if (action.type === 'createUser') {
    state.push(action.payload)
    firestore.push(action.payload)
  }
  if (action.type === 'updateUser') {
    console.log(action.payload)
    firestore.child(action.payload.id).update({ ...action.payload })
  }
  if (action.type === 'deleteUser') {
    firestore.child(action.payload).remove()
    delete state[action.payload]
  }

  return state
}
export default FormReducers
