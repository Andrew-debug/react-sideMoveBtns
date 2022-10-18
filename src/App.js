import React, { useState } from "react";
import Location from "./components/Location";
import locationData from "./data/data";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

export default function App() {
  const [locations, setLocations] = useState(locationData);
  // handleChangeSort(e) {
  //   this.setState({sort: e.target.value});
  //   this.listProducts();
  // }
  // listProducts() {
  //   this.setState(state => {
  //     if(state.sort !== '') {
  //       state.products.sort((a, b) => (state.sort === 'lowest') ? (a.price < b.price?1:-1) : (a.price > b.price?1:-1));
  //     } else {
  //       state.products.sort((a, b) => (a.id < b.id?1:-1));
  //     }
  //     return {filterProducts: state.products};
  //   })
  // }
  const [itemsInRow, setitemsInRow] = useState(4);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header count={locations.length} />
      <Grid
        container
        // spacing={{ xs: 2, md: 3 }}
        // columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
      >
        {locations.map((item, index) => {
          return (
            <Grid item xs={12 / itemsInRow} key={index}>
              <Location
                key={index}
                {...item}
                index={index}
                context={locations}
                setContext={setLocations}
                itemsInRow={itemsInRow}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
