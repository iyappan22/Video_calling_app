import "./App.css";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="App">
      <h1 className=" heading"> Video Calling App</h1>
      <VideoPlayer />
      <Options/>

    </div>
  );
}

export default App;
