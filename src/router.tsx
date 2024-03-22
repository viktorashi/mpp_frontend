import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
const AppRouter = () => {
  const Overview = lazy(() => import("./components/Overview"));
  const Detail = lazy(() => import("./components/Detail"));
  return (
    <BrowserRouter>
      <Suspense fallback={<>stai boss ca se incarca</>}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/elements" />} />
          <Route
            element={
              <Layout>
                <Overview />
              </Layout>
            }
            path={"/elements"}
          />
          <Route element={<Detail />} path={"/elements/:id"} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
