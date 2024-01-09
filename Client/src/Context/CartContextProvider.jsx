import { useContext, useReducer } from "react"
import { CartContext } from "./Product"
import { useEffect } from "react";




const getLocalCartData=()=>{
    let localeCartData=localStorage.getItem('Cart')
    if(localeCartData.length === 0){
        return [];
    }else{
      return JSON.parse(localeCartData);
    }
}

 const initailState={
    // cart:[],
    cart:getLocalCartData(),
    total_item:'',
    total_price:'',
    shipping:50,
 }
 const reducer=(state,action)=>{
    if(action.type ==='ADD_TO_CART'){
        let {id,value,singleProduct} = action.payload;
        

    // tackle existing product
    let existingProduct = state.cart.find(
        (currEle)=>currEle.id === id
    );
    if(existingProduct){
        let updatedProduct = state.cart.map((currEle)=>{
            if(currEle.id===id){
                let newValue= currEle.value + value;
                if(newValue>=currEle.max){
                    newValue=currEle.max
                }
                return{
                    ...currEle,
                    value:newValue
                }
            }
            else{
                return currEle
            }
        })
        return{
            ...state,
            cart:updatedProduct
        }
    }else{

      let  cartProduct={
            id:id,
            name:singleProduct.title,
            value,
            img:singleProduct.thumbnail,
            price:singleProduct.price,
            max:singleProduct.stock
        };
        return{
            ...state,
            cart:[...state.cart,cartProduct]
        }

    }
     
    }
    if(action.type==='REMOVE_ITEM'){
        let updatedCart=state.cart.filter(
            (currEle)=>currEle.id!==action.payload
        )
        return{
            ...state,
            cart:updatedCart,
        }
    }
    if(action.type==='CLEAR_CART'){
        return{
            ...state,
            cart:[],
        }
    }
    if(action.type==='SET_INCREMENT'){
        let updatedProduct=state.cart.map((currEle)=>{
            if(currEle.id===action.payload){
                let incValue=currEle.value+1;
                if(incValue>=currEle.max){
                    incValue=currEle.max
                }
                return{
                    ...currEle,
                    value:incValue
                };
            }else{
                return currEle
            }
        });
        return{
            ...state,
            cart:updatedProduct
        }

    }

    if(action.type==='SET_DECREMENT'){
        let updatedProduct=state.cart.map((currEle)=>{
            if(currEle.id===action.payload){
                let decValue=currEle.value - 1;
                if(decValue<=1){
                    decValue=1
                }
                return{
                    ...currEle,
                    value:decValue
                };
            }else{
                return currEle
            }
        });
        return{
            ...state,
            cart:updatedProduct
        }

    }
    if(action.type==='CART_TOTAL_ITEM'){
            let updatedItemVal =state.cart.reduce((initialVal,currEle)=>{
                let {value}=currEle;
                initialVal=initialVal+value
                return initialVal
            },0);
            return{
                ...state,
                total_item:updatedItemVal
            }

    }
    if(action.type==='CART_TOTAL_PRICE'){
        let total_price=state.cart.reduce((initialVal,currEle)=>{
            let{price,value}=currEle;
            initialVal=initialVal+price*value;
            return initialVal
        },0)
        return{
            ...state,
            total_price
        }
    }
    return state;
 }
const CartContextProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initailState)
    const addToCart=(id,value,singleProduct)=>{
        
     dispatch({type:'ADD_TO_CART',payload:{id,value,singleProduct}})
    }
    const removeItem=(id)=>{
        dispatch({type:'REMOVE_ITEM',payload:id})
    }
    const clearCart=()=>{
        dispatch({type:'CLEAR_CART'})
    }
    // increment & decrement
    const increment=(id)=>{
        dispatch({type:'SET_INCREMENT',payload:id})
    }
    const decrement=(id)=>{
        dispatch({type:'SET_DECREMENT',payload:id})
    }
    //locallay data adding
    useEffect(()=>{
        dispatch({type:'CART_TOTAL_ITEM'});
        dispatch({type:'CART_TOTAL_PRICE'})
        localStorage.setItem('Cart',JSON.stringify(state.cart))
    },[state.cart])
    return <CartContext.Provider value={{...state,addToCart,removeItem,clearCart,increment,decrement}}>{children}</CartContext.Provider>
}
//custom hooks
const useCart=()=>{
    return useContext(CartContext)
}
export {CartContextProvider,useCart};