import React, {Component, Fragment} from 'react';
import { createItem, updateItem } from '../../Reducer/list-reducer.js'
import { connect } from 'react-redux';

class Form extends Component {
    constructor(props) {
        super(props)
        this.addItem = this.addItem.bind(this)
    }

    addItem(event) {
        event.preventDefault()
        // this conditional isnt going to work for all the times / if you double click and then start making a new / maybe not since this form has two instance in dashboard and only the one inside List is being passed updateId on the props

        if(this.props.updateId) {
            let name = event.target.name.value;
            let color = event.target.color.value;
            let id = this.props.updateId;
            let obj = {
                name,
                color,
                id
            }
            this.props.updateItem(obj)
            document.getElementById('form').reset();
        } else {
            let name = event.target.name.value;
            let color = event.target.color.value;
            let obj = {
                name,
                color
            }
            this.props.createItem(obj)
            document.getElementById('form').reset();
        }
        
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <h1>Enter Todos!</h1>
                    <form id="form" className="inline" onSubmit={this.addItem}>
                        <input type="text" name="name"/>
                        <input type="text" name="color"/>
                        <button>Submit</button>
                    </form>
                </div>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    createItem : (payload) => dispatch(createItem(payload)),
    updateItem : (payload) => dispatch(updateItem(payload)),
})

export default connect(null,mapDispatchToProps)(Form)