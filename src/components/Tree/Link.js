import React from 'react';
import { LinkVertical } from '@vx/shape';

const Link = props => {
    return (
        <LinkVertical
            data={props.link}
            stroke="black"
            strokeWidth="3"
            strokeOpacity={0.5}
            fill="none"
        />
    )
}

export default Link;
