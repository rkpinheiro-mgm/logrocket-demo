import { faker } from "@faker-js/faker";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  username?: string;
}

const username = undefined;

const initialState: AuthState = {
  username,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state) => {
      const username = faker.internet.username();
      state.username = username;
      localStorage.setItem("username", state.username);
    },
    signout: (state) => {
      state.username = undefined;
      localStorage.removeItem("username");
    },
    setUsername: (state, action: PayloadAction<string | undefined>) => {
      state.username = action.payload;
    },
  },
  selectors: {
    selectUsername: (state) => state.username,
  },
});

export const { authenticate, signout, setUsername } = authSlice.actions;
export const { selectUsername } = authSlice.selectors;
export default authSlice.reducer;
