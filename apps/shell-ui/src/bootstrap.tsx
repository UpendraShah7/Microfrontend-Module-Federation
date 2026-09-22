import ReactDOM from "react-dom/client";
import { init } from "@module-federation/enhanced/runtime";
import App from "./App";

async function initFederation() {
  const res = await fetch("/remote.json");
  const remotes = await res.json();

  init({
    name: "shell_ui",
    remotes: remotes.map((r: any) => ({
      name: r.name,
      entry: r.entry,
    })),
  });
}

async function startApp() {
  await initFederation();

  ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
}

startApp();
