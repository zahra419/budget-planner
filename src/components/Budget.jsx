import { useContext } from "react";
import { useState } from "react";
import BudgetContext from "../hooks/budget_context";
import '../styles/containers.scss';
function Bugdet() {
    const {budget,dispatch}=useContext(BudgetContext);
    const [edit,setEdit]=useState(false)
    const [budgetValue,setBudgetValue]=useState(0);
    const data={
        type:"UPDATE_BUDGET",
        budget:parseInt(budgetValue)
    }
    function changeBudget(){
        if(budgetValue==null) return;
        dispatch(data);
    
    }
    
    
    return ( 
        <div>
            {edit ? <div className="containers gray"><input type="number" onChange={(e)=>setBudgetValue(e.target.value)} value={budgetValue}/>
            <button onClick={()=>{setEdit(!edit);changeBudget()}} >Save</button></div>:<div className="containers gray">
                <span>Budget:${budget}</span><button onClick={()=>setEdit(!edit)}>Edit</button></div>}
            
        
        </div>
     );
}

export default Bugdet;
