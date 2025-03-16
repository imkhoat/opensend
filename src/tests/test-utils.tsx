import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store"; // Đảm bảo đường dẫn đúng
import { ReactElement } from "react";

const customRender = (ui: ReactElement, options = {}) =>
  render(<Provider store={store}>{ui}</Provider>, options);

export * from "@testing-library/react";
export { customRender as render };