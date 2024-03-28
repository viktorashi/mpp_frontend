import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import { it, describe, expect } from "vitest";
import App from "../App";
import AppRouter from "../router";
import elementList from "../service/ElementApi";

describe("element list", async () => {
  const { getByTitle, getByText } = render(<App />);

  //wait for it to render at first
  it("adds to the list", async () => {
    await waitFor(() => {
      fireEvent.click(getByTitle("add-button"));
    });

    const named = screen.getByTestId("name").querySelector("input");
    expect(named).toBeInTheDocument();
    fireEvent.change(named!, { target: { value: "slobozium" } });
    expect(named?.value, "input changed").toBe("slobozium");

    const summary = screen.getByTestId("summary").querySelector("input");
    expect(summary).toBeInTheDocument();
    fireEvent.change(summary!, { target: { value: "bun pentru ceapa" } });
    expect(summary?.value, "input changed").toBe("bun pentru ceapa");

    const appearance = screen.getByTestId("appearance").querySelector("input");
    expect(appearance).toBeInTheDocument();
    fireEvent.change(appearance!, { target: { value: "stii tu cum" } });
    expect(appearance?.value, "input changed").toBe("stii tu cum");

    const discovered_by = screen
      .getByTestId("discovered-by")
      .querySelector("input");
    expect(discovered_by).toBeInTheDocument();
    fireEvent.change(discovered_by!, { target: { value: "Badea Ioan" } });
    expect(discovered_by?.value, "input changed").toBe("Badea Ioan");

    const named_by = screen.getByTestId("named-by").querySelector("input");
    expect(named_by).toBeInTheDocument();
    fireEvent.change(named_by!, { target: { value: "Dorel Adrian" } });
    expect(named_by?.value, "input changed").toBe("Dorel Adrian");

    const phase = screen.getByTestId("phase").querySelector("input");
    expect(phase).toBeInTheDocument();
    fireEvent.change(phase!, { target: { value: "plasma" } });
    expect(phase?.value, "input changed").toBe("plasma");

    const category = screen.getByTestId("category").querySelector("input");
    expect(category).toBeInTheDocument();
    fireEvent.change(category!, { target: { value: "ceva metal nu stiu" } });
    expect(category?.value, "input changed").toBe("ceva metal nu stiu");

    const url = screen.getByTestId("image-url").querySelector("input");
    expect(url).toBeInTheDocument();
    fireEvent.change(url!, {
      target: {
        value:
          "https://video-images.vice.com/articles/6374b7b2b58b1ca5ef27c079/lede/1668594100659-oras-provincie-slobozia.jpeg?crop=1xw:1xh;center,center&resize=1200:*",
      },
    });
    expect(url?.value, "input changed").toBe(
      "https://video-images.vice.com/articles/6374b7b2b58b1ca5ef27c079/lede/1668594100659-oras-provincie-slobozia.jpeg?crop=1xw:1xh;center,center&resize=1200:*"
    );
    fireEvent.click(getByText("Submit"));

    elementList.push({
      number: Math.floor(Math.random() * 1000) + 119,
      image: {
        url: "https://video-images.vice.com/articles/6374b7b2b58b1ca5ef27c079/lede/1668594100659-oras-provincie-slobozia.jpeg?crop=1xw:1xh;center,center&resize=1200:*",
      },
      name: "slobozium",
      appearance: "stii tu cum",
      summary: "bun pentru ceapa",
      discovered_by: "Badea Ioan",
      named_by: "Dorel Adrian",
      phase: "plasma",
      bohr_model_image:
        "https://video-images.vice.com/articles/6374b7b2b58b1ca5ef27c079/lede/1668594100659-oras-provincie-slobozia.jpeg?crop=1xw:1xh;center,center&resize=1200:*",
      category: "ceva metal nu stiu",
    });
    let container = null;
    //n-am inteles cum se foloseste asta sincer DAR MI-A IEFIT HOLY MOTHER OF FUCKK
    act(() => {
      container = render(<AppRouter init_vaules={elementList} />);
    });
    expect(container).toMatchSnapshot();
  });
});
