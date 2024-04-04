import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import App from "../App";

describe("element list", async () => {
  //wait for it to render at first
  it("should add to the list", async () => {
    const { getByTitle, getByTestId } = render(<App />);

    await waitFor(() => {
      fireEvent.click(getByTitle("add-button"));
    });

    const named = screen.getByTestId("name").querySelector("input");
    expect(named).toBeInTheDocument();
    fireEvent.change(named!, { target: { value: "marbleium" } });
    expect(named?.value, "input changed").toBe("marbleium");

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
    await waitFor(() => {
      fireEvent.click(getByTestId("submit"));
    });

    expect(getByTitle("marbleium")).toBeInTheDocument();
  });

  it("should delete an element", async () => {
    const { getAllByText, getByTitle, queryByTitle } = render(<App />);
    let delete_buttons;
    await waitFor(async () => {
      delete_buttons = getAllByText("Delete");
    });

    expect(getByTitle("Ununennium")).toBeInTheDocument();

    // console.log(getByTitle("Ununennium"));
    fireEvent.click(delete_buttons![0]);

    expect(queryByTitle("Ununennium")).not.toBeInTheDocument();

    console.log(delete_buttons!.length);
    console.log(getAllByText("Delete").length);

    expect(delete_buttons!.length).not.toEqual(getAllByText("Delete").length);
    // expect(getByTitle("Ununennium")).not.toBeVisible();
  });
});
