# Emoji Translator

> This project involves working with HTML `input` elements, including text inputs and radio check buttons. In the final application, users can input text, select one of the radio options, and click 'submit'. Depending on the selected radio button, the application will perform a specific calculation and display the result below.

## Project Overview

#### Basic Structure

- Start by querying the submit button on the page using its ID.
- Add an event listener function to the submit button. You can use either an anonymous inline function or a named function. All the code for this application is placed within this function, as it only takes action when the user clicks the submit button.

#### First Feature: `encode`

- Begin with the "encode" feature.
- Query the input box with the ID `translator-input` and store its value in a variable.
- Locate the `<h1>` element with the ID `results` in the HTML, where the output will be displayed. Query this element and save it to a variable.
- Set the `.innerText` of this `<h1>` element to the result obtained by passing the input to the `encode` function. Note that the `encode` function is globally available because it is sourced first in your HTML. You can find it at the bottom of the file, among many script tags.
- Test the application by typing something into the input box and clicking submit. You should see an emoji for each letter you entered.

#### Radio Buttons

If you are not familiar with the term, "radio buttons" are mutually exclusive buttons, with one for each feature of the application.

- Determine which radio button is checked, and access its "value" using the `.value` property. For the "Encode" radio button, the value is `"encode."`
- With the value of the selected radio button, you will know which translation function to apply to the user's input text. For example, if the value is `"encode,"` execute the `encode()` function (defined in `encode.js`). Apply the `madlib()` function (defined in `madlib.js)` if the value is `"madlib,"` and so on.
- This approach works for `encode,` `translate,` and `madlib.` However, unique functionality is implemented for `search` and `random.`

#### Search

The search feature operates differently from the previous three translation methods.

- Instead of returning the output ready for display, the `search()` function returns an array of objects, each containing an emoji that matches the search criteria. Use `console.log` to inspect the array and the objects within it.
- Instead of merely setting the `.innerText` of our `<h1 id="results">` to this array of objects, clear the current content of our `<h1 id="results">` output.
- Iterate through each object in the array returned by the `search()` function. For each emoji object in the array:
  - Retrieve the actual emoji from the `.symbol` attribute of each object.
  - Create a new DOM element (e.g., a `<p>` tag) and set the element's `.innerText` to be the emoji.
  - Append this new `<p>` element as a child of our `<h1 id="results">`.

If `search()` returns an empty array, display text indicating that no emojis were found.

For the search feature, display all emojis that match the search criteria, such as entering `corn` for unicorn and popcorn emojis or the letter "y" for eight emojis.

#### Random

The random feature selects a random translation (encode, madlib, translate, or search) and executes that functionality.

- Generate a random integer within a range equal to the number of translations (four). Use `Math.random()` to achieve this, as seen in the dice rolling assignment.
- Select a specific translation based on the random integer. For instance, if the random integer is 0, select encode; if it's 1, select translate, and so on.

#### Stretch Goals

- Modify the event listener to trigger when the user types something. Add the event listener to the input box, eliminating the need for the submit button. Determine the appropriate event for this feature.
- Add user help text to explain the functionality of the five features. Include a toggle to show or hide the help text based on user preference.

  - Create a class to make an element invisible, setting the `display` property to `none.`
  - Create a `<ul>` element near the top of the page, with an `<li>` for each feature, explaining its purpose. Assign the class to the `<ul,` causing it to disappear and shift other content.
  - Place an `<a>` tag (with a link that goes nowhere) above the `<ul,` which can be styled as a button or differently. Give it an ID of your choice.
  - Set up an event listener for the `<a>` tag to activate when clicked.
  - Inside the event listener function, query your `<ul>` and save it as a variable.
  - Check if it has the class responsible for hiding elements in your CSS using the `className` property. If it has the class, remove it; if not, add it.

You are now ready to implement these features!
