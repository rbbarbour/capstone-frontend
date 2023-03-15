import React, { useContext, useState } from "react";
import Cart from "../components/cart";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import DishesList from "../components/dishesList";
import { InputGroup, InputGroupAddon, Input} from "reactstrap";
import AppContext from "../components/context";

function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
  console.log(`URL: ${API_URL}`);
  const [query, setQuery] = useState("");
  const link = new HttpLink({ uri: `${API_URL}/graphql` });
  const cache = new InMemoryCache();
  const client = new ApolloClient({ link, cache });
  const { addItem, cart, restaurant } = useContext(AppContext);

  return (
    <ApolloProvider client={client}>
      <div className="search">
        <h2>{restaurant.name}</h2>
        <InputGroup>
          <InputGroupAddon addonType="append"> Search </InputGroupAddon>
          <Input
            onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
            value={query}
          />
        </InputGroup>
        <br></br>
      </div>
      <DishesList search={query} restId={restaurant.id} value={{ addItem }} />
      <Cart />
    </ApolloProvider>
  );
}
export default Home;
