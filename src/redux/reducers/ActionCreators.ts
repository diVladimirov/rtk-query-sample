// import { AppDispatch } from "../store";
import axios from "axios";
import { IUser } from "../../models/IUser";
// import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispath: AppDispatch) => {
//   try {
//     dispath(userSlice.actions.usersFetching());
//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispath(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (error) {
//     // dispath(userSlice.actions.usersFetchingError(error));
//   }
// };

export const fetchUsers = createAsyncThunk(
  "users/fetchUsersStatus",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Fail");
    }
  }
);
