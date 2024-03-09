import type { DOMWrapper } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import Wordle from "@/components/Wordle.vue";
import { it, expect, describe, beforeEach } from "vitest";
import { GUESS_WORD, WORD_SIZE } from "@/settings";

describe("wordle app", () => {
  let wrapper: ReturnType<typeof mount<typeof Wordle>>;

  beforeEach(() => {
    document.body.innerHTML = "<div id='app'></div>";
    wrapper = mount(Wordle, {
      attachTo: "#app"
    });
  });

  describe("player input", () => {
    let input: DOMWrapper<HTMLInputElement>;
    let button: DOMWrapper<HTMLButtonElement>;

    beforeEach(() => {
      input = wrapper.find<HTMLInputElement>("[data-test='input']");
      button = wrapper.find<HTMLButtonElement>("[data-test='a']");
    });

    it("should remain in focus", async () => {
      expect(input.attributes("autofocus")).not.toBeUndefined();

      await input.trigger("blur");
      expect(document.activeElement).toEqual(input.element);
    });

    it("should input letter when pressing a button", async () => {
      await button.trigger("click");

      expect(input.element.value).toEqual("a");
    });

    it(`should not add letter if input contains greater or equal than ${WORD_SIZE} letters`, async () => {
      expect(input.attributes("maxlength")).toBeCloseTo(WORD_SIZE);

      await input.setValue(GUESS_WORD);
      await button.trigger("click");

      expect(input.element.value.length).toEqual(5);
    });

    it("renders guess on the board", async () => {
      await input.setValue("words");
      expect(wrapper.findAll("[data-test='words']")).toHaveLength(1);

      await input.trigger("keypress", { key: "Enter" });
      await input.setValue("words");
      expect(wrapper.findAll("[data-test='words']")).toHaveLength(2);
    });
  });
});
