import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { METRIC_TYPE_CONFIG } from "@/modules/dashboard/utils/definitions";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveMetric } from "@/modules/dashboard/store/dashboard-slice";

export default function StepConfigWidget({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) {
  const activeMetric = useSelector((state) => state.dashboard.activeMetric);
  const dispatch = useDispatch();

  return (
    <Card className="shadow-none border-none w-full h-full flex flex-col justify-start items-stretch">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Configure widget</CardTitle>
        <CardDescription>
          Add a title and select data to display on the overview page
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow grid grid-cols-12 gap-4">
        <div className="col-span-7">

        </div>
        <div className="col-span-5">

        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-between items-center gap-4">
        <Button variant="outline" size="lg" className="flex-grow" onClick={onBack}>
          Back
        </Button>
        <Button className="flex-grow" size="lg" onClick={onNext}>
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}
