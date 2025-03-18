import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Metric } from "@/modules/dashboard/types/dashboard";
import { METRIC_TYPE_CONFIG } from "@/modules/dashboard/utils/definitions";

const loadMetricsFromLocalStorage = (): Partial<Metric>[] => {
  if (typeof window !== "undefined") {
    const savedMetrics = localStorage.getItem("dashboard_metrics");
    return savedMetrics ? JSON.parse(savedMetrics) : [];
  }
  return [];
};

const saveMetricsToLocalStorage = (metrics: Partial<Metric>[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("dashboard_metrics", JSON.stringify(metrics));
  }
};

interface DashboardState {
  modalState: boolean;
  modalMode: "ADD_NEW_METRIC" | "EDIT_METRIC";
  metrics: Partial<Metric>[];
  activeMetric: Partial<Metric> | null;
}

const initialState: DashboardState = {
  modalState: false,
  modalMode: "ADD_NEW_METRIC",
  metrics: loadMetricsFromLocalStorage(),
  activeMetric: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleModal: (state) => {
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
        meta: {
          ...METRIC_TYPE_CONFIG[state.activeMetric.type],
          value: state.activeMetric.meta?.value || 0,
        },
      };

      state.metrics.push(newWidget);
      saveMetricsToLocalStorage(state.metrics);
      state.activeMetric = null;
    },
    removeMetric(state, action: PayloadAction<number>) {
      state.metrics = state.metrics.filter((metric) => metric.id !== action.payload);
      saveMetricsToLocalStorage(state.metrics);
    },
    setActiveMetric(state, action: PayloadAction<Metric>) {
      state.activeMetric = action.payload;
    },
    updateMetric: (state, action: PayloadAction<{ id: number; title: string; description: string }>) => {
      const metric = state.metrics.find((m) => m.id === action.payload.id);
      if (metric) {
        metric.title = action.payload.title;
        metric.description = action.payload.description;
        saveMetricsToLocalStorage(state.metrics);
      }
    },
    updateMetricPosition: (state, action: PayloadAction<{ id: number; x: number; y: number; w: number; h: number }>) => {
      const metric = state.metrics.find((m) => m.id === action.payload.id);
      if (metric) {
        Object.assign(metric, action.payload);
        saveMetricsToLocalStorage(state.metrics);
      }
    },
    updateActiveMetric: (state, action: PayloadAction<Partial<Metric>>) => {
      state.activeMetric = { ...state.activeMetric, ...action.payload };
    },
    resetActiveMetric: (state) => {
      state.activeMetric = {};
    }
  },
});

export const { toggleModal, setModalMode, addNewWidget, updateActiveMetric, resetActiveMetric, removeMetric, setActiveMetric, updateMetric, updateMetricPosition } = dashboardSlice.actions;
export default dashboardSlice.reducer;