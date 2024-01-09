import {useState} from "react";
import Board from "../../components/Board";
import './App.css'
import {SquareProps} from "../../types";

function createItems() {
    const limit = 5;
    const random = Math.floor(Math.random() * limit);
    let array: SquareProps[] = [];
    for (let i = 0; i < limit; i++) {
        if (i === random) {
            array.push({id: i, hasItem: true, clicked: false});
        } else {

            array.push({id: i, hasItem: false, clicked: false});
        }
    }
    return array;
}


function App() {
    const [items, setItems] = useState(createItems());
    const [tries, setTries] = useState(0)
    const [isFinished, setIsFinished] = useState(false)

    const onClick = (currItem: SquareProps) => {
        if (isFinished) return
        if(currItem.hasItem) {
            setIsFinished(true)
            alert('Элемент найден!')
        }
        setItems(items.map(item => item.id === currItem.id ? {...item, clicked: true} : item))
        setTries(tries + 1)
    }

    const onReset = () => {
        setItems(createItems())
        setTries(0)
        setIsFinished(false)
    }

    return (
        <div className={'container'}>
            <Board items={items} onClick={onClick}/>
            <p>Tries: {tries}</p>
            <button onClick={onReset}>reset</button>
        </div>
    )
}

export default App
