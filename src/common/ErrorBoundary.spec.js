import React from "react";
import { render } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  const Bomb = () => {
    throw new Error();
  };

  it("renders as expected with default message", () => {
    const { queryByText, rerender } = render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>
    );

    rerender(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>
    );

    expect(
      queryByText(/Something went wrong!/, { exact: true })
    ).not.toBeNull();
  });

  it("renders as expected with provided message", () => {
    const { queryByText, rerender } = render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>
    );

    rerender(
      <ErrorBoundary message={"test"}>
        <Bomb />
      </ErrorBoundary>
    );

    expect(queryByText(/test/, { exact: true })).not.toBeNull();
  });

  it("does not render when there is no error", () => {
    const GoodGuy = () => <h1>Hi</h1>;

    const { queryByText, rerender } = render(
      <ErrorBoundary>
        <GoodGuy />
      </ErrorBoundary>
    );

    rerender(
      <ErrorBoundary message={"test"}>
        <GoodGuy />
      </ErrorBoundary>
    );

    expect(queryByText(/test/, { exact: true })).toBeNull();
  });
});
