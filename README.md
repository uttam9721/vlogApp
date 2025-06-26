# 📝 Blogs

**Blog is a MERN stack-based social vlogging web application where users share thoughts purely through text — no images or videos. It’s a platform for writers, thinkers, and anyone who prefers the power of words over visuals.

---

## 🚀 Features

### 👥 User
- User Registration & Login (JWT-based)
- Edit Profile (username, bio)
- Follow/Unfollow other users
- View followers and following lists

### 📝 Vlogging (Posts)
- Create and publish text-based posts
- Like / Unlike posts
- Share posts (repost with optional comment)
- View timeline of own + followed users’ posts
- Comment on posts

### 📖 Feed & Interaction
- Public post feed (explore)
- Comments and threaded replies
- Real-time updates via refresh

---

## 🧰 Tech Stack

| Frontend            | Backend             | Database  | Authentication |
|---------------------|---------------------|-----------|----------------|
| React.js + Axios    | Node.js + Express   | MongoDB   | JWT + bcrypt   |

- UI Styling: Tailwind CSS or Bootstrap
- State Management: React Context / Redux (optional)

- ## 🧰 Tech Stack

| Technology     | Role                     |
|----------------|--------------------------|
| React.js       | Frontend Framework        |
| Express.js     | Backend API               |
| Node.js        | Backend Runtime           |
| MongoDB        | Database                  |
| JWT & Bcrypt   | Authentication & Security |


---

## 📁 Folder Structure

voiceless-vlogs/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ ├── App.js
│ │ └── index.js
│ └── public/
│
├── server/ # Node.js + Express backend
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── middlewares/
│ ├── server.js
│ └── .env
│
└── README.md

yaml
Copy
Edit
