import { lazy, Suspense } from "react";
import { loadRemote } from "@module-federation/enhanced/runtime";
import "./App.css";

const Login = lazy(() =>
  loadRemote("identity_module/Login").then((mod: any) => ({
    default: mod.default,
  })),
);

export default function App() {
  return (
    <div className="shell-page">
      <div className="shell-shell">
        <header className="shell-header">
          <div className="brand-wrap">
            <span className="brand-mark">MFE</span>
            <div>
              <p className="brand-eyebrow">Shell UI</p>
              <h1>Unified access portal</h1>
            </div>
          </div>
        </header>

        <main className="shell-content">
          <section className="shell-panel">
            <p className="shell-overline">Connected remote app</p>
            <h2>Authentication module</h2>
            <p className="shell-copy">
              This panel is hosted by the shell app, while the login form loads
              live from the remote application on port 3002.
            </p>
          </section>

          <div className="shell-remote">
            <Suspense
              fallback={
                <div className="remote-loading">
                  Loading Login from identity_module...
                </div>
              }
            >
              <Login />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
}
