import React from 'react';
import { Group } from '@vx/group';
import '../../App.css';

const Node = props => {
    const width = 35;
    const height = 35;
    return(
        <Group top={props.node.y} left={props.node.x}>
            {props.node.depth % 2 !== 0 && 
                <rect 
                    width={width}
                    height={height}
                    y={-height / 2}
                    x={-width / 2}
                    fill="#006699"
                    stroke={"#006699"}
                />
            }
            {props.node.depth % 2 === 0 &&
                <circle
                    r={20}
                    fill="#FF9999"
                    stroke={"#FF9999"}
                />
            }
            <text
                dy={".33em"}
                fontSize={20}
                fontWeight={700}
                fontFamily="Indie Flower"
                textAnchor={"middle"}
                style={{ pointerEvents: "none" }}
                fill={"white"}
            >
                {props.node.data.name}
            </text>
        </Group>
    )

}

export default Node