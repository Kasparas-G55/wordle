import { mount } from "@vue/test-utils";
import Keyboard from "@/components/Keyboard.vue";
import { it, expect } from "vitest";
import { describe } from "node:test";

describe("keyboard component", () => {
  it("should render 3 rows of keys", () => {
    const keyboard = mount(Keyboard).get("#keyboard");

    expect(keyboard.element.children.length).toBe(3);
  });
});
