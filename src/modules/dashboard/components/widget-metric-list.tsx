import { useSelector, useDispatch } from "react-redux";
import { WidgetMetric } from "@/modules/dashboard/components/widget-metric";
import GridLayout, { Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useEffect } from "react";
import { updateMetricPosition } from "@/modules/dashboard/store/dashboard-slice";

export default function WidgetMetricList() {
  const dispatch = useDispatch();
  const metrics = useSelector((state) => state.dashboard.metrics);
  useEffect(() => {
    const savedLayout = localStorage.getItem("dashboard-layout");
    if (savedLayout) {
      const parsedLayout = JSON.parse(savedLayout);
      parsedLayout.forEach((item: any) => {
        dispatch(
          updateMetricPosition({
            id: item.i,
            x: item.x,
            y: item.y,
            w: item.w,
            h: item.h,
          })
        );
      });
    }
  }, [dispatch]);

  const handleLayoutChange = (layout: GridLayout.Layout[]) => {
    localStorage.setItem("dashboard-layout", JSON.stringify(layout));
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

  const layout: Layout[] = metrics.map((metric, index) => ({
    i: metric.id.toString(),
    x: index * 2,
    y: 0,
    w: metric.width || 2, // Kích thước mặc định 2x2
    h: metric.height || 2,
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
        onLayoutChange={handleLayoutChange}
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
