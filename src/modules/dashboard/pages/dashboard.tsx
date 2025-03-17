import AddMetricDialog from "@/modules/dashboard/components/add-metric-dialog";
import WidgetMetricList from "@/modules/dashboard/components/widget-metric-list";

export default function LoginPage(){
  return (
    <div className="w-full h-screen">
      <AddMetricDialog />
      <WidgetMetricList />
    </div>
  )
}