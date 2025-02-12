import axios from "axios";
import { useEffect, useState } from "react"

export default function ServicesPage() {
    const [products, setProducts] = useState();
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/allProducts`);
            setProducts(data)
        }
        getData()
    }, [])
    console.log(products)
    return (
        <div>

      <p className="text-5xl text-center">{products?.length}</p>
        </div>
    )
}
