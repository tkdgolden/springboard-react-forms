import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import NewBoxForm from "../NewBoxForm";
import { useState } from "react";
import * as matchers from '@testing-library/jest-dom/matchers'

console.log(matchers);

describe("NewBoxForm", () => {
  // smoketest
  test("renders", () => {
    render(<NewBoxForm />);
    const title = screen.getByText("color", { exact: false });
    expect(title.textContent).toBe("Color: ");
  });

  // snapshot
  test("hasn't changed", () => {
    const {asFragment} = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
  });


  it("can input color", function() {
    const { getByLabelText, queryByText } = render(<NewBoxForm />);
  
    // default
    const colorInput = getByLabelText("Color:");
    expect(colorInput.value).toBe("");
  
    // fill out the form
    fireEvent.change(colorInput, { target: { value: "blue" }});
  
    // changed
    expect(colorInput.value).toBe("blue");
  });

  it("can input height", function() {
    const { getByLabelText, queryByText } = render(<NewBoxForm />);
  
    // default
    const heightInput = getByLabelText("Height:");
    expect(heightInput.value).toBe("");
  
    // fill out the form
    fireEvent.change(heightInput, { target: { value: "120" }});
  
    // changed
    expect(heightInput.value).toBe("120");
  });

  it("can input width", function() {
    const { getByLabelText, queryByText } = render(<NewBoxForm />);
  
    // default
    const widthInput = getByLabelText("Width:");
    expect(widthInput.value).toBe("");
  
    // fill out the form
    fireEvent.change(widthInput, { target: { value: "80" }});
  
    // changed
    expect(widthInput.value).toBe("80");
  });


});