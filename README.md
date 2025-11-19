

---

# 📦 PS Payload Sender (Cross-Platform App)

A **simple, fast & cross-platform** PS4/PS5 payload sender built with **Electron + Express**.
Works on **macOS (.dmg)**, **Windows (.exe)** and **Linux (.AppImage)**.
No terminal required for users — open the app and send payloads instantly.

---

## 🚀 Features

✨ **Beautiful UI** (modern, clean, responsive)
⚡ **Standalone Electron app** — no Node installation required
📡 **Send payloads easily using `nc`**
🖥 **Cross-platform:**

* macOS → `.dmg`
* Windows → `.exe`
* Linux → `.AppImage`

📂 Files unpacked properly for Electron packaging
🔧 Fully supports GitHub Actions automated builds

---

## 🧰 Tech Stack

* **Electron 28+**
* **Express 4**
* **Multer (file upload handling)**
* **Node.js 20+**

---

## 📥 Installation (Developers)

Clone the repo:

```sh
git clone https://github.com/s1315d/PS-Payload-Sender.git
cd PS-Payload-Sender-main
```

Install dependencies:

```sh
npm install
```

---

# 🏗 Build Commands

Use these commands to build platform-specific packages:

### 🍎 macOS (.dmg)

```sh
npm run build-mac
```

### 🪟 Windows (.exe)

```sh
npm run build-win
```

### 🐧 Linux (.AppImage)

```sh
npm run build-linux
```

### 🌎 Build all (for GitHub Actions)

```sh
npm run build-all
```

---

# 🛠 GitHub Actions (CI/CD)

This project supports **full cross-platform cloud builds** using GitHub Actions.
Add this workflow:

```
.github/workflows/build.yml
```

Then every push builds:

* macOS `.dmg`
* Windows `.exe`
* Linux `.AppImage`

…and uploads them as downloadable artifacts.

---

# 📁 Folder Structure

```
project/
 ├─ main.js           # Electron entry
 ├─ server.js         # Express payload server
 ├─ web/              # UI files (HTML/CSS/JS)
 ├─ uploads/          # Auto-created upload directory
 ├─ dist/             # Build output
 ├─ package.json
 └─ .github/workflows # CI for cross-platform builds
```

---

# 🎮 Usage (Inside the App)

1. Enter **PS IP Address**
2. Enter **Port** (e.g., `9020`)
3. Select **Paylod file**
4. Click **Send**
5. Done ✔


---


