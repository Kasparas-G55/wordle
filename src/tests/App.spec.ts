import { mount } from "@vue/test-utils";
import App from "../App.vue";
import { test, expect } from "vitest";

test("renders an app", () => {
  const app = mount(App);

  expect(app.text()).toBe("Worlde");
});
