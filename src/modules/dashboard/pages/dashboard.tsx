import AddMetricDialog from "@/modules/dashboard/components/add-metric-dialog";
import WidgetMetricBoard from "@/modules/dashboard/components/widget-metric-board";

export default function LoginPage(){
  return (
    <div className="w-full h-screen">
      <AddMetricDialog />
      <WidgetMetricBoard />
    </div>
  )
}