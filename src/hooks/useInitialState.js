import { useState } from "react";

const initialState = {
  cart: [],
}
const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      //mantenga lo que tiene en state
      ...state,
      //mantenga los que tiene en cart y que agrege payload(es el producto)
      cart: [...state.cart, payload]
    })
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(item => item.id !== payload.id)
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
  }
}

export default useInitialState;