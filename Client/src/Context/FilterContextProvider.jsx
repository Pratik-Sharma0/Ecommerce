import { useContext } from "react";

import { useProductContext } from "./ProductContextProvider";
import { useReducer } from "react";
import { FilterContext } from "./Product";
import { useEffect } from "react";

const initialState={
  filter_products:[],
  all_products:[],
  sorting_value:'lowest',
  filter:{
    text:'',
    category:'all',
    brand:'all',
    maxPrice:0,
    price:0,
    minPrice:0
  },
}

const reducer=(state,action)=>{
   switch (action.type) {
    case 'Load_FILTER_PRODUCTS':
        let priceArr=action.payload.map((curr)=> curr.price
        )
        let maxPrice=Math.max(...priceArr);
              
        return{
            ...state,
            filter_products:[...action.payload],
            all_products:[...action.payload],
            filter:{...state.filter,maxPrice,price:maxPrice}
        }
        
    case 'GET_SORT_VALUE':
        let userSortValue=document.getElementById('sort');
        let sort_value=userSortValue.options[userSortValue.selectedIndex].value;
       
        return{
            ...state,
            sorting_value:sort_value
        }
    case 'SORTING_PRODUCTS':
        let newSortData;
        let tempSortData=[...action.payload];

        if(state.sorting_value === 'lowest'){
            const sortingProducts=(a,b)=>{
                return a.price - b.price
            };
           newSortData = tempSortData.sort(sortingProducts);     
        }
        if(state.sorting_value === 'highest'){
            const sortingProducts=(a,b)=>{
                return b.price - a.price
            };
           newSortData = tempSortData.sort(sortingProducts);     
        }


        if(state.sorting_value ==='a-z'){
            newSortData=tempSortData.sort((a,b)=> a.title.localeCompare(b.title)
            );
        }
        if(state.sorting_value ==='z-a'){
            newSortData=tempSortData.sort((a,b)=> b.title.localeCompare(a.title)
            );
        }

        return{
            ...state,
            filter_products:newSortData

        }
    case 'UPDATE_FILTER_VALUE':
        const {name,value}=action.payload;

        return{
            ...state,
            filter:{
                ...state.filter,
                [name]:value,
            }
        }
    case 'FILTER_PRODUCTS':
        let {all_products}=state;
        
        let tempFilterProduct =[...all_products]
        
        const{text,category,brand,price}=state.filter;
        if(text){
            
           tempFilterProduct=tempFilterProduct.filter((currentEle)=>{
                return currentEle.title.toLowerCase().includes(text);
           })
        }
        if(category!=='all')
        {
            tempFilterProduct=tempFilterProduct.filter((currentEle)=>{
                return currentEle.category === category;
            })
        }

        if(brand!=='all')
        {
            tempFilterProduct=tempFilterProduct.filter((currentEle)=>{
                return currentEle.brand.toLowerCase() === brand.toLowerCase();
            })
        }
        if(price === 0){
              tempFilterProduct=tempFilterProduct.filter((currEle)=>currEle.price === price)  
        }
        else{
            tempFilterProduct=tempFilterProduct.filter((currEle)=>currEle.price <= price)
        }
       
        return{
            ...state,
            filter_products:tempFilterProduct
        }
    case 'CLEAR_FILTER':
        return{
            ...state,
            filter:{
                ...state.filter,
                text:'',
                category:'all',
                brand:'all',
                maxPrice:state.filter.maxPrice,
                price:state.filter.maxPrice,
                minPrice:0
                                                                                     
            }
        }
        
   
    default:
        return state;
   }
}

const FilterContextProvider=({children})=>{
    const {products}=useProductContext();
    const [state,dispatch]=useReducer(reducer,initialState)
    //sorting Function
    const sorting=()=>{
        dispatch({type:'GET_SORT_VALUE'})
    }
    //updates the filter values
    const updateFilter=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        return dispatch({type:'UPDATE_FILTER_VALUE',payload:{name,value}});

    }
    //to Clear filter
    const clearFilter=()=>{
        return dispatch({type:'CLEAR_FILTER'})
    }
    useEffect(()=>{
        dispatch({type:'FILTER_PRODUCTS'})
    
    },[state.filter])
    useEffect(()=>{
     dispatch({type:'SORTING_PRODUCTS',payload:products})
    },[state.sorting_value])

    useEffect(() => {
     dispatch({type:'Load_FILTER_PRODUCTS',payload:products})
    }, [products])
    


    return <FilterContext.Provider value={{...state,sorting,updateFilter,clearFilter}}>{children}</FilterContext.Provider>
}

//custom hook

const useFilter=()=>{
    return useContext(FilterContext);
}

export {FilterContextProvider,useFilter};