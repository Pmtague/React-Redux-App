import React from 'react';

export const CatFact = props => {
    console.log('CatFact', props)

    return (
        <div>
            <h2>Cat Fact</h2>
            <p>{ props.fact.all.text }</p>
            <p>By: { props.fact.all.name.first } { props.fact.all.name.last}</p>
        </div>
    )
}