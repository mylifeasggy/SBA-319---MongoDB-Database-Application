

# SquareOne Restaurant.

Clients can make their own reservation and leave reviews according to their experience. 
A Menu route to add new dishes/plates to the menu restaurant. 

<h1> API ROUTES </h1>

| Endpoits      | Method        |Description    | 
| ------------- | ------------- | ------------- |
| /reservations | GET           | List of reservations  | 
| /reservation | POST | Create a new reservation |
| /reservations/:id  | GET      | Information about one reservation in specific | 
| /reservations/:id  | PUT    |Update information about a reservation | 
| /reservations/:id  | DELETE    |Delete a reservation| 
| /reviews     | GET            | All the reviews|
| /reviews     | POST           | Create a new review|
| /reviews/:id | GET            | Specific review|
| /reviews/:id | PUT           | Update a pecific review|
| /reviews/:id | DELETE         | Delete a pecific review|
| /menu  | GET            |The items in a menu|
| /menu    | POST           | Create a new plate in the menu|
| /menu/:id | GET            | Specific plate of the menu|
| /reviews/:id | PUT           | update the price of a plate|
| /reviews/:id | DELETE         | Delete a plate|


<h1>Requirements</h1>

1-Use at least three different data collections within the database (such as users, posts, or comments).
2- Utilize reasonable data modeling practices.
3-Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database.

4-Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request. 10%

5-Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request. 10%

6-Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable. 5%

7-Include sensible MongoDB data validation rules for at least one data collection. Note: this may be accomplished in a number of ways. If you choose to perform this task outside of your application's code, you must include a way to test the validation within the application's routes. This can be as simple as providing a POST route that attempts to create an invalid document and displays the resulting error. 5%

8-Implement error handling with try/catch syntax inside each of your routes. Wrap the database logic with the try block and send a successful status code if everything goes smoothly. If something goes wrong, use the catch block to send back a different response and status code

9-Utilize reasonable code organization practices. 5%

10-Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). 10%

11-Commit frequently to the git repository. 5%

12-Include a README file that contains a description of your application. This README must include a description of your API's available routes and their corresponding CRUD operations for reference. 5%

13-Level of effort displayed in creativity and user experience. 5%

14-Use Mongoose to implement your application. Note: The validation requirements above must still be implemented database-side, but should also be implemented application-side within your Mongoose schema(s). +1%
