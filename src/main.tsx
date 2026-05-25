import ReactDOM from "react-dom/client";
import "./styles.css";

// Ensure styles are applied even when Tailwind is configured via CSS-first approach.

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
