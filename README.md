# [TanaBata-Typing](../../)
TanaBata-Typing  Website is an interactive web application designed to help users improve their typing speed and accuracy. It offers various exercises, typing tests, and progress tracking to enhance typing skills for all age groups and proficiency levels.
Someone said very aptly that:-                                  
> _If you type adeptly with 10 fingers, you're typing faster than your mind is working._

## [Features](../../)

There are various features in our project. Some of them are completed and we are looking forward to implementing it. These are:-   


- **Authentication**-Authentication and user profile for different users. Guest mode is also available for random users to try this site.
- **Measure Typing Stats**- Users can type in the typing area and can measure speed, accuracy, and time for typing the sentence.
- **Simple Interface**-User-friendly responsive design accessible to individuals with varying technological experience.
- **LeaderBoard**-User has a specific leaderboard for himself so that his work can be measured daily, weekly, monthly and all time. 
- **GoogleAuth**-Authentication using Google and Facebook is added for better authentication practice.
- **Custom Typing Lessons**-Incorporated a feature of custom typing lessons and preloaded lessons for some tips for speed typing.


## Images
   Some images and video from the site are:-
   ![Screenshot 2024-07-15 205902](https://github.com/user-attachments/assets/c7c22525-a0c3-4759-97f0-56e6004eb69e)
   ![Screenshot 2024-07-15 205936](https://github.com/user-attachments/assets/3e464329-08ba-4f45-9aed-e38249594f8f)
   ![Screenshot 2024-07-15 210246](https://github.com/user-attachments/assets/1f23f4cd-aa94-446e-8e9c-6384c8ef810f)


https://github.com/user-attachments/assets/9c474889-1fd7-4afe-8b85-879b2787c54d


## Tech Stack

- **FRONTENED**-React Js, Tailwind.
- **BACKENED**-Node Js, Express Js.
- **DATABASE**-MongoDB.

## Future Additions

- **Random Text Generation**-Random text generation used for testing various typing parameters,multiple users feature to make it interactive.
- **Dictation Audio Exercise**-Audio Exercise or Dictation for enhancing user experience. 
- **Multiple Languages**-Support for multiple languages so that this site can be accessible for variety of users throughout world.


## Installation:-

### Prerequisites


Make sure you have the following software installed on your machine:

- Node.js (version 14 or higher)
- npm (Node package manager, comes with Node.js)
- git (for cloning the repository)
- MongoDB (either installed locally or a cloud MongoDB service like MongoDB Atlas)

## project structure
```terminal
package.json
BACKEND/
   package.json
   .env (to create .env, check [prepare your secret session])
FRONTEND/
   package.json
...
```

### Steps

1) **Clone the repository**

    Clone the project repository to your local machine using git:

     ```sh
     git clone https://github.com/aditya-gup780/Tanabata-Typing.git
     ```

2) **Navigate to the project directory:-**

    ```sh
    cd Tanabata-Typing
    ```
3) **Navigate to the server directory and install the dependencies:**

     ```sh
      cd BACKEND
      npm install
     ```
4) **Navigate to the client directory and install the dependencies:**

      ``` sh
       cd ../FRONTEND
       npm install
      ```
5)  **Set up environment variables**

    Create a .env file in the server directory and add the required environment variables.
    For example:
     Copy Code
    ```sh
    
      MONGODB_URI=mongodb://localhost:27017/your_db_name
      JWT_SECRET=your_jwt_secret
    ```
      If using MongoDB Atlas, the MONGODB_URI might look something like this:

      ```sh
        MONGODB_URI=mongodb+srv://your_username:your_password@cluster0.mongodb.net/your_db_name?retryWrites=true&w=majority
       ```

6) **Start the backend server:-**

      ```sh
        cd ../BACKEND
        npm start
      ```
      The server should be running at http://localhost:5000.


7) **Start the frontend development server:-**

     ``` sh

      cd ../FRONTEND
      npm start
     ```
   The React app should be running at http://localhost:3000.

## Contributors:-
- **Tanishq Tank**
- **Aditya Gupta**
- **Vaibhav Chaudhary**

