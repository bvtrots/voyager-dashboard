# 🗺️ Voyager Dashboard — Travel Management System

<p align="center">
  <img src="public/img/app-screenshot.jpg" alt="Voyager Dashboard Interface" width="600px">
</p>

<p align="center">
  <strong>A high-performance Single Page Application (SPA) designed for planning and managing complex travel itineraries with real-time data synchronization.</strong>
</p>

---

## 📖 Overview
Voyager Dashboard is a sophisticated travel planning platform built with **Vanilla TypeScript** using the **MVP (Model-View-Presenter)** architectural pattern. The project focuses on handling complex state transitions, modular UI components, and seamless integration with a remote API.

## 🛠 Tech Stack
| Layer | Technologies |
| :--- | :--- |
| **Core** | TypeScript (Strict Mode) — Object-Oriented Design |
| **Architecture** | MVP (Model-View-Presenter) Pattern |
| **UI Engine** | Abstract View Components, Flatpickr (Date handling) |
| **Networking** | API Service with Bearer Token Auth |
| **Build Tool** | Webpack 5, Babel |
| **Utilities** | Day.js, He (Encoding), Cross-env |

---

## 🎯 Key Features & Engineering Challenges
* 🏗️ **Architectural Excellence**: Implemented a strict **MVP pattern** to decouple business logic (Models) from rendering (Views), coordinated by Presenters.
* 🧩 **Component-Based UI**: Developed a custom framework of reusable components (`AbstractView`, `AbstractStatefulView`) to handle complex DOM manipulations and state updates.
* ⏱️ **Advanced Form Handling**: Integrated **Flatpickr** for precise time selection and implemented comprehensive validation for travel destination data.
* 🔄 **Reactive Updates**: Utilized an **Observable** pattern to ensure the UI stays in sync with data changes without full page reloads.
* 📡 **Live Backend Integration**: Communicates with the [bvtrots-mock-server](https://bvtrots-mock-server.onrender.com) hosted on Render.

---

## 📂 Project Structure
```text
voyager-dashboard/
├── src/
│   ├── framework/      # Base classes (View, StatefulView, Observable)
│   ├── model/          # Data layer (Points, Destinations, Offers)
│   ├── presenter/      # Business logic & glue code
│   ├── view/           # UI components (Filters, Sort, Form, List)
│   ├── templates/      # HTML structure definitions
│   ├── utils/          # Formatting, time, and common helpers
│   ├── types/          # TypeScript interfaces & enums
│   └── main.ts         # Application entry point
├── public/             # Static assets
├── webpack.config.js   # Build configuration
└── package.json        # Scripts & dependencies
```

⚙️ Installation & Setup

1. Clone the repository
Bash
git clone [https://github.com/bvtrots/voyager-dashboard.git](https://github.com/bvtrots/voyager-dashboard.git)
cd voyager-dashboard 
2. Install dependencies Bash
npm install 
3. Run in development mode Bash
npm start
[!IMPORTANT]
Note: The application uses a free Render instance for the backend. Free instances spin down after inactivity. On the first launch, it may take 30–60 seconds for the server to "wake up." If data doesn't load immediately, please visit the backend link to trigger the server wake-up.

📝 Engineering Commentary
This project demonstrates the power of modern TypeScript without the overhead of heavy frameworks. By building a custom component system and state management logic, the application achieves exceptional performance and maintainability. The code follows strict OOP principles, making it highly extensible.

<p align="center">
Developed with ❤️ by <strong><a href="https://github.com/bvtrots" style="text-decoration: none;">Bogdan</a></strong>
</p>
