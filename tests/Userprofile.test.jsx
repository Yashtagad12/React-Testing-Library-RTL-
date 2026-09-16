import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Userprofile from "../src/components/Userprofile";

describe("Userprofile", () => {
    it("displays user information", () => {
        render(<Userprofile name="Yash" email="tagadyash12@gmail.com" role="Developer" />);

        expect(screen.getByRole("heading", { name: "Yash" })).toBeInTheDocument();

        expect(screen.getByText("tagadyash12@gmail.com")).toBeInTheDocument();

        expect(screen.getByText("Role: Developer")).toBeInTheDocument();
    });
});