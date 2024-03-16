import {useEffect, useState} from 'react'
import '../src/styles/global.css'
import Button from "./component/StartBtn/Button";
import PokerCard from "./component/PokerCard/PokerCard";
import {getPoker, getPokerWithID} from "./service";


function App() {
    const [data, setData] = useState([])

    const [deckId, setDeckId] = useState()

    useEffect(() => {
        handleData()
    }, [])

    async function handleData() {
        const res = await getPoker();
        setDeckId(res.data.deck_id)
    }

    async function handleDraw() {
        let res = await getPokerWithID(deckId)
        let card = res.data.cards[0]
        setData(prevCards => [...prevCards, card]);
    }

    return (
        <>
            <div className="main">
                <Button onDraw={handleDraw}/>
                <div className="poker_box">
                    {data?.map((item, index) => (
                        <PokerCard img={item.image} code={item.code} index={index}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default App
