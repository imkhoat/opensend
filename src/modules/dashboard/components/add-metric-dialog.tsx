import { useDispatch, useSelector } from "react-redux";
import {
  toogleModal,
  addNewWidget,
} from "@/modules/dashboard/store/dashboard-slice";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import StepConfigWidget from "@/modules/dashboard/components/step-config-widget";
import StepSelectWidgetType from "@/modules/dashboard/components/step-select-widget-type";

export default function AddMetric() {
  const isOpen = useSelector((state) => state.dashboard.modalState);
  const dispatch = useDispatch();

  const [modalStep, setModalStep] = useState<"SELECT_TYPE" | "CONFIG_METRIC">(
    "SELECT_TYPE"
  );

  function addNewMetric() {
    dispatch(addNewWidget());
    dispatch(toogleModal());
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => dispatch(toogleModal())}>
      <DialogTitle></DialogTitle>
      <DialogContent className="w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] max-w-screen max-h-screen">
        {modalStep === "SELECT_TYPE" ? (
          <StepSelectWidgetType
            onBack={() => dispatch(toogleModal())}
            onNext={() => setModalStep("CONFIG_METRIC")}
          />
        ) : (
          <StepConfigWidget
            onBack={() => setModalStep("SELECT_TYPE")}
            onNext={() => addNewMetric()}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
