# 🚀 CodeSync – Real-Time Collaborative Code Editor

A modern real-time collaborative code editor built to explore **Socket.IO**, **real-time synchronization**, **CRDTs with Yjs**, **Docker deployment**, and modern full-stack development.

This project was primarily created as a **learning-focused project** to understand how collaborative systems like Google Docs or VS Code Live Share work internally — especially the concepts behind:

- Real-time communication
- Multi-user synchronization
- Collaborative editing systems
- Dockerized deployment workflows

The application was initially planned for deployment on AWS, but due to cloud pricing considerations, the final deployment was completed using **Render**.

---

# ✨ Features

- ⚡ Real-time collaborative code editing
- 👥 Multiple users editing simultaneously
- 🔄 Instant synchronization using Socket.IO
- 🧠 Conflict-free editing with **Yjs CRDT**
- 📝 Monaco Editor integration (VS Code editor)
- 👀 Live active-user awareness
- 🎨 Responsive modern UI with Tailwind CSS
- 🐳 Dockerized application setup
- 🌐 Full-stack architecture using React + Node.js
- 🚀 Production deployment on Render

---

# 🛠️ Tech Stack

## Frontend

- React 19
- Vite
- Monaco Editor
- Tailwind CSS
- Socket.IO Client
- Yjs
- y-monaco
- y-socket.io

---

## Backend

- Node.js
- Express.js
- Socket.IO
- y-socket.io

---

## DevOps & Deployment

- Docker
- Render Deployment
- AWS (Learning/Exploration)

---

# 🧠 Core Learning Goals

This project was mainly built to deeply understand:

## 🔹 Real-Time Communication

Learning how applications maintain live communication between multiple users using:

- WebSockets
- Socket.IO
- Event-driven architecture
- Bidirectional communication

---

## 🔹 Collaborative Editing Systems

Understanding how collaborative editors solve synchronization problems such as:

- Concurrent edits
- Conflict resolution
- Shared document state
- User awareness tracking

Using **Yjs** helped avoid manually implementing complex Operational Transformation (OT) algorithms.

---

## 🔹 Docker & Deployment

A major focus of this project was understanding deployment workflows:

- Writing Dockerfiles
- Building Docker images
- Running containerized applications
- Production deployment workflows
- Environment consistency

The project was originally intended to be deployed on AWS, but due to pricing constraints, the final deployment was completed using **Render**.

---

# 🏗️ System Architecture

```txt
Users
   │
   ▼
React Frontend (Monaco Editor + Yjs)
   │
Socket.IO Connection
   │
   ▼
Node.js + Express Server
   │
Yjs Synchronization Layer
   │
   ▼
Shared Collaborative Document State
```

---

# ⚙️ How Real-Time Collaboration Works

## 1️⃣ User Joins

When a user opens the editor:

- A Socket.IO connection is established
- A shared Yjs document is initialized
- User awareness information is synced

---

## 2️⃣ Editing Begins

As users type:

- Monaco Editor detects text changes
- Yjs converts changes into CRDT operations
- Updates are transmitted through Socket.IO

---

## 3️⃣ Instant Synchronization

All connected users receive updates instantly and see edits live without refreshing the page.

---

## 4️⃣ Conflict Resolution

Yjs automatically resolves concurrent edits using CRDT logic, ensuring consistency across all clients.

---

# 🚀 Local Development Setup

## 1. Clone Repository

```bash
git clone <your-repository-url>
cd CodeSync
```

---

## 2. Backend Setup

```bash
cd Backend
npm install
npm run dev
```

Backend runs on:

```txt
http://localhost:3000
```

---

## 3. Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# 🐳 Docker Setup

## Build Docker Image

```bash
docker build -t codesync .
```

---

## Run Docker Container

```bash
docker run -p 4000:3000 codesync
```

---

## Access Application

```txt
http://localhost:4000
```

---

# 📚 Major Concepts Learned

## 🔹 Socket.IO

- Real-time client-server communication
- Event emitters & listeners
- WebSocket abstraction
- Connection lifecycle management

---

## 🔹 Yjs & CRDTs

- Shared distributed state
- Conflict-free synchronization
- Collaborative document editing
- Awareness protocols

---

## 🔹 Docker

- Containerization
- Docker image creation
- Running isolated environments
- Simplified deployment workflows

---

## 🔹 Full-Stack Integration

- React + Node.js integration
- Frontend-backend communication
- Real-time architecture
- Production deployment handling

---

# 🎯 Challenges Faced

- Managing multiple concurrent users
- Understanding CRDT synchronization
- Integrating Monaco Editor with Yjs
- Handling Socket.IO connection issues
- Dockerizing frontend and backend
- Deployment configuration problems

---

# 🌱 Future Improvements

- 🔐 Authentication system
- 💾 Persistent database storage
- 📄 Multiple collaborative rooms
- 🎨 Theme customization
- 🧑‍💻 Cursor tracking
- ☁️ AWS/Kubernetes deployment
- 📹 Video/audio collaboration
- 🗂️ File management system

---

# 📦 Available Scripts

## Frontend

```bash
npm run dev
npm run build
npm run lint
```

---

## Backend

```bash
npm run dev
npm start
```

---

# 🎓 Key Takeaway

This project helped me understand the engineering behind modern collaborative platforms and gave practical exposure to:

- Real-time systems
- WebSocket communication
- Distributed synchronization
- Dockerized deployments
- Full-stack application architecture

More than just building a project, this was a hands-on learning experience in understanding how collaborative systems work internally.

---

# 📄 License

ISC License

---

# ⭐ Project Status

✅ Fully Functional  
✅ Real-Time Collaboration Working  
✅ Dockerized  
✅ Deployed on Render  
🚀 Built for Learning & Exploration