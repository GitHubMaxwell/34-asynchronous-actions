import React, {Component, Fragment} from 'react';
import Form from '../Form/Form.js';
import List from '../List/List.js';

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