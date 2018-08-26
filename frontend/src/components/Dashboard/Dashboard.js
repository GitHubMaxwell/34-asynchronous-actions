import React, {Component, Fragment} from 'react';
import Form from '../Form/Form.js';
import List from '../List/List.js';
import { createItem, updateItem } from '../../Reducer/list-reducer.js'
import { connect } from 'react-redux';




class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <Form onComplete={this.props.createItem}/>
                <List>
                    <Form onComplete={this.props.updateItem}/>
                </List>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    createItem : (payload) => dispatch(createItem(payload)),
    updateItem : (payload) => dispatch(updateItem(payload)),
})

export default connect(null,mapDispatchToProps)(Dashboard)