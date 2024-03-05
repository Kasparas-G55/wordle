import type { DOMWrapper } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import Wordle from "@/components/Wordle.vue";
import { it, expect, describe, beforeEach } from "vitest";
import { WORD_SIZE } from "@/settings";

describe("wordle app", () => {
  const wordOfTheDay = "TESTS";
  let wrapper: ReturnType<typeof mount<typeof Wordle>>;

  beforeEach(() => {
    wrapper = mount(Wordle, { props: { wordOfTheDay, attempts: 0, guesses: [] } });
  });

  describe("player input", () => {
    let input: DOMWrapper<HTMLInputElement>;
    let button: DOMWrapper<HTMLButtonElement>;

    beforeEach(() => {
      input = wrapper.find<HTMLInputElement>("[test-id='input']");
      button = wrapper.find<HTMLButtonElement>("[test-id='a']");
    });

    it("should remain in focus", async () => {
      document.body.innerHTML = "<div id='app'></div>";
      wrapper = mount(Wordle, {
        props: { wordOfTheDay, attempts: 0, guesses: [] },
        attachTo: "#app"
      });

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

      await input.setValue(wordOfTheDay);
      await button.trigger("click");

      expect(input.element.value.length).toEqual(5);
    });

    it("should store guess in array when submitting a guess", async () => {
      await input.setValue("WORDS");
      await input.trigger("keypress", { key: "Enter" });

      const props = wrapper.props();

      expect(props.guesses).toContain("WORDS");
      expect(props.attempts).toEqual(1);
      expect(props.guesses.length).toEqual(2);
    });
  });
});
