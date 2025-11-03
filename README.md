# Code Reviewer

A full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) that enables users to submit code snippets and receive automated reviews powered by the Gemini API.

---

## 🚀 Overview  
**Code Reviewer** lets users:
- Sign up / Sign in to access the platform.  
- Submit code (as part of a conversation or standalone snippet) for review.  
- View their history of submitted code and received reviews.  
- Leverage the Gemini API to generate intelligent feedback on their code.

---

## 🔧 Tech Stack & Architecture  

### Backend  
- **Database**: One file defines the schemas — a `User` schema and a `Conversation` schema.  
- **Express + Node**: Six main files:  
  - `main.js` (or `server.js`) — entry point, connects to MongoDB, sets up routes.  
  - `signin.js` — handles login/authentication routes.  
  - `signup.js` — handles new user registration.  
  - `allConversations.js` — endpoint to fetch all conversations for a user.  
  - `newConversation.js` — endpoint to create a new conversation / submit code.  
  - `middleware.js` — custom middleware for authentication (e.g., JWT token verification) and error handling.  
- **Gemini API integration**: When a user submits a code snippet, the backend forwards it to the Gemini API, receives a generated review, and stores both the original code and the review in the `Conversation` schema.

### Frontend  
- Built using React.  
- Key components/pages:  
  - `Signin.jsx` — UI form for user login.  
  - `Signup.jsx` — UI form for user registration.  
  - `Main.jsx` — Dashboard/home view after login: displays user’s past code-reviews, and option to start a new review.  
  - `Conversation.jsx` — View for a specific “conversation”: submitted code snippet + generated review + ability to submit new code.  
  - `Response.jsx` — Component/view to display the generated feedback/review from Gemini for a submitted code snippet.  
- The frontend communicates with the backend REST API, handles authentication, fetches conversation history, and renders code + review results.

---

## 💡 Key Feature — Gemini API  
This project integrates the Gemini API to add an intelligent “code review” layer. When a user submits code, it’s sent to the Gemini API. The response is stored and displayed, enabling users to see automated feedback rather than only manual review. This elevates the functionality beyond a typical CRUD app.

---

## 📁 Project Structure (sample layout)  
