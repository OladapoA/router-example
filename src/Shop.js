import React, {useState, useEffect} from "react";
// useState will hold the info we are getting from the API
// useEffect will make it so we run the fetch call when our component mounts
import './App.css';
// we will creating dynamic routes
import {Link} from "react-router-dom";

function Shop() {
  // Try and rewrite to get images working
  useEffect(() => {
    fetchItems()
  }, []) // the ,[] means it will only run when the component mounts

  const [items, setItems] = useState([]);

  const fetchItems = async () => { // async has been added because this is coming from a database
    const data = await fetch("https://fortnite-api.com/v1/map");

    const items = await data.json();

    // uncomment for image
    // console.log(items.data.images)
    // setItems(items.data.images)

    // uncomment for dynamically generated images
    console.log(items.data.pois)
    setItems(items.data.pois)
  }

  // uncomment for image
  // return (
  //   <div className="App">
  //     <h1>Shop Page</h1>
  //     <img src={items.pois} alt="stuff"></img>
  //   </div>
  // );
  
  // uncomment for dynamically generated pages
  return (
    <div className="App">
      <h1>Shop Page</h1>
      {items.map(item => (
        <h2 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h2>
      ))}
    </div>
  );
}

export default Shop;
