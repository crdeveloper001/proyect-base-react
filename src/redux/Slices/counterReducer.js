import { createSlice } from "@reduxjs/toolkit";
import GetAllFields from "../../services/FieldsService";
const counterSlice = createSlice({
    name:"counter",
    initialState: {
        value:0,
        actions:[],
        field:[]
    },
    reducers:{
        getFieldsApi:(state) =>{
            const request = GetAllFields();
            request.then((result) => {
                console.log(result);
                state.field = result;
            });
            
        },
        increment:(state) =>{
            state.value += 1;
            state.actions.push("incremented");
        },
        decrement:(state) =>{
            state.value -= 1;
            state.actions.push("decrement");
        },

    }

})

export const { increment, decrement,getFieldsApi } = counterSlice.actions ;
export default counterSlice.reducer