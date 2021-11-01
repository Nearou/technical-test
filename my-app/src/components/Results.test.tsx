import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { Results } from "./Results";
import { Ismovies } from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("Results Movies Search", () => {
  it("renders correctly the component", () => {
    const movies: Ismovies[] = [];
    const loading = false;
    const error = "";
    shallow(<Results movies={movies} error={error} loading={loading} />);
  });

  describe("When component receive movies results", () => {
    it("Should render results after search", () => {
      const movies: Ismovies[] = [
        {
          Title: "test",
          Year: 2010,
          imdbID: "test",
          Type: "test",
          Poster: "test",
        },
        {
          Title: "test2",
          Year: 2010,
          imdbID: "test2",
          Type: "test2",
          Poster: "test2",
        },
      ];
      const loading = false;
      const error = "";
      const wrapper = shallow(
        <Results movies={movies} error={error} loading={loading} />
      );
      expect(wrapper.find("CardMovie").length).toEqual(2);
      expect(wrapper.find("p").length).toEqual(0);
    });
  });

  describe("When component receive error result", () => {
    it("Should render error", () => {
      const movies: Ismovies[] = [];
      const error: string = "No movies Found";
      const loading = false;
      const wrapper = shallow(
        <Results movies={movies} error={error} loading={loading} />
      );
      expect(wrapper.find("CardMovie").length).toEqual(0);
      expect(wrapper.find("p").text()).toEqual("No movies Found");
    });
  });
});
