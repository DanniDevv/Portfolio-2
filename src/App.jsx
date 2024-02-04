import "./App.css";
import Layout from "@/components/Layout";

function App() {
  return (
    <>
      <div
        className="fixed inset-0 z-[-10] h-screen w-screen flex items-center justify-center px-5 py-24"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
        }}
      ></div>
      <Layout />
    </>
  );
}

export default App;
