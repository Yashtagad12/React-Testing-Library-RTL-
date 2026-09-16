import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../src/components/Counter";

describe("Counter", () => {

    it("starts with count 0", () => {
        render(<Counter />);

        expect(screen.getByText("Count: 0")).toBeInTheDocument();

    });

    it("increments the count", async () => {
        const user = userEvent.setup();

        render(<Counter />);

        const Button = screen.getByRole("button", {
            name: "Increment"
        });

        await user.click(Button);

        expect(screen.getByText("Count: 1")).toBeInTheDocument();
    });

    it("decrements the count", async () => {
        const user = userEvent.setup();

        render(<Counter />);

        const Button = screen.getByRole("button", {
            name: "Decrement"
        });

        await user.click(Button);

        expect(screen.getByText("Count: -1")).toBeInTheDocument();
    });
});