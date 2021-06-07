import React from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostFilter from '../post-status-filter/';
import PostList from '../post-list/';
import PostAddForm from '../post-add-form';

import './app.css';
import '../app-header/app-header.css';
import '../post-add-form/post-add-form.css';
import '../post-list/post-list.css';
import '../post-list-item/post-list-item.css';
import '../post-status-filter/post-status-filter.css';
import '../search-panel/search-panel.css';

const App = () => {

const data = [
    {label: 'Going to eat', important: true, id:'dkcs'},
    {label: 'Sleep', important: false, id: 'fofs'},
    {label: 'Play in football', important: false, id: 'ffyk'}
];

    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostFilter />
            </div>
            <PostList posts={data}/>
            <PostAddForm />
        </div>
    )
}

export default App;