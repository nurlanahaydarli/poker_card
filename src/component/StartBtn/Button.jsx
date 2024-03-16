const Button = ({onDraw}) => {
    return (
        <>
            <div className="center_btn">
                <button onClick={onDraw}>Draw Card</button>
            </div>
        </>
    )
}

export default Button