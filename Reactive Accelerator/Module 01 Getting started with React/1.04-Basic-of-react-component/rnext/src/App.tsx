import './App.css';
import PackingList from './Packing';

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
}, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
    }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
    }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
    }];


function App() {
    //method chaining
    // const chemists = people.filter(person => person.profession === 'chemist').chemists.map(chemist => <li>{chemist.name}</li>);

    const chemists = people.filter(person => person.profession === 'chemist' );

    const listItems = chemists.map(chemist => <li key={chemist.id}>{chemist.name}</li>);  

    return (
        <>
        <div>
            {listItems}
        </div>
        </>
    )
}

export default App
