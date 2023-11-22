import { render , screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us page", () => {

    render(<Contact/>);

    const heading = screen.getByRole("heading");


    // Assertion
    expect(heading).toBeInTheDocument();
});

test("Should load button inside Contact page", () => {

    render(<Contact/>);

    const button = screen.getByRole("button");
    //const button = screen.getByText("Submit");
    //const button = screen.getByText("Random");


    // Assertion
    expect(button).toBeInTheDocument();
});

test("Should load input inside Contact page", () => {

    render(<Contact/>);

    const inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
});