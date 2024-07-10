import "./App.css";
import Accordian from "./components/accordian";
import Randomcolorgenerator from "./components/randomcolorgenerator";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadButton from "./components/load-more-button";
import TreeView from "./components/tree-view";
// import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/theme-change";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tab/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <Randomcolorgenerator/> */}
      {/* <StarRating/> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} /> */}
      {/* <LoadButton/> */}

      {/* <QRCodeGenerator/> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}

      {/* <TabTest/> */}

      <ModalTest/>
    </div>
  );
}

export default App;
