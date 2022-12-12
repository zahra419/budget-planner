import { useEffect } from "react";
import { createContext,useReducer} from "react";


 export const BudgetContext=createContext({
  budget:0,
  expenses:[]

});

function reducer(state,action){
  switch(action.type){
     case "UPDATE_BUDGET":
      return {...state,budget:action.budget}
    case "ADD_EXPENSES":
      return {...state,expenses:[...state.expenses,{id:action.expenses.id,Name:action.expenses.Name,Amount:action.expenses.Amount}]}
    case "REMOVE_ITEM":
        return {...state,expenses:action.expenses};

  }
  return state;
}
const initialState={
  budget:0,
  expenses:[]
}
export function ProjectContextProvider(props) {

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(()=>{
    if(state.budget!=0 || state.expenses.length!=0){
      localStorage.setItem("budget",JSON.stringify(state))
    }
  },[state])
  useEffect(()=>{
    if(localStorage.getItem("budget")!==null){
      const values=localStorage.getItem("budget");
      const data=JSON.parse(values);
      state.budget=data.budget;
      state.expenses=[...data.expenses];
    }
  },[])
  const context={
    budget:state.budget,
    expenses:state.expenses,
    dispatch
  }
    return (
        <BudgetContext.Provider value={context} >
         {props.children}
        </BudgetContext.Provider>
      );
}

export default BudgetContext ;
 