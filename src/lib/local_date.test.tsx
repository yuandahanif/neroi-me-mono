import { expect, it, describe } from "vitest";
import local_date from "./local_date";

describe("local_date function", () => {
  it("should return the same value from the same input", () => {
    expect(local_date("2023-04-13T17:57:36.397Z")).toBe(
      "Jumat, 14 April 2023 pukul 00.57.36 Waktu Indonesia Barat"
    );

    expect(
      local_date("2023-04-14T17:57:36.397Z", { timeStyle: "medium" })
    ).toBe("Sabtu, 15 April 2023 pukul 00.57.36");

    expect(local_date("2023-04-13T17:57:36.397Z")).toBe(
      "Jumat, 14 April 2023 pukul 00.57.36 Waktu Indonesia Barat"
    );

    // screen.debug();
    // expect(container).toMatchSnapshot();
  });

  it("should handle string parameter", () => {
    expect(
      local_date("2023-04-13T17:57:36.397Z", {
        dateStyle: "full",
        timeStyle: "medium",
      })
    ).toBe("Jumat, 14 April 2023 pukul 00.57.36");
  });

  it("should handle date parameter", () => {
    expect(local_date(new Date(2023, 6, 21))).toBe(
      "Jumat, 21 Juli 2023 pukul 00.00.00 Waktu Indonesia Barat"
    );
  });
});
