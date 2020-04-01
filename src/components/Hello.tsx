import * as React from 'react';
import HelloProps from '../types/hello_props';

const Hello = (props: HelloProps): JSX.Element => {
    const { compiler, framework } = props;
    return (
        <h1>
            Hello from
            {' '}
            {compiler}
            {' '}
            and
            {framework}
            !
        </h1>
    )
};

module.exports = {
    Hello,
}
