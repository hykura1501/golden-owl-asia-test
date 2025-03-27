import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "@/layouts/Layout";
import publicRoutes from "@/routes/routes";
import api from "@/config/axios"
import { useEffect } from "react";
function App() {

  // const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/top-students");
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
