import React from 'react';

const Instructions = props => {
    return (
        <div className="instructions">
            <p>You can change the depth of the tree and how many options each iteration will calculate on the left side of the screen.</p>
            <p>When you hit "Start" below a tree will be generated according to the settings you chose. <br/>The numbers in the lowest part of the tree are randomly generated between -10 and 10.</p>
            <p>The algorithm will run, populating the tree with the numbers the maximizer or minimizer chooses. <br/>Red represents the maximizer, blue represents the minimizer.</p>
            <p>After the algorithm finished you can use the slider at the bottom of the screen to view its calculations step by step. <br/>The slider will track multiple runs of the algorithm. It also tracks settings changes.</p>
            <p>To clear the slider cache hit "Reset"</p>
        </div>
    )
}

export default Instructions;