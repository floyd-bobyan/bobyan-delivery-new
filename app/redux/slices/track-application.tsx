import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "YOUR_GOOGLE_SCRIPT_URL";

interface SearchState {
  type: "id" | "email";
  search: string;
}

interface TrackState {
  loading: boolean;
  applications: any[];
  error: string | null;
}

const initialState: TrackState = {
  loading: false,
  applications: [],
  error: null,
};

export const trackApplication = createAsyncThunk(
  "track/application",

  async (search: SearchState, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `/api/track?type=${encodeURIComponent(search.type)}&search=${encodeURIComponent(search.search)}`,
      );

      const data = await response.json();

      if (!data.success) {
        throw new Error("Not found");
      }

      return data.applications;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const trackSlice = createSlice({
  name: "trackApplication",
  initialState,
  reducers: {
    clearTrack: (state) => {
      state.applications = [];
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(trackApplication.pending, (state) => {
        state.loading = true;
      })

      .addCase(trackApplication.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = action.payload;
      })

      .addCase(trackApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearTrack } = trackSlice.actions;

export default trackSlice.reducer;
