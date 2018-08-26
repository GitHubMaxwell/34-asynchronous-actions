import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { readItem, deleteItem, updateItem } from '../../Reducer/list-reducer.js'

class List extends Component {
    constructor(props) {
        super(props)
        // put the updateId
        this.state = {
            updateId : ''
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.updateMode = this.updateMode.bind(this)
    }

    componentDidMount() {
        this.props.readItem()
    }

    updateMode(event) {
        // console.log('update Mode: ',event.target);
        let updateId = event.target.id;

        if(!this.state.updateId) {
            this.setState({
                updateId
            })
        } else {
            this.setState({
                update : ''
            })
        }
    }

    deleteItem(event) {
        let id = event.target.name
        this.props.deleteItem(id)
    }

    render() {
        return (
            <Fragment>
                <h2>LIST</h2>
                <ul>
                    {this.props.list.map(list => {
                        return <li className="todoItem" id={list._id} key={list._id} onDoubleClick={this.updateMode}>
                            <h3>{list.name}</h3>
                            <p>{list._id}</p>
                            <input type="button" value="Delete" name={list._id} onClick={this.deleteItem}/>
                            {this.state.updateId === list._id && this.props.children}
                        </li>
                    })}
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    list : state
})

// have to put update in the child form
// onDoubleClick
const mapDispatchToProps = (dispatch) => ({
    readItem : () => dispatch(readItem()),
    deleteItem : (payload) => dispatch(deleteItem(payload)),
    updateItem : (payload) => dispatch(updateItem(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(List)