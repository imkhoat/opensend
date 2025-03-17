import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { MetricType } from "@/modules/dashboard/types/dashboard";
import { METRIC_TYPE_CONFIG } from "@/modules/dashboard/utils/definitions";

export default function StepConfigWidgetMeta({
  qty,
  type,
}: {
  qty: number;
  type: MetricType;
}) {
  const metric = METRIC_TYPE_CONFIG[type || 'IDENTITIES_PROVIDED'];
  return (
    <Card className="shadow-none p-0 overflow-hidden">
      <CardContent className="py-3 flex flex-col justify-start items-stretch gap-2">
        <CardTitle className="text-accent-foreground opacity-50 uppercase text-sm">{metric?.title}</CardTitle>
        <div className="flex flex-row justify-start items-center gap-2">
          {metric?.icon && <metric.icon size={24} className="text-primary fill-lime-400" />}{" "}
          <strong>{qty}</strong>
        </div>
      </CardContent>
      <CardContent className="bg-secondary py-3">
        <CardDescription>{metric?.description}</CardDescription>
      </CardContent>
    </Card>
  );
}
