
import { createSlice } from "/node_modules/.vite/deps/@reduxjs_toolkit.js?v=bda5515c";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        user:null
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload; // Correct assignment
        },
        setUser:(state , action)=>{
            state.user=action.payload;
        }
    }
});

export const { setLoading,setUser } = authSlice.actions;
export default authSlice.reducer;
