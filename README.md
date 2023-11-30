# Get Daily AoC Input

This is a simple script to download the input for the [Advent of Code](https://adventofcode.com/) challenge.

To install all packages run:

```bash
npm install
```

You need to have the session cookie as environment variable. For example in an `.env` file as `SESSION_COOKIE`.  
You can find the session cookie in the browser developer tools while you are logged in and reloaded the Advent of Code page.
Then under the Application tab you can find the cookie under Storage > Cookies > adventofcode.com > session.

As a final step for each day just copy pasta 🍝 the code from the [day1.js](./day1.js) file and change the parameter for the function with the corresponding day.

To run the script for a specific day run

```bash
node day1.js
```

with the corresponding file.

Have fun and good coding!