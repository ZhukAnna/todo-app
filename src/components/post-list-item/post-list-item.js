import React, { Component } from 'react';
import '../post-list-item/post-list-item.css';
import { sortableHandle } from 'react-sortable-hoc';

const DragHandle = sortableHandle(() => <span className='handle'></span>);

export default class PostListItem extends Component {

    render() {

        const { label, onDelete, important, like, onToggleImportant, onToggleLiked } = this.props;
        let classes = "app-list-item d-flex justify-content-between";

        if (important) {
            classes += ' important';
        }

        if (like) {
            classes += ' like';
        }

        return (

            <div className={classes}>
                <DragHandle />
                <span className="app-list-item__label" onClick={onToggleLiked}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-star btn-sm" onClick={onToggleImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}
