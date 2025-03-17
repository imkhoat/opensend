import { useSelector } from "react-redux";
import { WidgetMetric } from "@/modules/dashboard/components/widget-metric";

export default function WidgetMetricList() {
  const metrics = useSelector((state) => state.dashboard.metrics);

  return (
    <div className="flex gap-2 w-full h-full">
      {metrics.map((metric) => (
        <WidgetMetric key={metric.id} metric={metric} className="h-fit"/>
      ))}
    </div>
  )

}