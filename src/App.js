import "./App.sass";
import "bootstrap/dist/css/bootstrap.min.css";

import AppHeader from "./components/Header/Header";
import Main from "./components/Main/Main";
import OurStory from "./components/OurStory/OurStory";
import VideoModal from "./components/WatchStory/WatchStory";
import Expertise from "./components/Expertise/Expertise";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import Comments from "./components/Comments/Comments";
import OurWorks from "./components/OurWorks/OurWorks";

function App() {
  return (
    <div className="App">
      <div className="background">
        <AppHeader />
        <Main />
      </div>
      <OurStory />
      <VideoModal />
      <Expertise />
      <Team />
      <OurWorks />
      <Comments />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
