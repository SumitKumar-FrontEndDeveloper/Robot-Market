import React from "react";
import { ProductList } from "./index";
import { render, fireEvent } from "@testing-library/react";

describe("Click Add To cart button", () => {
  it("onClick invokes function", () => {
    const onClickMock = jest.fn();
    const { getByTestId, debug } = render(
      <button onClick={onClickMock} data-testid={"btn-item-add"} />
    );
    const button = getByTestId("btn-item-add");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
