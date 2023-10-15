import InfoAboutUs from "./components/infoAboutUsPage/InfoAboutUs";
import MainScreen from "./components/mainPage/MainScreen";
import InfoAdvantage from "./components/advantagePage/infoAdvantage";
import InfoPossibilities from "./components/possibilitiesPage/infoPossibilities";
import NewsAboutUs from "./components/newsAboutUsPage/newsAboutUs";
import Footer from "./components/footerPage/footer";
import Footnote from "./components/footnotePage/footnote";

function App() {
  return (
    <div className="App">
        <MainScreen />
        <InfoAboutUs />
        <InfoAdvantage />
        <InfoPossibilities />
        <NewsAboutUs />
        <Footer />
        <Footnote />
    </div>
  );
}

export default App;
