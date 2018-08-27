export const reporter = store => next => action => {
    console.log('dispatching action: ', action)
    let result = next(action)
    console.log('next store.getState: ', store.getState())
    return result
  }


// export const formCheck = store => next => action => {
//   console.log('formCheck action.payload: ',action.payload)
//   console.log('formCheck action: ',action)

//   //NOT getting action type except READ_ITEM on page load

//     // if(action.type === 'CREATE_ITEM' && (!action.payload.color || !action.payload.name)) {

//       if(action.type === 'CREATE_ITEM'){
//       console.log('name CREATE_ITEM: ',action.payload.name)
//       console.log('color CREATE_ITEM: ',action.payload.color)
//         if(!action.payload.color || !action.payload.name) {
//         alert('You have to enter both a name and color')
//         }
//     } else {
//       console.log('formCheck not CREATE_ITEM next action')
//         return next(action)
//     }
//   }