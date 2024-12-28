import React, { useEffect, useState } from 'react';

const FoodApp = () => {
    const [products, setProducts] = useState([]);
    const [searchVal, setSearchVal] = useState("");
    const [originalProducts, setOriginalProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleSearchClick = (e) => {
        e.preventDefault();
        if (searchVal.trim() === "") {
            setProducts(originalProducts);
            return;
        }
        const filteredProducts = originalProducts.filter((item) =>
            item.strMeal.toLowerCase().includes(searchVal.toLowerCase())
        );
        setProducts(filteredProducts);
    };

    const handleCart = (id) => {
        const itemToAdd = originalProducts.find((item) => item.idMeal === id);
        if (itemToAdd && !cart.some((item) => item.idMeal === id)) {
            setCart([...cart, itemToAdd]);
        }
    };

    const removeCart = (id) => {
        const updatedCart = cart.filter((item) => item.idMeal !== id);
        setCart(updatedCart);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
                const data = await response.json();
                setProducts(data.meals); // Set the products for rendering
                setOriginalProducts(data.meals); // Store the original list for filtering
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* Search Menu */}
            <div
                style={{
                    padding: '0.5rem',
                    backgroundColor: 'antiquewhite',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <form onSubmit={handleSearchClick}>
                    <input
                        type="text"
                        style={{ width: '80vh', padding: '5px' }}
                        value={searchVal}
                        onChange={(e) => setSearchVal(e.target.value)}
                    />
                    &nbsp;
                    <button type="submit" style={{ padding: '5px' }}>
                        Search
                    </button>
                </form>
            </div>

            {/* Cart */}
            <h3>Cart:</h3>
            <ol>
                {cart.map((item) => (
                    <li key={item.idMeal} style={{display:'flex',}}>
                        <p>{item.strMeal}</p>
                        <button onClick={() => removeCart(item.idMeal)} style={{ color: 'red', border:'none', background: 'none', cursor: 'pointer', textAlign:'center'}}>
                            X
                        </button>
                    </li>
                ))}
            </ol>

            {/* Main Food Listing */}
            <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {products.length > 0 ? (
                    products.map((food) => (
                        <li
                            key={food.idMeal}
                            style={{
                                listStyle: 'none',
                                margin: '20px',
                                padding: '10px',
                                border: '1px solid black',
                                borderRadius: '2%',
                                width: '200px',
                                textAlign: 'center',
                            }}
                        >
                            <img
                                src={food.strMealThumb}
                                alt={food.strMeal}
                                width={200}
                                style={{ borderRadius: '2%' }}
                            />
                            <p>{food.strMeal}</p>
                            <button onClick={() => handleCart(food.idMeal)}>Add to Cart</button>
                        </li>
                    ))
                ) : (
                    <h1>Loading...</h1>
                )}
            </ul>
        </div>
    );
};

export default FoodApp;
