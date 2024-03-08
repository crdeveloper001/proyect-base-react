import React from 'react';
import "./index.css";

export const Contacts = () => {

    const contactList = {
        name: "Contact List",
        list:[
            {name:"Oscar", phone:"123-4567"},
            {name:"Olman", phone:"0987-6543"},
            {name:"Wiliam", phone:"0987-6543"}
        ]
    } 
    
    

  return (
    <div className='contactContainer'>
        {contactList.list.map(item =>{
            return (
                <li>
                    {item.name}
                    {item.phone}
                </li>
            )
        })}

       

    </div>
  )
}
