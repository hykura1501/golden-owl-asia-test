import Header from "./components/Header";
import Navbar from "./components/SideBar";
function Layout({user, children, setUser }) {
  return (
    // h-screen: Take the full height of the screen
    <div className="flex overflow-hidden">
      <Navbar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} setUser={setUser}/>
        <main className="flex-1 overflow-y-auto bg-background px-4 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;