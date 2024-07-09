// single selection
// then multiple Selection
import React, { useState } from 'react'
import data from './data.js'
import  './style.css'

const Accordian = () => {
    const [selected,setSelected] = useState(null);
    const [enableMultiselection, setEnableMultiselection] = useState(false);
    const [multiple,setMultiple] = useState([])
 function handleSingleSelection (getCurrentId){
    // console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId)
 }
 function handleMultiSelection(getCurrentId){
     let cpyMultiple = [...multiple];
     const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    //  console.log(findIndexOfCurrentId);
    if(findIndexOfCurrentId=== -1){
cpyMultiple.push(getCurrentId);
    }
    else{
        cpyMultiple.splice(findIndexOfCurrentId,1);
    }
    setMultiple(cpyMultiple);
 }
//   console.log(selected, multiple);
  return (
    <div className="acc-wrapper">
        <button onClick={()=> setEnableMultiselection(!enableMultiselection)}>Enable Multiselection</button>
        <div className="accordian">
            {
                data && data.length > 0 ? 
                data.map(dataItem=> <div className="item">
                    <div onClick={ enableMultiselection ? ()=>handleMultiSelection(dataItem.id)  : ()=>handleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        enableMultiselection ?
                        multiple.indexOf(dataItem.id)!== -1 && <div className="acc-content">{dataItem.answer}</div>
                        : selected=== dataItem.id? 
                        <div className="acc-content">{dataItem.answer+ dataItem.id}</div>
                        :null 
                    } 
                    {/* {selected=== dataItem.id? 
                    <div className="acc-content">{dataItem.answer+ dataItem.id}</div>
                    :null } */}
                </div> )
                : <div> No data found !</div> 
            }
        </div>
    </div>
  )
}

export default Accordian
