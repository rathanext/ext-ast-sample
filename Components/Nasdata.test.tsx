import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";

import Nasadata from "./Nasadata";

const route = {
  params: {
    data: [
      {
        name: "Name",
        nasa_jpl_url: "https://test.com/v2",
        is_potentially_hazardous_asteroid: true,
      },
    ],
  },
};

describe("CountryDetails Screen Test", () => {
  test("Crenders snapshot as expected", () => {
    const home = renderer.create(<Nasadata route={route} />);
    let tree = home.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Check Texts", () => {
    const app = renderer.create(<Nasadata route={route} />);
    const elementList = app.root.findAllByType("Text");
    expect(elementList.length).toBe(4);
  });

  test("Check Views", () => {
    const app = renderer.create(<Nasadata route={route} />);
    const elementList = app.root.findAllByType("View");
    expect(elementList.length).toBe(3);
  });
  test("check text content", () => {
    const { getByTestId } = render(<Nasadata route={route} />);
    expect(getByTestId("name").children[0]).toBe("Go Back");
  });
  //   it("renders without crashing", () => {
  //     const home = renderer.create(<Nasadata route={route} />);
  //     expect(home).toBeTruthy();
  //   });
});
