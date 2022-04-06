

import { TCartState } from "./cart-slice";
import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";


export const fetchCartData = () => {
    return async (dispatch: any) => {
        const fetchData = async () => {
            const response = await fetch('https://react-redux-33b32-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');
    
            if(!response.ok){
                throw new Error('Could not fetch cart data!!');
            }
    
            const data = await response.json();
    
            return data;
        }
    
        try {
           const cartData = await fetchData();
           dispatch(cartActions.replaceCart({
               items: cartData.items ?? [],
               totalQuantity: cartData.totalQuantity,
           }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed',
              }))
        }
    }
}

export const sendCartData = (cart: TCartState) => {
    return async (dispatch: any) =>  {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data',
          }))

          const sendRequest = async () => {
            const response = await fetch('https://react-redux-33b32-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
            });

            if(!response.ok){
                return new Error('Sending cart data failed')
            }
          }
        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data succesfully',
              }))
        } catch (error){
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sent cart data failed',
            }))
        } 
    
    }
}