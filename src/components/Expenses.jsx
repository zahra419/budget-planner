import { useContext } from 'react';
import { useState } from 'react';
import '../styles/form.scss';
import BudgetContext from '../hooks/budget_context';
function Expenses() {
    const [name,setName]=useState('');
    const [amount,setAmount]=useState(0);
    const {dispatch}=useContext(BudgetContext);
    const data={
        type:"ADD_EXPENSES",
        expenses:{id:Math.random(),
                 Name:name,
                 Amount:parseInt(amount)}
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(data)
    }  
    return ( 
        <div className='form_container'>
            <h2>Add Expenses</h2>
            <form onSubmit={handleSubmit}>
            <div className='form'>
            
            <label htmlFor="name" >Name<br/>
                <input type="text" id="name" onChange={(e)=>setName(e.target.value)}/>
                </label>
            <label htmlFor="cost">Cost<br/>
                <input type="number" id="cost" min="0" onChange={(e)=>setAmount(e.target.value)}/>
                </label>
                
                </div>
                
            <button type="submit">Add</button>
            </form>
        </div>
     );
}

export default Expenses;