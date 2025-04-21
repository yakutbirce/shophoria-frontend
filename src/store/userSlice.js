
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../services/axiosInstance";

export const loginThunk = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/login", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

const initialState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    logoutUser: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginThunk.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        localStorage.setItem("userInfo", JSON.stringify(action.payload)); 
      })
      
      .addCase(loginThunk.rejected, (state, action) => {
        console.error("Login failed:", action.payload);
      });
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;