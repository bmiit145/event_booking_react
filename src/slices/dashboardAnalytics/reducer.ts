import { createSlice } from "@reduxjs/toolkit";
import { getAllData, getAudiencesMetricsChartsData, getUserDeviceChartsData, getAudiencesSessionsChartsData } from './thunk';

export const initialState : any = {
  chartData: [],
  audiencesMetricsData: [],
  userDeviceData: [],
  audiencesSessionsData: [],
  error: {}
};

const DashboardAnalyticsSlice = createSlice({
  name: 'DashboardAnalytics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.chartData = action.payload;
    });
    builder.addCase(getAllData.rejected, (state, action:any) => {
      state.error = action.payload.error || null;
    });

    builder.addCase(getAudiencesMetricsChartsData.fulfilled, (state, action) => {
      state.audiencesMetricsData = action.payload;
    });
    builder.addCase(getAudiencesMetricsChartsData.rejected, (state, action:any) => {
      state.error = action.payload.error || null;
    });

    builder.addCase(getUserDeviceChartsData.fulfilled, (state, action:any) => {
      state.userDeviceData = action.payload;
    });
    builder.addCase(getUserDeviceChartsData.rejected, (state, action:any) => {
      state.error = action.payload.error || null;
    });

    builder.addCase(getAudiencesSessionsChartsData.fulfilled, (state, action:any) => {
      state.audiencesSessionsData = action.payload;
    });
    builder.addCase(getAudiencesSessionsChartsData.rejected, (state, action:any) => {
      state.error = action.payload.error || null;
    });

  }
});

export default DashboardAnalyticsSlice.reducer;