import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";
import "@testing-library/jest-dom";

import Homepage from "./Home";
import Home from "./Homestack";

describe("CountryDetails Screen Test", () => {
  test("Crenders snapshot as expected", () => {
    const home = renderer.create(<Homepage />);
    let tree = home.toJSON();
    expect(tree).toMatchSnapshot();
  });
  // test("checking button", () => {
  //   const { getByTestId } = render(<Homepage />);
  //   expect(getByTestId("submit")).toBeCalled();
  // });
  // test("checking random button", () => {
  //   const { getByTestId } = render(<Homepage />);

  //   expect(getByTestId("submit")).toBeDisabled();
  // });

  test("check text content", () => {
    const { getByTestId } = render(<Homepage />);
    expect(getByTestId("randomText").children[0]).toBe("Random");
  });

  test("check text content", () => {
    const { getByTestId } = render(<Homepage />);
    expect(getByTestId("submitText").children[0]).toBe("Submit");
  });

  it("renders without crashing", () => {
    const home = renderer.create(<Homepage />);
    expect(home).toBeTruthy();
  });
  test("Check detail page run without crashes1", () => {
    const app = renderer.create(<Homepage />);
    const elementList = app.root.findAllByType("Text");
    expect(elementList.length).toBe(2);
  });

  test("Check detail page run without crashes1", () => {
    const app = renderer.create(<Homepage />);
    const elementList = app.root.findAllByType("View");
    expect(elementList.length).toBe(5);
  });

  test("Check detail page run without crashes1", () => {
    const app = renderer.create(<Homepage />);
    const elementList = app.root.findAllByType("TextInput");
    expect(elementList.length).toBe(1);
  });

  // test("Check Asteroid", () => {
  //   const { getByText, getAllByText } = render(<Homepage />);

  //   fireEvent.changeText(getByText("Enter Asteroid ID"), "2007234");
  //   fireEvent.press(getByText("Add the item to list"));

  //   const bananaElements = getAllByText("banana");
  //   expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list
  // });
});
