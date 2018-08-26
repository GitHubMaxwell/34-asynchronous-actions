import React, {Component, Fragment} from 'react';
import Form from '../Form/Form.js';
import List from '../List/List.js';
// import { createItem, updateItem } from '../../Reducer/list-reducer.js'
// import { connect } from 'react-redux';

export default class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <Form/>
                <List/>
            </Fragment>
        )
    }
}