import { RouterProvider } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import router from "./routes/routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
