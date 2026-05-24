# 🚀 Study-Flow — Backend Login API

This repository contains the robust backend architecture and authentication pipeline for the **Study-Flow** application. The primary focus of this module is to handle secure user authentication via a custom-built Login API.

---

## 🛠️ Tech Stack & Dependencies

- **Language:** Python
- **Framework:** Flask (Lightweight & Fast Micro-framework)
- **Security & CORS:** `flask-cors` (Enables seamless Cross-Origin communication with frontend)
- **Data Format:** JSON (JavaScript Object Notation)

---

## ⚙️ Features Implemented

1. **Secure POST Endpoint:** Created a targeted `/login` route that accepts incoming credentials hidden securely in the request body.
2. **Request Parsing:** Utilizes `request.get_json()` to intercept and parse raw JSON payloads dispatched from the frontend.
3. **Robust Response Handling:** - Returns HTTP Status Code **`200 OK`** upon successful credential verification.
   - Dispatches HTTP Status Code **`401 Unauthorized`** with a dynamic error message when validation fails.
4. **CORS Integration:** Configured Cross-Origin Resource Sharing to allow unrestricted and secure communication between the frontend client and backend server.

---

## 🚀 How to Run the Server Locally

1. Open the project directory inside VS Code.
2. Open the terminal and install dependencies:
   ```bash
   pip install flask flask-cors
