/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

beforeAll(() => {
  document.body.innerHTML = html;

  // Load and run the script once
  require("../index.js");

  // Fire DOMContentLoaded once so the event listener gets attached
  document.dispatchEvent(new Event("DOMContentLoaded"));
});

beforeEach(() => {
  // Clear the list before each test
  document.getElementById("item-list").innerHTML = "";
});

describe("Add Item Button", () => {
  test("adds a new <li> with 'New Item' when the button is clicked", () => {
    const button = document.getElementById("add-item");
    const list = document.getElementById("item-list");

    // the list starts empty
    expect(list.children.length).toBe(0);

    // simulate a click
    button.click();

    const items = list.querySelectorAll("li");
    expect(items.length).toBe(1);
    expect(items[0].textContent).toBe("New Item");
  });

  test("adds one more <li> for each additional click", () => {
    const button = document.getElementById("add-item");
    const list = document.getElementById("item-list");

    button.click();
    button.click();
    button.click();

    expect(list.querySelectorAll("li").length).toBe(3);
  });

  test("only adds <li> elements to the list", () => {
    const button = document.getElementById("add-item");
    const list = document.getElementById("item-list");

    button.click();

    expect(list.children[0].tagName).toBe("LI");
  });
});
/**
 * @jest-environment jsdom
 */

// Your code here!