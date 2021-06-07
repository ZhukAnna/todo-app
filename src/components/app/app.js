import React, { Component } from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostFilter from '../post-status-filter/';
import PostList from '../post-list/';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: 'Going to eat', important: true, id: 'dkcs' },
                { label: 'Sleep', important: false, id: 'fofs' },
                { label: 'Play in football', important: false, id: 'ffyk' }
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <div className="app" >
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostFilter />
                </div>
                <PostList posts={this.state.data} onDelete={this.deleteItem} />
                <PostAddForm />
            </div>
        )
    }
}
