# 📊 Student Progress Tracker

A React + Bootstrap student management dashboard for viewing student
marks and academic performance.

## 🚀 Features

-   📚 Student performance table
-   👨‍🎓 100 student records
-   📈 DSA, Maths, DBMA and Networking marks
-   🔄 Pagination with Previous / Next
-   🔢 Select 5, 10, 15 or 20 rows per page
-   🎨 Responsive Bootstrap dashboard
-   🗂️ JSON Server API using `db.json`
-   📱 Mobile responsive layout

## 🛠️ Technologies

-   React.js
-   Bootstrap 5
-   JavaScript
-   CSS
-   JSON Server
-   Vite

## 📁 Project Structure

``` text
student-progress/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── db.json
├── package.json
└── README.md
```

## ⚙️ Installation

``` bash
npm install
npm install bootstrap
```

## ▶️ Run the Project

### 1. Start JSON Server

``` bash
npx json-server --watch db.json --port 3000
```

### 2. Start React

Open another terminal:

``` bash
npm run dev
```

Then open the Vite URL shown in the terminal.

## 🔗 API

The application gets student data from:

``` text
http://localhost:3000/students
```

## 📸 Project Screenshot

👉 [View Screenshot](#)

> https://drive.google.com/drive/folders/1E2LrG_73OxcOUzg9QObEL352LlZ7dXto?usp=sharing

## 🎥 Project Demo Video

▶️ [Watch Demo Video](#)

> https://drive.google.com/drive/folders/14Nbx7orI5zNR_Mft3ZPTD5dLsSjwy_eK?usp=sharing

## 🔗 Quick Links

  Resource         Link
  ---------------- ----------------------
  📸 Screenshot    [Open Screenshot](#)
  🎥 Demo Video    [Watch Video](#)
  💻 Source Code   [View Project](#)

## 👨‍💻 Main Files

-   `App.jsx` --- React UI and pagination logic
-   `App.css` --- Dashboard styling and responsive design
-   `main.jsx` --- React entry point and Bootstrap import
-   `db.json` --- 100 student records
-   `index.css` --- Global reset styles

## 📌 Notes

Run JSON Server and the React development server together.\
If the student list is empty, first check that JSON Server is running on
port `3000`.

------------------------------------------------------------------------

### ⭐ Student Progress Tracker

Made with React + Bootstrap ❤️
