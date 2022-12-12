import { useContext } from 'react';
import '../styles/item.scss';
import BudgetContext from "../hooks/budget_context";

function Item({Name,Amount,id}) {
    const {expenses,dispatch}=useContext(BudgetContext);
    function remove(){
        const updatedExpenses=expenses.filter((item)=>{return item.id!=id})
        console.log(updatedExpenses)
        const data={
            type:"REMOVE_ITEM",
            expenses:updatedExpenses,
        }
         dispatch(data)
    }

    return (  
        <div className="items">
            <span>{Name}</span>
            <div className="footer">
                <span className="price  ">{Amount}</span>
                <span className="remove_icon" onClick={remove}><i className="fa fa-times-circle"></i></span>
            </div>
        </div>
    );
}

export default Item;