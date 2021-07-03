import React, { Component } from 'react';
import arrayMove from 'array-move';
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
                { label: 'Coding', important: true, like: false, id: 1 },
                { label: 'Eat', important: false, like: false, id: 2 },
                { label: 'Sleep', important: false, like: true, id: 3 },
                { label: 'Repeat', important: true, like: false, id: 3 }
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.onSortEnd = this.onSortEnd.bind(this);

        this.maxId = 4;
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

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            };
        });
    }

    onToggleImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = { ...old, important: !old.important };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            };
        });
    }

    onToggleLiked(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = { ...old, like: !old.like };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            };
        });
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({ term });
    }

    onFilterSelect(filter) {
        this.setState({ filter });
    }

    onSortEnd({ oldIndex, newIndex }) {
        this.setState(({ data }) => ({
            data: arrayMove(data, oldIndex, newIndex),
        }));
        console.log(oldIndex);
        console.log(newIndex);
        console.log(this.state.data);
    }

    render() {
        const { data, term, filter } = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app" >
                <AppHeader
                    liked={liked}
                    allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <PostFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                    onSortEnd={this.onSortEnd}
                    useDragHandle />
                <PostAddForm onAdd={this.addItem} />
            </div>
        )
    }
}
