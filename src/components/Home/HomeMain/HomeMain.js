import React from 'react';
import Card from '../../Card/Card';
import './HomeMain.css'

const HomeMain = () => {
    const fakeData = [
        {
            id: 1,
            title: 'One Time Ticket',
            taka: 100
        },
        {
            id: 2,
            title: 'One Day Ticket',
            taka: 500
        },
        {
            id: 3,
            title: 'Monthly Pass',
            taka: 1500
        },
        {
            id: 4,
            title: 'Annual Pass',
            taka: 9000
        }
    ]
    return (
        <div className='homemain d-flex align-items-center' style={{height:'400px'}}>
            {
                fakeData.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default HomeMain;