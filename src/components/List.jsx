import { useContext } from "react";
import BudgetContext from "../hooks/budget_context";
import Item from './Item';

function List({searchedvalue}) {
  const {expenses}=useContext(BudgetContext);
  
    return (
        <div>
            {
              expenses.filter((item)=>{
                 if(searchedvalue==null) return item;
                  return item.Name.toLowerCase().includes(searchedvalue.toLowerCase())})
              .map((value)=>(
                <Item
                  key={value.id}
                  Name={value.Name}
                  Amount={value.Amount}
                  id={value.id}
                />
              ))
            }
        </div>
     );
}

export default List;