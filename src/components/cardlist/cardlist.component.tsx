import React from 'react';
import Card from '../card/card.component';
import './cardlist.styles.css';
import { Monster } from '../../App';


type CardListProps = {
    monsters: Monster[]
}

const Cardlist = ({monsters}: CardListProps) => {
    const monsterCard = monsters.map(monster => 
        <Card key={monster.id} monster={monster}/>
    );

    return(
        <div className='card-list'>
            
            {monsterCard}
        </div>
    );
};

export default Cardlist;