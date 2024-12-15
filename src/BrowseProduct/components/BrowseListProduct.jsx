import React, { useState, useEffect } from "react"; // Ensure useState and useEffect are imported
import ProductCard from '../../YourProduct/components/productCard';
import "../styles/browseProd.css";
import axios from "axios";

function BrowseListProducts(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get("https://localhost:7016/api/Products/category", {
                    params: { category: 'SS' },
                });
                console.log('Fetched products:', response.data);

                // Handle different response formats
                let productsData = [];
                if (Array.isArray(response.data)) {
                    productsData = response.data;
                } else if (response.data.$values) {
                    productsData = response.data.$values;
                } else {
                    console.error("Unexpected response format:", response.data);
                }

                const filteredProducts = productsData.map(product => ({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    specialization: product.specialization,
                    schedule: product.schedule,
                    location: product.location,
                    price: product.price,
                    creator: product.creator,
                    mainImage: product.mainImage
                }));
                setProducts(filteredProducts);
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        }

        fetchProducts();
    }, []);

    return (
        <>
            <div className="pGridView">
                <div className="productGrid p-2">
                    {products.map((item, index) => (
                        <ProductCard
                            key={index}
                            imgsrc={item.mainImage}
                            prodName={item.name}
                            prodPrice={item.price}
                            onFunc={() => props.onFuncme(item)} // Pass product data
                            origdata={item} // Add origdata prop to pass whole product object
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default BrowseListProducts;
