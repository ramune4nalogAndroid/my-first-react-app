# My App

Welcome to **My App**! This is a modern React application built with Vite, TypeScript, and Material-UI (MUI). It demonstrates interactive UI components, routing, and a dynamic data table.


## 🚀 Features

- **Home Page**: Play with a counter, change button colors, and open a dialog.
- **Table Page**: View a styled table of tasks with user and task details.
- **Show User Info Switch**: On the Table Page, toggle the "Show User Info" switch (now inside the table header) to show/hide user email, regional department, and phone extension columns dynamically.
- **Routing**: Seamless navigation between pages using React Router.
- **Material-UI**: Dark theme and responsive design.
- **Custom Components**: Button, SelectInput, Dialog, Card, Table, and InfoSwitch.
- **Optimized MUI Imports**: All Material-UI components are now imported directly (no barrel imports) for better bundle size and performance.

## 📁 Project Structure

```
my-app/
├── public/           # Static assets
├── src/
│   ├── components/
│   │   ├── card/     # IntroductionCard
│   │   ├── commons/  # Button, SelectInput
│   │   ├── dialogs/  # IntroductionDialog
│   │   ├── pages/    # Home, TablePage
│   │   └── table/    # TaskTable
│   ├── App.tsx       # Main app and types
│   ├── main.tsx      # Entry point
│   └── ...           # Styles and assets
├── index.html
├── package.json
└── ...
```

## 🛠️ Getting Started

1. **Install dependencies**:
	```powershell
	npm install
	```
2. **Run the development server**:
	```powershell
	npm run dev
	```
3. **Open in browser**: Visit [http://localhost:5173](http://localhost:5173) (default Vite port).


## ✨ Usage

- On the **Home Page**, increment/decrement the counter, change button colors, and open a dialog for confirmation.
- Click "Next Page" to view the **Table Page** with sample tasks and user info.
- On the **Table Page**, use the "Show User Info" switch (in the table header) to toggle visibility of user-related columns.
- Use "Previous Page" to return to Home.

## 📦 Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI](https://mui.com/)
- [React Router](https://reactrouter.com/)


## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License.
