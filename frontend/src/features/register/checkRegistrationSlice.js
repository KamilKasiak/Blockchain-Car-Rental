import { createSlice } from "@reduxjs.toolkit";

const initialState = {
    registered = false;
}

cost checkRegistrationSlice = createSlice({
    name: "registrator",
    initialState,
    reducers: {
        register: (state) => {
            state.registered = true;
        }
        unregister: (state) => {
            state.registered = false
        }
    }
})

export const { register, unregister } = checkRegistrationSlice.actions
export default checkRegistrationSlice.reducer