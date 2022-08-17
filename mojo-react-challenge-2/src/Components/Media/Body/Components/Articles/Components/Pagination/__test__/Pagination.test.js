import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Pagination from "../Pagination";

test("should render toggleGroup component", () => {
  render(<Pagination page={1} />);
  const previousPageButton = screen.getByTestId("media");
  expect(previousPageButton).not.toHaveClass("active");
});
