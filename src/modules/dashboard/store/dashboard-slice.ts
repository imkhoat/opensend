import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Metric } from "@/modules/dashboard/types/dashboard";

interface DashboardState {
  modalState: boolean;
  modalMode: "ADD_NEW_METRIC" | "EDIT_METRIC";
  metrics: Partial<Metric>[];
  activeMetric: Partial<Metric> | null;
}

const initialState: DashboardState = {
  modalState: false,
  modalMode: "ADD_NEW_METRIC",
  metrics: [],
  activeMetric: null,
};


const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toogleModal: (state) => {
      state.modalState = !state.modalState;
    },
    setModalMode: (state, action: PayloadAction<"ADD_NEW_METRIC" | "EDIT_METRIC">) => {
      state.modalMode = action.payload;
    },
    addNewWidget: (state) => {
      if (!state.activeMetric || !state.activeMetric.type) return;

      const newWidget: Partial<Metric> = {
        id: state.metrics.length + 1,
        title: state.activeMetric.title || "New Widget",
        description: state.activeMetric.description || "No description",
        type: state.activeMetric.type,
        x: state.activeMetric.x ?? 0,
        y: state.activeMetric.y ?? 0,
        w: state.activeMetric.w ?? 4,
        h: state.activeMetric.h ?? 2,
      };

      state.metrics.push(newWidget);
      state.activeMetric = null;
    },
    updateActiveMetric: (state, action: PayloadAction<Partial<Metric>>) => {
      state.activeMetric = { ...state.activeMetric, ...action.payload };
    },
  },
});

export const { toogleModal, setModalMode, addNewWidget, updateActiveMetric } = dashboardSlice.actions;
export default dashboardSlice.reducer;