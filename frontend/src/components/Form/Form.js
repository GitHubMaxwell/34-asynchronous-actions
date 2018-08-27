import React, {Component, Fragment} from 'react';
import { createItem, updateItem } from '../../Reducer/list-reducer.js'
import { connect } from 'react-redux';

class Form extends Component {
    constructor(props) {
        super(props)
        this.addItem = this.addItem.bind(this)
        this.exitUpdate = this.exitUpdate.bind(this)
    }

    exitUpdate() {
        this.props.exitUpdateMode();
    }

    addItem(event) {
        event.preventDefault()

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
            document.getElementsByClassName('update')[0].reset();
        } else {
            let name = event.target.name.value;
            let color = event.target.color.value;
            let obj = {
                name,
                color
            }
            this.props.createItem(obj)
            document.getElementsByClassName('form')[0].reset();
        }
        
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    {this.props.updateId ? <h2>Update Cat</h2> : <h1>Enter Cats!</h1> }
                    <form className={this.props.updateId ? 'update' : 'form'} onSubmit={this.addItem}>
                        <label>Name:</label>
                        <input type="text" name="name"/>
                        <label>Color:</label>
                        <input type="text" name="color"/>
                        <button>Submit</button>
                        {this.props.updateId ? <input type="button" value="X" onClick={this.exitUpdate}/> : null}
                        
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