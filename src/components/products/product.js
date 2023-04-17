import { Link } from "react-router-dom";

export const Product = ({ id, name, price }) => {
    return <section className="product" key={`product--${id}`}>
        <div>
            {name} (${price})
            <Link to={`/product/${id}`}><button>Show</button></Link>

        </div>

    </section>
    
}