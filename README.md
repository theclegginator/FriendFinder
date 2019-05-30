# FriendFinder - Express API Dating Service
## Summary
FriendFinder is a fullstack application that runs Express-based server-side code alongside a Bootstrap frontend. Users are able to post a simplified profile consisting of a name, image (via URL), and an array of answers to 10 compatibility questions. Via the API routes that are used in the application, users can post their profile to the server and recieve a return of their best match from other users of the application based on their compatibility score. Please continue reading to learn more!

### Module Dependencies
The following Node modules are used (and are included in the package.json file):
* Express - used for server-side code to handle routing and requests.
* Path - used for working with file and directory paths.

### Basic Functionality: Complete the Survey and Find a Match
* Going to the homepage will show us a link to take the survey.
* Upon going to the survey, the user will fill out their name, a URL for their profile picture, and answer 10 compatibility questions.
  
![Screenshot](basic-operation.gif)

### Compatibility Logic
* When running bamazonManager.js, a list of a few options will show on the console.
* This feature will query the database and show the manager what is currently in stock.
  
![Screenshot](README_images/bamazonManager1.gif)

### Bamazon Manager Function 2: *View Low Inventory*
* This feature will query the database and show the manager any items that have a stock of less than 5 units available.
* If everything is properly stocked, the manager will be notified of that as well.

![Screenshot](README_images/bamazonManager2.gif)

### Bamazon Manager Function 3: *Add to Inventory*
* This feature will allow the manager to increase the inventory of an item already in stock.
* It will then report the new stock and ensure the database is updated.

![Screenshot](README_images/bamazonManager3.gif)

### Bamazon Manager Function 4: *Add New Product*
* This feature will allow the manager to add a brand new product (database line item) to the inventory
* It will ask the manager questions about all the details needed to add the item.

![Screenshot](README_images/bamazonManager4.gif)

* As can be seen below, the item, "PBJ", that was just entered, is now shown when querying the database for available products.

![Screenshot](README_images/bamazonManager5.gif)

### Bamazon Manager Function 5: *I'm done here*

* Lastly, when you are done with your managerial tasks, you can exit the application.

![Screenshot](README_images/bamazonManager6.gif)
