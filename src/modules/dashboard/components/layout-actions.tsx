import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/modules/dashboard/store/dashboard-slice";

export function LayoutActions() {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(toggleModal())}>Add new metric</Button>
    </div>
  )
}