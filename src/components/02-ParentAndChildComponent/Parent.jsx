import React from 'react'
import { Child2 } from './Child2';
import { Child1} from './Child1';

export const Parent = () => {

    const contactList = {
        name: "Contact List",
        listNames:[
            {name:"Oscar", phone:"123-4567"},
            {name:"Olman", phone:"0987-6543"},
            {name:"Wiliam", phone:"0987-6543"}
        ]
    }  


  return (
    <div>
        <Child1 title={"HOLA HIJO 1, COMO ESTAS"} content={"MESSAGE FOR CHILD 1"}/>
        <Child2 title={"HOLA HIJO 2, COMO ESTAS"} content={contactList.name}/>

    </div>
  )
}
