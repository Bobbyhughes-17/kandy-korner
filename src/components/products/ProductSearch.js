import "./products.css"

export const ProductSearch = ({ setterFunction }) => {
    return (
        <div>
            <label htmlFor="candy-search"><h2>Candy Search!</h2></label>
            <input className="input"
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
            type="text" placeholder="Find Candy.."  />
        </div>
    )
}