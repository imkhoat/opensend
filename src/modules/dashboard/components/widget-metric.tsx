import { Button } from "@/components/ui/button";
import { Metric } from "@/modules/dashboard/types/dashboard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { METRIC_TYPE_CONFIG } from "@/modules/dashboard/utils/definitions";
import { Edit2, Trash } from "lucide-react";
import {
  removeMetric,
  setActiveMetric,
  toggleModal,
} from "@/modules/dashboard/store/dashboard-slice";
import { useDispatch } from "react-redux";

export function WidgetMetric({ metric }: { metric: Metric }) {
  const dispatch = useDispatch();
  const userRole = "ADMIN";

  function handleEdit() {
    if (userRole === "ADMIN") {
      dispatch(setActiveMetric(metric));
      dispatch(toggleModal());
    }
  }

  const metricConfig = METRIC_TYPE_CONFIG[metric.type];
  return (
    <Card className="py-4 w-full h-full">
      <CardContent>
        <div className="flex flex-row justify-start items-center gap-2">
          {metricConfig?.icon && (
            <metricConfig.icon
              size={24}
              className="text-primary fill-lime-400"
            />
          )}
          <div>
            <CardTitle className="flex flex-row justify-start items-center gap-2">
              {metric?.title}
            </CardTitle>
            <CardDescription>{metric?.description}</CardDescription>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-end items-center gap-1">
        {userRole === "ADMIN" && (
          <>
            <Button variant="ghost" size="icon" onClick={() => handleEdit()}>
              <Edit2 size={12} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => dispatch(removeMetric(metric.id))}
            >
              <Trash size={12} />
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
