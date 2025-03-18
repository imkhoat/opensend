import { useSelector, useDispatch } from "react-redux";
import { WidgetMetric } from "@/modules/dashboard/components/widget-metric";
import GridLayout, { Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { updateMetricPosition } from "@/modules/dashboard/store/dashboard-slice";

export default function WidgetMetricBoard() {
  const dispatch = useDispatch();
  const metrics = useSelector((state) => state.dashboard.metrics);

  const handleLayoutChange = (layout: GridLayout.Layout[]) => {
    layout.forEach((item) => {
      dispatch(
        updateMetricPosition({
          id: Number(item.i),
          x: item.x,
          y: item.y,
          w: item.w,
          h: item.h,
        })
      );
    });
  };

  const handleResizeStop = (
    layout: Layout[],
    oldItem: Layout,
    newItem: Layout
  ) => {
    console.log("Resize stop", oldItem, newItem);
    dispatch(
      updateMetricPosition({
        id: Number(newItem.i),
        x: newItem.x,
        y: newItem.y,
        w: newItem.w,
        h: newItem.h,
      })
    );
  };

  const layout: Layout[] = metrics.map((metric, index) => ({
    i: metric.id.toString(),
    x: metric.x || index * 2,
    y: metric.y || 0,
    w: metric.w || 2, // Kích thước mặc định 2x2
    h: metric.h || 2,
    minW: 2,
    minH: 2,
  }));
  return (
    <GridLayout
        className="layout w-screen !h-screen"
        layout={layout}
        cols={12}
        rowHeight={100}
        width={window.innerWidth}
        compactType={null}
        isResizable={true}
        onLayoutChange={handleLayoutChange}
        onResizeStop={handleResizeStop}
        draggableHandle=".drag-handle"
      >
      {metrics.map((metric) => (
        <div key={metric.id} className="drag-handle w-fit h-fit">
          <WidgetMetric metric={metric} />
        </div>
      ))}
    </GridLayout>
  );
}
