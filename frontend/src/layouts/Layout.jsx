import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
      />
      <div className="mt-20">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
