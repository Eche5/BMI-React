import Gender from "./components/Gender";
import Header from "./components/Header";
import InputField from "./components/InputField";

function App() {
  return (
    <div
      className="
    flex flex-col justify-center items-center min-h-screen py-4 px-2"
    >
      <section className="w-full max-w-[420px] min-h-[400px] flex flex-col justify-start p-8 bg-gray-800 text-white rounded-lg">
        <Header />
        <Gender />
        <InputField />
      </section>
    </div>
  );
}

export default App;
