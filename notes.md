## Notes on what I did
1. **Setting up project**

  Set up with `gatsby new` in the desired working directory. This starts a
  git clone using the default gatsby starter.

  I want to start from scratch, just for learning purposes, so let's delete most
  of the current pages (i.e. `page-2.js` and `using-typescript.tsx`), images (i.e.
  `gatsby-astronaut.png` and `gatsby-icon.png`), and components (i.e. `header.js`,
  `image.js`, `layout.css`, `layout.js`, and `seo.js`).

  Within the `index.js` and `404.js`, deleted all the unused imports.

2. **Laying out skeleton of site**

    Goal here is to make a one-page portfolio site -- there is a Header, About banner,
    Research, Teaching, Service, Other, Contact, and then a Footer.

    Make a new component for each of these sections -- put a div and h1 in each initially.

    As these into the `index.js` file.

3. **Setting up Tailwind and Sass**

   First installed tailwindcss -- had issues getting it to work, but used installation
   [here](https://tailwindcss.com/docs/installation#post-css-7-compatibility-build) to
   get the version that was compatible with PostCSS7.
   ```shell
   npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
   ```

   Then installed Sass Gatsby plugin based on the Gatsby documentation
   [here](https://www.gatsbyjs.com/docs/sass/).
   ```shell
   npm install node-sass gatsby-plugin-sass
   ```

   Made a tailwind config file with built-in function in root folder.
   ```shell
   npx tailwindcss init
   ```

   Then need to add these to the `gatsby-config.js` file to load them in.
   ```js
   plugins: {
   resolve: `gatsby-plugin-sass`,
   options: {
     postCssPlugins: [
       require("tailwindcss"),
       require("./tailwind.config.js"),
       ],
     },
   },
   ```

   Last step is to make a `styles` directory in the `src` directory and make a
   `global.scss` stylesheet. Then import this into the `gatsby-browser.js` file.
   ```js
   import "./src/styles/global.scss"
   ```

   In the `global.scss` file, load in the Tailwind directives.
   ```CSS
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

   Tailwind is a large library, so recommended to purge classes that are not used.
   We can do this by modifying the `tailwind.config.js` file.
   ```js
   module.exports = {
      purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
      theme: {},
      variants: {},
      plugins: [],
    }
    ```

    When running gatsby develop, there seemed to be some issues with prop-types,
    so install this again.
    ```shell
    npm install prop-types
    ```

    Finally, there was an issues with node-sass, so change the version in the
    `node_modules/node-sass/package.json` to "4.14.1" and the version in the root
    `package.json` file to "^4.14.1" (based on Github issue [here](https://github.com/gatsbyjs/gatsby/issues/27754)).

4. **Changing Tailwind fonts and colours**

    Decided to use the Inter font family [here](https://rsms.me/inter/). There is
    a code block to import this into the `global.scss` file.
    ```CSS
    @import url('https://rsms.me/inter/inter.css');
    html { font-family: 'Inter', sans-serif; }
    @supports (font-variation-settings: normal) {
      html { font-family: 'Inter var', sans-serif; }
    }
    ```

    Then update the default tailwind font-family class to use Inter in the
    `tailwind.config.js` file. Need to import in `defaultTheme` since we are
    referencing for the backup font faces.
    ```js
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', ...defaultTheme.fontFamily.sans],
        },
      },
    },
    ```

    Also want to have a hover class for font weights, so add that to `tailwind.config.js` too.
    ```js
    variants: {
      extend: {
        fontWeight: ['hover', 'focus'],
      },
    },
    ```

    A similar process for extending the colours -- here I use a prefix of 'custom'
    to denote custom colours and then specify the exact colour afterwards. This way,
    you can use the same syntax for Tailwind classes (e.g. 'text-custom-green')
    ```js
    theme: {
      extend: {
        colors: {
          custom: {
            red: '#ED1C24',
            orange: '#F5821F',
            yellow: '#FCEE21',
            green: '#8DC63F',
            blue: '#24B9EC',
            purple: '#884196',
            pink: '#EC008C'
          },
        },
      },
    ```

5. **General formatting**

    Main breakpoint is at the medium size. Horizontal margins are set to 1.5rem (mx-6)
    in mobile and 3rem (mx-12) at larger sizes.

    To get smooth scrolling, used [this](https://chrisfitkin.github.io/gatsby-smooth-scroll-demo/) as
    a resource -- first need to install smooth-scroll...
    ```shell
    npm install smooth-scroll
    ```

    Then add it at the top of `index.js` so that it uses the smooth-scroll whenever
    it detects an id in the Link tags.
    ```js
    if (typeof window !== "undefined") {
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="#"]')
    }
    ```

6. **Setting up the header**

    First add a `<header>` tag and put content in -- Tailwind has a mobile-first
    design so start with that. Add a top `<div>` for name and links and then a
    bottom `<div>` for the drop down. Within the top `<div>` add a separate `<div>`
    for the name on the left side and a `<div>` for the links on the right side.
    Include an svg for a hamburger menu on the right side.

    Set states so dropdowns are hidden by default. Style using tailwind classes,
    with a right border on the name div. Icons are taken from [here](https://iconmonstr.com/).

    The collapse animation for the navbar is based on [this](https://stackoverflow.com/questions/60888133/why-is-my-react-tailwind-hamburger-menu-not-closing).
    Also added an overlay underneath and made sure to change states when the logo
    is pressed while menu is expanded. Also set up transitions on hover for nav
    items so that font weight changes smoothly.

7. **Setting up about section**

   Using a static query to take advantage of Gatsby Image -- used [this](https://www.youtube.com/watch?v=XiG8gYJ7DiI)
   and [this](https://www.gatsbyjs.com/docs/recipes/querying-data/#querying-data-with-the-staticquery-component)
   to better understand utility. Basically optimizes load times, especially across
   devices.

8. **Setting up content sections**

   Each content section is set up into 2 general section: title and content.
   When mobile, these all collapse into one column, but at larger sizes, laid out
   as roughly 3 columns.

   To get downloadable items (e.g. cv, poster, etc.), I set up a static query
   similar to above for each pdf.

   Don't forget to make a 404 page and set up the favicon. SEO component is pretty
   much the same one from the default Gatsby starter. For analytics, using the
   process from [here](https://aiki-developer.com/blog/gatsby-google-analytics).
