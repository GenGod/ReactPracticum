import * as React from 'react';
import NoteProps from '../types/note_props';

export const Note = (props: NoteProps): JSX.Element => {
    const {
        title, description,
    } = props;
    return (
        <div>
            <h3><b>{title}</b></h3>
            <p>{description}</p>
        </div>
    )
};
