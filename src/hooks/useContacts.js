import { useState,useEffect } from "react";

export const useContact=(contactInfo) =>{
    const [contact, setContact] = useState([]);

    useEffect(() => {
        console.log(contact);
      }, [contact]);
    setContact((previusState) =>[...previusState, contactInfo]);

    console.log(contact);
    return contact;
}