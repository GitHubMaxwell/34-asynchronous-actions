import React, {Component, Fragment} from 'react';
import Form from '../Form/Form.js';
import { connect } from 'react-redux';
import { readItem, deleteItem } from '../../Reducer/list-reducer.js'

class List extends Component {
    constructor(props) {
        super(props)
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
        // console.log('update Mode: ',this.state.updateId);
        let updateId = event.target.id;

        if(!this.state.updateId) {
            this.setState({
                updateId
            })
        } else {
            this.setState({
                updateId : ''
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
                            <p>{list.color}</p>
                            {/* <p>{list._id}</p> */}
                            <input type="button" value="Delete" name={list._id} onClick={this.deleteItem}/>
                            {this.state.updateId === list._id ? <Form updateId={this.state.updateId}/> : null}
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

const mapDispatchToProps = (dispatch) => ({
    readItem : () => dispatch(readItem()),
    deleteItem : (payload) => dispatch(deleteItem(payload)),
})

export default connect(mapStateToProps,mapDispatchToProps)(List)