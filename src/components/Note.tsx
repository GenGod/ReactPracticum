import * as React from 'react';
import NoteProps from '../types/note_props';

const Note = (props: NoteProps): JSX.Element => {
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

module.exports = {
    Note,
}
