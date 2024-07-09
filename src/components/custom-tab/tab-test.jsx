import React from 'react'
import'./tabs.css';
import Tabs from './tabs'

function RandomComponent(){
    return <h1>some random content</h1>
}

const TabTest = () => {

 const tabs =[
    {
        label: 'Tab 1',
        content: <div>This is content for tab 1</div>
    },
    {
        label: 'Tab 2',
        content: <div>This is content for tab 2</div>
    },
    {
        label: 'Tab 3',
        content: <RandomComponent/>
    }
 ]

 function handleChange(currentTabIndex){
    console.log(currentTabIndex);
 }
  return (
   <Tabs tabsContent={tabs} onChange={handleChange}></Tabs>
  )
}

export default TabTest
