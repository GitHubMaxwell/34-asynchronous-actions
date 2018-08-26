// add reporter and thunk middlware to project

export const reporter = store => next => action => {
    console.log('dispatching action: ', action)
    let result = next(action)
    console.log('next store.getState: ', store.getState())
    return result
  }


export const formCheck = store => next => action => {
  console.log('formCheck action.payload: ',action.payload)
    // if(action.type === 'CREATE_ITEM' && (!action.payload.color || !action.payload.name)) {
      if(action.type === 'CREATE_ITEM'){
      console.log('formCheck CREATE_ITEM: ',action.payload)

        // alert('You have to enter both a name and color')
    } else {
      console.log('formCheck not CREATE_ITEM next action')

        return next(action)
    }
  }