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

export default function StepSelectWidgetType({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) {
  const activeMetric = useSelector((state) => state.dashboard.activeMetric);
  const dispatch = useDispatch();

  function handleNext() {
    if (!activeMetric || !activeMetric.type) return;
    dispatch(updateActiveMetric(activeMetric));
    onNext();
  }

  return (
    <Card className="shadow-none border-none w-full h-full flex flex-col justify-start items-stretch">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Add a metric </CardTitle>
        <CardDescription>
          Select a widget type to add to the overview page
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <strong>Overview</strong>
        <div className="flex flex-row justify-start items-stretch gap-4 mt-4">
          {Object.values(METRIC_TYPE_CONFIG).map((item) => (
            <Card
              className={`w-fit h-fit min-w-12 shadow-none cursor-pointer border-2 ${
                item.key === activeMetric?.type ? "border-primary" : ""
              }`}
              onClick={() =>
                dispatch(
                  updateActiveMetric({
                    ...activeMetric,
                    type: item.key,
                  })
                )
              }
            >
              <CardContent className="flex flex-col justify-center items-center gap-8 text-center">
                <img src={item.img} alt="Overview" />
                <CardTitle>{item.title}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-between items-center gap-4">
        <Button
          variant="outline"
          className="flex-grow"
          size="lg"
          onClick={onBack}
        >
          Cancel
        </Button>
        <Button
          className="flex-grow"
          size="lg"
          disabled={!activeMetric?.type}
          onClick={handleNext}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
