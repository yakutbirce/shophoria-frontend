import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../services/axiosInstance";

// Login işlemi için thunk
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

// Otomatik login için thunk (localStorage token varsa /verify isteği atar)
export const autoLogin = createAsyncThunk(
  "user/autoLogin",
  async (token, thunkAPI) => {
    try {
      // Header'a token'ı direkt koyuyoruz (Bearer prefix YOK)
      axiosInstance.defaults.headers.common["Authorization"] = token;

      const response = await axiosInstance.get("/verify");

      // Backend yeni token gönderiyorsa güncelle
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        axiosInstance.defaults.headers.common["Authorization"] = response.data.token;
      }

      return response.data;
    } catch (error) {
      // Token geçersizse temizle
      localStorage.removeItem("token");
      delete axiosInstance.defaults.headers.common["Authorization"];

      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Auto login failed"
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
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
      delete axiosInstance.defaults.headers.common["Authorization"];
    },
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
        axiosInstance.defaults.headers.common["Authorization"] =
          localStorage.getItem("token");
      })
      .addCase(loginThunk.rejected, (state, action) => {
        console.error("Login failed:", action.payload);
      })

     
      .addCase(autoLogin.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
      })
      .addCase(autoLogin.rejected, (state, action) => {
        console.warn("Auto login failed:", action.payload);
        localStorage.removeItem("userInfo");
        localStorage.removeItem("token");
        delete axiosInstance.defaults.headers.common["Authorization"];
      });
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
