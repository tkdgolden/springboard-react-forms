import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../App";
import { useState } from "react";

describe("App", () => {
    // smoketest
    test("renders", () => {
        render(<App />);
        const title = screen.getByText("List", { exact: false });
        expect(title.textContent).toBe("To Do List");
    });

    // snapshot
    test("hasn't changed", () => {
        const {asFragment} = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });
});