import React from 'react';
import { Group } from '@vx/group';

const Node = props => {
    const width = 60;
    const height = 60;
    return(
        <Group top={props.node.y} left={props.node.x}>
            {props.node.depth % 2 !== 0 && 
                <rect 
                    width={width}
                    height={height}
                    y={-height / 2}
                    x={-width / 2}
                    fill="white"
                    stroke={"blue"}
                />
            }
            {props.node.depth % 2 === 0 &&
                <circle
                    r={30}
                    fill="white"
                    stroke={"red"}
                />
            }
            <text
                dy={".33em"}
                fontSize={20}
                fontWeight={700}
                fontFamily="Arial"
                textAnchor={"middle"}
                style={{ pointerEvents: "none" }}
                fill={"black"}
            >
                {props.node.data.name}
            </text>
        </Group>
    )

}

export default Node