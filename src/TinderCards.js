// import { Swipeab } from '@mui/material';
import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCard.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://cdn.pixabay.com/photo/2022/01/19/09/26/elon-musk-6949267__480.png",
        },
        {
            name: 'Jeff Bezos',
            url: "https://cdn.pixabay.com/photo/2022/01/19/09/26/elon-musk-6949267__480.png",
        },
    ]);



    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen..!");
    };

    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
                {people.map((character) => (
                    <TinderCard className="swipe" key={character.name} preventSwipe={["up", "down"]} onSwipe={(dir) => swiped(dir, character.name)}
                        onCardLeftScreen={() => outOfFrame(character.name)}
                    >
                        <div style={{ backgroundImage: `url('${character.url}')` }} className="card">
                            <h3>{character.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;