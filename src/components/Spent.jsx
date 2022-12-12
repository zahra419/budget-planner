import { useContext } from "react";
import BudgetContext from "../hooks/budget_context";
import '../styles/containers.scss';
function Spent() {
    const {expenses}=useContext(BudgetContext);
    const value=expenses.reduce((total,a)=>total+a.Amount,0)
    
    
   
    return (  
        <div className="containers blue ">Spent so far:${value}</div>
    );
}

export default Spent;