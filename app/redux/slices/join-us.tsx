import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FormData } from "@/app/modals/join-us";

interface JoinUsState {
  loading: boolean;
  success: boolean;
  error: string | null;
  data: any;
}

const initialState: JoinUsState = {
  loading: false,
  success: false,
  error: null,
  data: null,
};

// POST Application

export const submitApplication = createAsyncThunk(
  "joinUs/submitApplication",

  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/apply", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error("Submission failed");
      }

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const joinUsSlice = createSlice({
  name: "joinUs",

  initialState,

  reducers: {
    resetJoinUs: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.data = null;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(submitApplication.pending, (state) => {
        state.loading = true;
      })

      .addCase(submitApplication.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })

      .addCase(submitApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetJoinUs } = joinUsSlice.actions;

export default joinUsSlice.reducer;
