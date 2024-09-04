import { render, screen } from "@testing-library/react";
import Tdd from "./Tdd";

test("Tdd renders correctly", () => {
  render(<Tdd />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Tdd renders correctly with a name", () => {
  render(<Tdd name="Tom" />);
  const textElement = screen.getByText(/hello tom/i);
  expect(textElement).toBeInTheDocument();
});
