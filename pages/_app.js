import { useContext, useState } from "react";
import Head from "next/head";
import AppContext from "../components/context";
import Layout from "../components/layout";
import "../styles/globals.css";


function MyApp(props){
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [restaurant, setRestaurant] = useState(0);
  const [cart, setCart] = useState({
    items:[], 
    total:0
  });
  const { Component, pageProps } = props;
  

  const addItem = (item) => {
    let { items } = cart;
    //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++
    let foundItem = true;
    if(items.length > 0){
      foundItem = items.find((i) => i.id === item.id);
     
      if(!foundItem) foundItem = false;
    }
    else{
      foundItem = false;
    }
    console.log(`Found Item value: ${JSON.stringify(foundItem)}`)
    // if item is not new, add to cart, set quantity to 1
    if (!foundItem) {
      //set quantity property to 1
    
      let temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      var newCart = {
          items: [...cart.items, temp],
          total: cart.total + item.price,
      }
      setCart(newCart)
      console.log(`Total items: ${JSON.stringify(newCart)}`)
    } else {
      // we already have it so just increase quantity ++
      console.log(`Total so far:  ${cart.total}`)
      newCart= {
          items: items.map((item) =>{
            if(item.id === foundItem.id){
              return Object.assign({}, item, { quantity: item.quantity + 1 })
             }else{
            return item;
          }}),
          total: cart.total + item.price,
        }
    }
    setCart(newCart);  // problem is this is not updated yet
    console.log(`state reset to cart:${JSON.stringify(cart)}`)
     
  };
  const removeItem = (item) => {
    let { items } = cart;
    //check for item already in cart
    const foundItem = items.find((i) => i.id === item.id);
    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map((item) =>{
        if(item.id === foundItem.id){
          return Object.assign({}, item, { quantity: item.quantity - 1 })
         }else{
        return item;
      }}),
      total: cart.total - item.price,
      }
      //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)
    } else { // only 1 in the cart so remove the whole item
      console.log(`Try remove item ${JSON.stringify(foundItem)}`)
      const index = items.findIndex((i) => i.id === foundItem.id);
      items.splice(index, 1);
      var newCart= { items: items, total: cart.total - item.price } 
    }
    setCart(newCart);
  }

  return (
    <AppContext.Provider value={{addItem, removeItem, cart, setCart, isAuthenticated, setIsAuthenticated, user, setUser, restaurant, setRestaurant}}>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>
    
      <Layout>
          <Component {...pageProps} />
      </Layout>

    </AppContext.Provider>
  );
  
}


export default MyApp;
