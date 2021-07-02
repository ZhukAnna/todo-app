import React from 'react';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import PostListItem from '../post-list-item';
import '../post-list/post-list.css';

const Item = sortableElement(({ children }) => (
    <li className='list-group-item'>
        {children}
    </li>
));

const PostList = sortableContainer(({ posts, onDelete, onToggleImportant, onToggleLiked }) => {

    const elements = posts.map((item, i) => {
        const { id, ...itemProps } = item;
        return (
            <Item key={`item-${id}`} index={i} value={itemProps} >
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                />
            </Item>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
});

export default PostList;