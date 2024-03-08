import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import Todo from "../TodoList";
import { useState } from "react";

describe("Todo", () => {
    // smoketest
    test("renders", () => {
        render(<Todo />);
        const title = screen.getByText("Tada", { exact: false });
        expect(title.textContent).toBe("Tada");
    });

    // snapshot
    test("hasn't changed", () => {
        const {asFragment} = render(<Todo />);
        expect(asFragment()).toMatchSnapshot();
    });
});