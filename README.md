# midterm-GIGIH
Created with CodeSandbox
# gigih_midterm

## Table of Content
* [Database Structure](#database-structure)
  
	* [Videos Collection](#videos-collection)
  *  [Products Collection](#products)
	* [Comment Collection](#comment-collection)
    
* [API Structure](#api-structure)
* [API Request Response](#api-request-response)
* [How To Run](#how-to-run-in-local)



## Database Structure 
This Project have 3 collection products,videos,and comments

  - Products Collection

````
  -store
  -description
  -tags
  -price
  -count
````

  - Videos Collection

````
-_id
-judulVideo
-linkYt
-productId
````

  - Comments Collection

````
-_id
-username
-comment
-timeStamp
-videoId (this one for connecting comment and the video)
````


## API Structure

Endpoint Ready to use

````
GET   /
GET   /videos
GET   /videos/:id < to get the specific product>
POST  /videos/:id/comment



````

## API Request Response
### GET /
````
Return Dashboard Home
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  
* **Success Response:**  
* **Code:** 200  
  **Content:**
````
### GET /videos

````
Return All Videos from Database
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  showing all database /videos
* **Success Response:**  
* **Code:** 200  
  **Content:**
````
### GET /videos/:id
Return Video By Id and show comment 

````
Return json `message `
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  showing dashboard for videos/:id
* **Success Response:**  
* **Code:** 200  
  **Content:**
````
### POST /videos/:id/comment

````
Creates new comment and return "keren dah bisa"
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
````


## How To Run In Local
To run the application locally, follow these steps:

1. First, make sure you have downloaded all the required dependencies. The list of dependencies you need are:

   - body-parser (version 1.20.2 or higher)
   - dotenv (version 16.3.1 or higher)
   - ejs (version 3.1.9 or higher)
   - express (version 4.18.2 or higher)
   - express-ejs-layouts (version 2.5.1 or higher)
   - mongoose (version 7.4.0 or higher)
   - nodemon (version 2.0.22 or higher)

2. To install all these dependencies, open your terminal or command prompt and navigate to the root directory of your cloned repository.

3. Then, execute the following command:

   ```
   npm i body-parser dotenv ejs express express-ejs-layouts mongoose nodemon
   ```

   This command will use npm (Node Package Manager) to download and install all the listed dependencies.

4. After all the dependencies have been installed successfully, you can start the local server by running the following command in your terminal:

   ```
   npm run start
   ```



   This command will execute the script defined in the `start` field of the "scripts" section in your `package.json` file. Usually, this script starts your application using nodemon, which helps to automatically restart the server whenever changes are detected, making the development process more convenient.

5. Once the server is running, you should be able to access your application locally by navigating to the appropriate address in your web browser (http://localhost:3000)

## Simple Step for how to run
```
1. go to your visual studio code and open terminal "git clone https://github.com/reyangga9/midterm-GIGIH"
2. cd to midterm-Gigih and npm i body-parser dotenv ejs express express-ejs-layouts mongoose nodemon
3. npm run start
```

