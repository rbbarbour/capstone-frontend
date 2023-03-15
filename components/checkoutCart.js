import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Button, Label, Badge } from "reactstrap";
import AppContext from "./context";
import Link from "next/link";


function CheckoutCart() {
  let { cart, addItem, removeItem, isAuthenticated } = useContext(AppContext);
  console.log(`in CART: ${JSON.stringify(cart)}`);

  //   problem is that cart may not be set
  const router = useRouter();

  console.log(`Router Path: ${JSON.stringify(router)}`);
  const renderItems = () => {
    let { items } = cart;
    console.log(`items: ${JSON.stringify(items)}`);
    if (items && items.length) {
      var itemList = cart.items.map((item) => {
        if (item.quantity > 0) {
          return (
            <div
              className="items-one"
              style={{ marginBottom: 15 }}
              key={item.id}
            >
              <div>
                <span id="item-price">&nbsp; ${item.price.toFixed(2)}</span>
                <span id="item-name">&nbsp; {item.name}</span>
              </div>
              <div>
                <Button
                  style={{
                    height: 25,
                    padding: 0,
                    width: 15,
                    marginRight: 5,
                    marginLeft: 10,
                  }}
                  onClick={() => addItem(item)}
                  color="link"
                >
                  +
                </Button>
                <Button
                  style={{
                    height: 25,
                    padding: 0,
                    width: 15,
                    marginRight: 10,
                  }}
                  onClick={() => removeItem(item)}
                  color="link"
                >
                  -
                </Button>
                <span style={{ marginLeft: 5 }} id="item-quantity">
                  {item.quantity}x
                </span>
              </div>
            </div>
          );
        }
      });
      return itemList;
    } else {
      return <div></div>;
    }
  };
  const checkoutItems = () => {
    return (
      <div>
        <Badge style={{ width: 300, paddingTop: 12 }} color="dark">
          <h3>${cart.total.toFixed(2)}</h3>
        </Badge>
      </div>
    );
  };

  // return Cart
  return (
    <div className="paper">
      <h5>Your order</h5>
      <hr />      
          <div style={{ marginBottom: 6 }}>
            <Label>Items</Label>
          </div>
          <div>{renderItems()}</div>
          <div>
            <Label>Total</Label>
          </div>
          <div>{checkoutItems()}</div>

          {console.log(`Router Path: ${router.asPath}`)}

      <style jsx>{`
        .paper {
          border: 1px solid lightgray;
          box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
            0px 1px 1px 0px rgba(0, 0, 0, 0.14),
            0px 2px 1px -1px rgba(0, 0, 0, 0.12);
          height: 550px;
          padding: 30px;
          background: #fff;
          border-radius: 6px;
        }
        #item-price {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
        #item-quantity {
          font-size: 0.95em;
          padding-bottom: 4px;
          color: rgba(158, 158, 158, 1);
        }
        #item-name {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
      `}</style>
    </div>
  );
}

export default CheckoutCart;
