import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import Button from "../src/components/Button";

describe("Button", () => {
    it("renders button text", () => {
        render(<Button>Save</Button>);

        const button = screen.getByRole("button", {
            name: "Save"
        });

        expect(button).toBeInTheDocument();
    });

    it("calls onClick when clicked", async () => {
        const handleClick = vi.fn();

        const user = userEvent.setup();

        render(
            <Button onClick={handleClick}>
                Save
            </Button>
        );

        const button = screen.getByRole("button", {
            name: "Save"
        });

        await user.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});