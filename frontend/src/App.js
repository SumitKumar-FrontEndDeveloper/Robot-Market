import React, { useState, useEffect } from "react";
import "./App.css";
import "h8k-components";
import ProductList from "./components/product-list";
import { useDispatch, useSelector } from "react-redux";
import { fetchRobotList } from './actions/robot'
import Cart from "./components/cart";

const title = "Robot Market";

const App = () => {
  const [products, setProducts] = useState();
  const [mainProducts, setMainProducts] = useState();
  const [carts, setCarts] = useState([]);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch()
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    (async () => {
      const robotListList = await dispatch(fetchRobotList())
      const productss=robotListList.map((product, index) => {
        product.cartQuantity = 0;
        product.id = index+1;
        return product;
      });
      setProducts(productss);
      setMainProducts(productss)
    })();

    
  }, []);

  const addDataInCart = (product, type) => {
    let cartIndex=carts.findIndex((val) => val.id==product.id)
    let index=products.findIndex((val) => val.id==product.id)
    let pQuantity = products[index].stock;
    let currentProduct = carts[cartIndex];

    if(carts.length==5 && cartIndex==-1){
      alert("You can not add more then 5 product")
      return
    }

    setCarts((cartStates) => {
        setProducts((productsStates) => {
          productsStates[index].stock =
            type == "add"
              ? pQuantity != 0
                ? productsStates[index].stock - 1
                : productsStates[index].stock
              : currentProduct
              ? productsStates[index].stock + 1
              : productsStates[index].stock;
  
          return productsStates;
        });
        if (cartIndex >= 0) {
          cartStates[cartIndex].cartQuantity =
            type === "add"
              ? pQuantity != 0
                ? cartStates[cartIndex].cartQuantity + 1
                : cartStates[cartIndex].cartQuantity
              : type == "remove" && cartStates[cartIndex].cartQuantity == 1
              ? cartStates.splice(cartIndex, 1)
              : cartStates[cartIndex].cartQuantity - 1;
        } else {
          const data = {
            ...product,
            cartQuantity: 1,
          };
          if (type === "add") {
            cartStates.push(data);
          }
        }

        setTotalPrice(() => {
          let tPrice = 0;
          for (let val of cartStates) {
            tPrice += val.price * val.cartQuantity;
          }
          return tPrice;
        });
        return [...cartStates]
    });
  };

  const searchProduct=() => {
      console.log(search)
      console.log(products)
      if(search.length > 0){
        const searchProducts=products.filter((val) => val.material.toLowerCase()==search.toLowerCase())
        if(searchProducts.length > 0) {
          setProducts(searchProducts)
        } else {
          setProducts(mainProducts)
        }
        
      } else {
        setProducts(mainProducts)
      }
  }

  return (
    <div>
        <div className="searchContainer">
          <div className="textBox">
            <input type="text" placeholder="Search Robot" value={search} onChange={(e) => setSearch(e.target.value)} />
            {search.length > 0 && <span className="cross" onClick={() => {
              setProducts(mainProducts)
              setSearch('')
            }}>X</span>}
          </div>
          <div className="search-button">
            <button onClick={searchProduct}>Search</button>
          </div>
        </div>
        <div className="layout-row shop-component">
        {products && (
          <ProductList products={products} addToCart={addDataInCart} />
        )}
        <Cart cart={carts} total={totalPrice} addToCart={addDataInCart}/>
      </div>
    </div>
  );
};

export default App;
