import ProductInput from "./ProductInput";
import {v4 as uuid} from "uuid";
import ProductList from "./ProductList";

export default function Products() {
    const handleTask = ({title,cost,image,category}) =>{
        const payload = {
            id: uuid(),
            title: title,
            cost: cost,
            image: image,
            category: category
        };
        const config = {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }
          return fetch(`http://localhost:3000/products`, config)
      
    }

    return (
        <div>
            <ProductInput onTaskCreate={handleTask} />
            <ProductList />
        </div>
    )
}

