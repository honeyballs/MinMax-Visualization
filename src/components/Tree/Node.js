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
                    fill="#008ED3"
                    stroke={props.node.data.active ?"#006699" : "#008ED3" }
                    strokeWidth={props.node.data.active ?"3px" : "0px" }
                />
            }
            {props.node.depth % 2 === 0 &&
                <circle
                    r={20}
                    fill="#FF9999"
                    stroke={props.node.data.active ?"#B23535" : "#FF9999" }
                    strokeWidth={props.node.data.active ?"3px" : "0px" }
                    //strokeOpacity={0.5}
                />
            }
            <text
                dy={".33em"}
                fontSize={20}
                fontWeight={700}
                fontFamily="Montserrat"
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