import React from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostFilter from '../post-status-filter/';
import PostList from '../post-list/';
import PostAddForm from '../post-add-form';

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
margin: 0 auto;
max-width: 800px;
`

const App = () => {

    const data = [
        { label: 'Going to eat', important: true, id: 'dkcs' },
        { label: 'Sleep', important: false, id: 'fofs' },
        { label: 'Play in football', important: false, id: 'ffyk' }
    ];

    return (
        <AppBlock>
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </AppBlock>
    )
}

export default App;