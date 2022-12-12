import '../styles/containers.scss';
import BudgetContext from "../hooks/budget_context";
import { useContext } from "react";


function Patch() {
    const {expenses,budget}=useContext(BudgetContext);
    const value=expenses.reduce((total,a)=>total+a.Amount,0);
    
    
    return ( 
        <div className={`containers ${budget-value>= 0 ? 'green' :'red'}`}> Remaining:${budget-value} </div>
     );
}

export default Patch;