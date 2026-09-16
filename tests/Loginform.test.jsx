import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Loginform from "../src/components/Loginform";

describe("Loginform", () => {

    it("renders email and password fields", () => {

        render(<Loginform />);

        expect(screen.getByRole("textbox", { name: "Email:" })).toBeInTheDocument();
        expect(screen.getByLabelText("Password:")).toBeInTheDocument();
    });

    it("Shows validation message when fields are empty", async () => {

        const user = userEvent.setup();

        render(<Loginform />);

        const LoginButton = screen.getByRole("button", { name: "Login" });

        await user.click(LoginButton);

        expect(screen.getByText("Please fill in all fields")).toBeInTheDocument();
    });

    it("Shoes success message when fields are filled", async () => {

        const user = userEvent.setup();

        render(<Loginform />);

        const emailInput = screen.getByRole("textbox", { name: "Email:" });

        const passwordInput = screen.getByLabelText("Password:");

        await user.type(emailInput, "test@example.com");
        await user.type(passwordInput, "password123");

        await user.click(screen.getByRole("button", { name: "Login" }));

        expect(screen.getByText("Login Successful!")).toBeInTheDocument();
    });
});
