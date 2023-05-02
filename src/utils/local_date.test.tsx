import { render } from "@testing-library/react";
import local_date from "./local_date";

describe("local_date function", () => {
  it("should return the same value from the same input", () => {
    const { container } = render(
      <span>{local_date("2023-04-13T17:57:36.397Z")}</span>
    );

    expect(local_date("2023-04-13T17:57:36.397Z")).toBe("Jumat, 14 April 2023");

    expect(local_date("2023-04-14T17:57:36.397Z")).toBe("Sabtu, 15 April 2023");

    expect(local_date("2023-04-13T17:57:36.397Z")).toBe("Jumat, 14 April 2023");

    // screen.debug();
    // expect(container).toMatchSnapshot();
  });

  it("should handle string parameter", () => {
    expect(local_date("2023-04-13T17:57:36.397Z")).toBe("Jumat, 14 April 2023");
  });

  it("should handle date parameter", () => {
    expect(local_date(new Date(2023, 6, 21))).toBe("Jumat, 21 Juli 2023");
  });
});
