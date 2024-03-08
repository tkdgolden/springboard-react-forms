import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import NewTodoForm from "../NewTodoForm";
import { useState } from "react";

describe("NewTodoForm", () => {
    // smoketest
    test("renders", () => {
        render(<NewTodoForm />);
        const title = screen.getByText("Task", { exact: false });
        expect(title.textContent).toBe("Task: ");
    });

    // snapshot
    test("hasn't changed", () => {
        const { asFragment } = render(<NewTodoForm />);
        expect(asFragment()).toMatchSnapshot();
    });

    test("can input task", function () {
        const { getByLabelText, queryByText } = render(<NewTodoForm />);

        // default
        const taskInput = getByLabelText("Task:");
        expect(taskInput.value).toBe("");

        // fill out the form
        fireEvent.change(taskInput, { target: { value: "gym" } });

        // changed
        expect(taskInput.value).toBe("gym");
    });

});