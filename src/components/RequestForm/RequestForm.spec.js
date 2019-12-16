import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { RequestForm } from "./RequestForm";

describe("RequestForm Tests", () => {
  it("renders form as expected", () => {
    const { queryByText, getByLabelText } = render(<RequestForm />);

    expect(queryByText(/Enter a US zipcode/i)).not.toBeNull();

    expect(getByLabelText(/zipcode/i).value).toEqual("");

    expect(queryByText(/Submit/)).not.toBeNull();
  });

  it("changes the input value as expected", () => {
    const { getByLabelText } = render(<RequestForm />);

    const zipcodeInput = getByLabelText(/zipcode/i);
    fireEvent.change(zipcodeInput, { target: { value: 12345 } });
    expect(zipcodeInput.value).toEqual("12345");
  });

  it("submits the input value as expected", () => {
    const handleSubmission = jest.fn();

    const { getByText } = render(
      <RequestForm onRequestSubmit={handleSubmission} />
    );

    const submitButton = getByText(/submit/i);
    fireEvent.click(submitButton.parentElement);
    expect(handleSubmission).toHaveBeenCalledTimes(1);
  });
});
