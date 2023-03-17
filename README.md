# Description

All files which can be edited during your task. You are free to add any number of files as you please.

# Folders
* / (Project Root)
    * laureates.html
    * README.md
    * package.json
    * webpack.config.js
* /assets (Compiles and public assets)
    * /images
    * /main.js
    * /style.css
* /src (Source)
    * /sass
        * main.scss
    * /js
        * index.js
      
# Tasks
1. Use the API supplied by https://www.nobelprize.org to populate the page with the correct data.
2. Adjust the colors of the pagination, so they fit with the dark themed table and navbar. 
3. Make sure the primary color(currently blue) is the same shade of green as the Checkmk icon used in the navbar
4. Add a buttons to toggle between a light and dark themed version of the page

# Expected result
When the laureates.html page is opened the table should be populated with the 30 Nobel Prize Laureates, sorted ascending alphabetically.

The pagination on the bottom should be working. Clicking on the second page of the pagination should load entries 30-59. Clicking on next should load the next 30 entries.

Positioned above the table you will find buttons to sort and filter the results, please make sure they work as intended.

# Additional information
* [Nobelprize](https://www.nobelprize.org/about/developer-zone-2/)
* [SwaggerHub](https://app.swaggerhub.com/apis/NobelMedia/NobelMasterData/2.1)