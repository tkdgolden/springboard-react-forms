import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Box from "../Box";
import { useState } from "react";

describe("Box", () => {
    // smoketest
    test("renders", () => {
        render(<Box />);
        const title = screen.getByText("x", { exact: false });
        expect(title.textContent).toBe("x");
    });

    // snapshot
    test("hasn't changed", () => {
        const {asFragment} = render(<Box />);
        expect(asFragment()).toMatchSnapshot();
    });
});