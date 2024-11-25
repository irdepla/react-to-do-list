import "./index.css"

function Button({addVegetables}) {
    return (
        <button className="add__btn" onClick={addVegetables}>+</button>
    )
}

export default Button;