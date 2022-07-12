
const initialStore = {
    counter : 0
  }
export const counterReducer = (state = initialStore ,action) => {
     switch(action.type){
         case 'INCREMENT':
             return { counter:state.counter+1} 
         case 'DECREMENT':
             return { counter:state.counter-1}    
     }
     return state
 }
