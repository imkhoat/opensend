import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSelector } from "react-redux";
import StepConfigWidgetMeta from "@/modules/dashboard/components/step-config-widget-meta";
import StepConfigWidgetType from "@/modules/dashboard/components/step-config-widget-type";
import StepConfigWidgetContent from "@/modules/dashboard/components/step-config-widget-content";

export default function StepConfigWidget({ onBack }: { onBack: () => void }) {
  const activeMetric = useSelector((state) => state.dashboard.activeMetric);
  return (
    <Card className="shadow-none border-none w-full h-full flex flex-col justify-start items-stretch">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Configure widget</CardTitle>
        <CardDescription>
          Add a title and select data to display on the overview page
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 lg:col-span-7">
          <StepConfigWidgetMeta
            qty={activeMetric?.meta?.value || 0}
            type={activeMetric?.type}
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-start items-stretch gap-4">
          <StepConfigWidgetType type={activeMetric?.type} />
          <StepConfigWidgetContent />
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-between items-center gap-4">
        <Button
          variant="outline"
          size="lg"
          className="flex-grow"
          onClick={onBack}
        >
          Back
        </Button>
        <Button
          className="flex-grow"
          size="lg"
          type="submit"
          form="step-config-widget-content"
        >
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}
