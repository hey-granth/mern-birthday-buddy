import data from './data';
import { useState } from 'react';

const App = () => {
    const [people, setPeople] = useState(data);
    const [isLoaded, setLoaded] = useState(true);

    const handleClick = () => {
        setLoaded(!isLoaded);
        if (isLoaded) setPeople([]);
        else setPeople(data);
    };

    return (
        <>
            <h2>{people.length} Birthday{people.length !== 1 ? 's' : ''} today</h2>
            {
                people.map((person) => {
                    const { id, name, age, image } = person;
                    return (
                        <div key={id} className="person">
                            <img src={image} alt={name} />
                            <div>
                                <h4>{name}</h4>
                                <p>{age} years</p>
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
};

export default App;