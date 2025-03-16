import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import FormLogin from "@/modules/auth/components/form-login.tsx";

test("[form-login] check if component render correct", () => {
  render(<FormLogin />);
  expect(screen.getByTestId("auth-components-form-login")).toBeTruthy();
});