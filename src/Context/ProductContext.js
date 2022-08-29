// import { createContext ,useReducer,useContext,useState} from "react";

// export const ProductContext=createContext({})
// export const ProductState=({children})=>{
//     const [name, setname] = useState(1)


//     return(
//         <ProductState.Provider value={{name}}>
// {children}
//         </ProductState.Provider>
//     )

// }

// export const useProductValue=()=>useContext(ProductContext)
// // export const StateProvider=({reducer,initialstate,children})=>{

// //     const basket=[]
// //     <StateContext.Provider value={reducer,initialstate,basket}>
// //     {children}
// // </StateContext.Provider>
// // }
import React, { useContext, createContext, useState } from "react";

const StateContext = createContext();

// const initialState = {
//   chat: false,
//   cart: false,
//   userProfile: false,
//   notification: false,
// };
export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(1);
  const [Products, setProducts] = useState([])
  
const [basket,setbasket]=useState({
    item:{
        id:'',
        title:'',
        price:'',
        img:''

    }
})
const ba=[{}]

// console.log(ba)
  return (
    <StateContext.Provider
      value={{  screenSize,setScreenSize,basket,setbasket,Products,setProducts,ba}}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
