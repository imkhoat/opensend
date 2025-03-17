import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "@/modules/dashboard/store/dashboard-slice";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import StepConfigWidget from "@/modules/dashboard/components/step-config-widget";
import StepSelectWidgetType from "@/modules/dashboard/components/step-select-widget-type";

export default function AddMetric() {
  const isOpen = useSelector((state) => state.dashboard.modalState);
  const dispatch = useDispatch();

  const [modalStep, setModalStep] = useState<"SELECT_TYPE" | "CONFIG_METRIC">(
    "SELECT_TYPE"
  );

  useEffect(() => {
    if (!isOpen) {
      setModalStep("SELECT_TYPE");
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={() => dispatch(toggleModal())}>
      <DialogTitle></DialogTitle>
      <DialogDescription></DialogDescription>
      <DialogContent className="w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] max-w-screen max-h-screen">
        {modalStep === "SELECT_TYPE" ? (
          <StepSelectWidgetType
            onBack={() => dispatch(toggleModal())}
            onNext={() => setModalStep("CONFIG_METRIC")}
          />
        ) : (
          <StepConfigWidget onBack={() => setModalStep("SELECT_TYPE")} />
        )}
      </DialogContent>
    </Dialog>
  );
}
