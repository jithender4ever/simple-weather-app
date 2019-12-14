import React from "react";
import { render } from "@testing-library/react";
import { HelloWorld } from "./HelloWorld";

describe("Hello world tests", () => {
  it("renders as expected", () => {
    const { queryByText } = render(<HelloWorld />);

    expect(queryByText(/Hello world/i)).not.toBeNull();
  });
});
