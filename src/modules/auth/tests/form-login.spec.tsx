import { expect, test } from "vitest";
import { render, screen } from "@/tests/test-utils"; // Import từ test-utils
import FormLogin from "@/modules/auth/components/form-login.tsx";

test("[form-login] check if component render correct", () => {
  render(<FormLogin />);
  expect(screen.getByTestId("auth-components-form-login")).toBeTruthy();
});