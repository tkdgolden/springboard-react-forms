import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BoxList from "../BoxList";
import { useState } from "react";

describe("BoxList", () => {
    // smoketest
    test("renders", () => {
        render(<BoxList />);
        const title = screen.getByText("List", { exact: false });
        expect(title.textContent).toBe("Box List");
    });

    // snapshot
    test("hasn't changed", () => {
        const { asFragment } = render(<BoxList />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("resets on submit", function () {
        const { getByLabelText, queryByText } = render(<BoxList />);

        // default
        const colorInput = getByLabelText("Color:");
        expect(colorInput.value).toBe("");
        const heightInput = getByLabelText("Height:");
        expect(heightInput.value).toBe("");
        const widthInput = getByLabelText("Width:");
        expect(widthInput.value).toBe("");
        const submitButton = queryByText("Add!")

        // fill out the form
        fireEvent.change(colorInput, { target: { value: "blue" } });
        fireEvent.change(heightInput, { target: { value: "120" } });
        fireEvent.change(widthInput, { target: { value: "80" } });
        fireEvent.click(submitButton);

        // reset
        expect(colorInput.value).toBe("");
        expect(heightInput.value).toBe("");
        expect(widthInput.value).toBe("");
    });

    it("nothing happens with empty field submit attempt", function () {
        const { getByLabelText, queryByText } = render(<BoxList />);

        // default
        const colorInput = getByLabelText("Color:");
        expect(colorInput.value).toBe("");
        const heightInput = getByLabelText("Height:");
        expect(heightInput.value).toBe("");
        const widthInput = getByLabelText("Width:");
        expect(widthInput.value).toBe("");
        const submitButton = queryByText("Add!")

        // fill out the form
        fireEvent.change(colorInput, { target: { value: "blue" } });
        fireEvent.change(widthInput, { target: { value: "80" } });
        fireEvent.click(submitButton);

        // reset
        expect(colorInput.value).toBe("blue");
        expect(heightInput.value).toBe("");
        expect(widthInput.value).toBe("80");
    });

    it("renders box on correct submit", function () {
        const { getByLabelText, queryByText, getAllByText } = render(<BoxList />);

        // default
        const colorInput = getByLabelText("Color:");
        const heightInput = getByLabelText("Height:");
        const widthInput = getByLabelText("Width:");
        const submitButton = queryByText("Add!")
        expect(getAllByText("x").length).toBe(1);

        // fill out the form
        fireEvent.change(colorInput, { target: { value: "blue" } });
        fireEvent.change(heightInput, { target: { value: "120" } });
        fireEvent.change(widthInput, { target: { value: "80" } });
        fireEvent.click(submitButton);

        // added div
        const deleteButtons = getAllByText("x");
        expect(deleteButtons.length).toBe(2);
    });

    it("deletes box", function () {
        const { getByLabelText, queryByText, getAllByText } = render(<BoxList />);

        // default
        const colorInput = getByLabelText("Color:");
        const heightInput = getByLabelText("Height:");
        const widthInput = getByLabelText("Width:");
        const submitButton = queryByText("Add!")
        expect(getAllByText("x").length).toBe(1);

        // fill out the form
        fireEvent.change(colorInput, { target: { value: "blue" } });
        fireEvent.change(heightInput, { target: { value: "120" } });
        fireEvent.change(widthInput, { target: { value: "80" } });
        fireEvent.click(submitButton);
        fireEvent.click(getAllByText("x")[0]);

        // added div
        const deleteButtons = getAllByText("x");
        expect(deleteButtons.length).toBe(1);
    });
});