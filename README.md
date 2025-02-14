# 🌎 HTN Challenge - Event Hub

Welcome to **HTN Event Hub**, a web application designed to display hackathon events for both hackers and the general public. This app allows users to browse upcoming events, view details, and log in to access exclusive hacker-only events. 

---

## 📌 Project Overview
Hackathon Global Inc.™ has been successfully running hackathons for the past **10 years**. This project serves as a tool for attendees to explore event details, including **workshops, activities, and tech talks**, and provides a login system to unlock **private events**.

🔗 **Live Demo**: _https://htn-challenge.netlify.app/_ 

📂 **Repository**: _https://github.com/ritaxiang/htn2025-challenge_  

---

## 📜 Features
- ✅ **Fetch & Display Events** - Retrieves event data from the Hackathon API  
- ✅ **Event Sorting** - Automatically sorts events by start time  
- ✅ **Event Filters** - Categorize events based on type (Workshop, Activity, Tech Talk)  
- ✅ **Search Functionality** - Users can search for specific events  
- ✅ **Login System** - Restricts access to private events (Username: `hacker`, Password: `htn2025`)  
- ✅ **Related Events Navigation** - Users can explore other relevant events  
- ✅ **Mobile Responsive & Accessible** - Works across all devices
  
---

## 🛠 Tools Used
- **Development**: React (Vite), TypeScript, Tailwind CSS  
- **Deployment**: Netlify 

---

## 🎯 How It Works
### 1️⃣ Fetching Event Data
The app fetches event details from the following API endpoint:  
🔗 **[`https://api.hackthenorth.com/v3/events`](https://api.hackthenorth.com/v3/events)**  

### 2️⃣ User Authentication
- Public users can only view **public** events  
- Logging in with **username: hacker** & **password: htn2025** grants access to **private** events  

### 3️⃣ Event Pages
Each event has its own **dedicated page**, displaying:
- Name, date, time, type, and description
- Speaker details
- Related event links

---

## 🚀 Getting Started
### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/your-username/hackathon-event-hub.git](https://github.com/ritaxiang/htn2025-challenge.git
cd htn2025-challenge
```

### 2️⃣ **Install Dependencies**
```bash
npm install
```

### 3️⃣ Run the App!
```bash
npm run dev
```

