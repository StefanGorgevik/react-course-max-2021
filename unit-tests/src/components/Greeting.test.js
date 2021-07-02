import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello world", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //assert

    const helloWorldElement = screen.getByText("Hello world", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Changed! if the button was clicked", () => {
    //arrange
    render(<Greeting />);

    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' is hidden if the button was clicked", () => {
    //arrange
    render(<Greeting />);

    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
