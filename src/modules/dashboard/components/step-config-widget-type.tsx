import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { MetricType } from "@/modules/dashboard/types/dashboard";
import { METRIC_TYPE_CONFIG } from "@/modules/dashboard/utils/definitions";

export default function StepConfigWidgetType({ type }: { type: MetricType }) {
  const metric = METRIC_TYPE_CONFIG[type || 'IDENTITIES_PROVIDED'];
  return (
    <Card className="shadow-none p-0 overflow-hidden">
      <CardContent className="py-3 flex flex-col justify-start items-stretch gap-0">
        <CardTitle className="text-accent-foreground opacity-50 text-sm">
          Widget type
        </CardTitle>
        <div className="flex flex-row justify-start items-center gap-2">
          {metric?.title} - TEXT
        </div>
      </CardContent>
    </Card>
  );
}
