import React from "react";
import Cart from "./cart";
import EmptyCart from "./emptycart";
import { useChosen } from "../hooks/useChosen";
import Footer from "../footer/footer";

const Chosen = () => {
    const {chosen} = useChosen()
  if (chosen.length > 0) {
    return <Cart  /> ;
  } else {
    return <EmptyCart />;
  }
  
};

export default Chosen;