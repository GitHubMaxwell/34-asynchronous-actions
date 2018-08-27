import reducer from '../../../Reducer/list-reducer.js'

describe('Cat Reducers', ()=> {
    it('Test: return orignal state on passing in an incorrect/invalid action', () => {
        let state = {
            rootReducer: [],
        }
        const red = reducer(state, 'wrong')
        expect(red).toEqual({
            rootReducer: [],
        })
    })

    it('Test: CREATE_ITEM', () => {

        let cat = {
            type: 'CREATE_ITEM',
            payload: {
                name : 'cat',
                color : 'green'
            } 
        }

        let state = reducer([], cat);
        let newState = [ { name: 'cat', color: 'green' } ];
        expect(state).toEqual(newState)
    })

    it('Test: READ_ITEM', () => {

        let cat = { 
            type : 'READ_ITEM',
            payload : [{ name: 'cat', color: 'green', _id: 1 }]
        };

        let readState = reducer([], cat)

        expect(readState.length).toEqual(1)
        expect(readState).toEqual([{ name: 'cat', color: 'green', _id: 1 }])
    })

    it('Test: UPDATE_ITEM', () => {

        let oldState = [ { name: 'cat', color: 'green', _id: 1 } ];

        let dog = {
            type: 'UPDATE_ITEM',
            payload: {
                name : 'dog',
                color : 'yellow',
                _id : 1
            } 
        }
        let state = reducer(oldState, dog);
        let updateState = [ { name: 'dog', color: 'yellow', _id: 1 } ];

        expect(state).toEqual(updateState)
    })

    it('Test: DELETE_ITEM', () => {
        
        let oldState = [ { name: 'cat', color: 'green', _id: 1 } ];

        let deleteCat = {
            type: 'DELETE_ITEM',
            payload: 1
        }
        let state = reducer(oldState, deleteCat);

        expect(state).toEqual([])
    })
})