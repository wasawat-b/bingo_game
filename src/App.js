import BingoScreen from "./components/BingoScreen";
import VideoBackgroundPage from "./components/VideoBackgroud";
import "./overAllCSS.css";

function App() {
  return (
    <div className="container-fluid m-0 p-0">
      <VideoBackgroundPage />
      <BingoScreen />
    </div>
  );
}

export default App;
