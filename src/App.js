import TextCounter from "./Bai1";
import WorkList from "./Bai3";
import FormDK from "./Bai5";
import './App.css';
function App() {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Bài tập thực hành ReactJS</h1>
      <ul>
        <strong>Bài 1</strong><TextCounter />
        <strong>Bài 3</strong><WorkList />
        <strong>Bài 5</strong><FormDK />
      </ul>
    </div>
  );
}
export default App;