const PokerCard = ({img, code, index}) => {
    let count = index * 20
    return (
        <>
            <div className="pokerCard" style={{transform: `rotate(${count}deg)`}}>
                <img src={img} alt={code}/>
            </div>
        </>
    )
}

export default PokerCard