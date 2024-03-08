import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import TodoList from "../TodoList";
import { useState } from "react";

describe("TodoList", () => {
    // smoketest
    test("renders", () => {
        render(<TodoList />);
        const title = screen.getByText("List", { exact: false });
        expect(title.textContent).toBe("To Do List");
    });

    // snapshot
    test("hasn't changed", () => {
        const {asFragment} = render(<TodoList />);
        expect(asFragment()).toMatchSnapshot();
    });

    
    test("submits new task", function () {
        const { getByLabelText, queryByText } = render(<TodoList />);

        // default
        const taskInput = getByLabelText("Task:");
        const submitButton = queryByText("Enter")

        // fill out the form
        fireEvent.change(taskInput, { target: { value: "dishes" } });
        fireEvent.click(submitButton);

        // new item
        expect(queryByText("dishes")).toBeInTheDocument();
    });

    test("resets on submit", function () {
        const { getByLabelText, queryByText } = render(<TodoList />);

        // default
        const taskInput = getByLabelText("Task:");
        const submitButton = queryByText("Enter")

        // fill out the form
        fireEvent.change(taskInput, { target: { value: "dishes" } });
        fireEvent.click(submitButton);

        // reset
        expect(taskInput.value).toBe("");
    });

    test("deletes task", function () {
        const { getByLabelText, queryByText } = render(<TodoList />);

        // default
        const task = queryByText("Tada");
        const deleteButton = queryByText("X")
        expect(task).toBeInTheDocument();

        // click delete
        fireEvent.click(deleteButton);

        // gone
        expect(task).not.toBeInTheDocument();
    });
});