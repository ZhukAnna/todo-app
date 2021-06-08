import React, { Component } from 'react';
import '../post-status-filter/post-status-filter.css';

export default class PostFilter extends Component {
    constructor(props) {
        super(props);

        this.buttons = [
            { name: 'all', label: 'Все' },
            { name: 'like', label: 'Понравилось' },
        ]

    }

    render() {
        const buttons = this.buttons.map(({ name, label }) => {
            const { filter, onFilterSelect } = this.props;
            const active = filter === name;
            const classOfBtn = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                    key={name}
                    type='button'
                    className={`btn ${classOfBtn}`}
                    onClick={() => onFilterSelect(name)}>
                    {label}
                </button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

