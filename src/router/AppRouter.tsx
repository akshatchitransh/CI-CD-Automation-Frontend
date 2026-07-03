import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Insights from "../pages/Insights";
import WorkflowRuns from "../pages/WorkflowRuns";


import Dashboard from "../pages/Dashboard";
import RunDetails from "../pages/RunDetails";
import Home from "../pages/Home";

export default function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/runs/:id"
          element={<RunDetails />}
        />
         <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

<Route
  path="/insights"
  element={<Insights />}
/>

<Route
  path="/runs"
  element={<WorkflowRuns />}
/>
      </Routes>

    </BrowserRouter>
  );
}