import React, {Component, Fragment} from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.addItem = this.addItem.bind(this)
    }

    addItem(event) {
        event.preventDefault()
        let name = event.target.name.value;
        let color = event.target.color.value;
        // maybe need to pass the id
        let obj = {
            name,
            color
        }
        this.props.onComplete(obj)
        document.getElementById('form').reset();
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