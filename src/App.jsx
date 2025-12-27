import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <Header />
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
