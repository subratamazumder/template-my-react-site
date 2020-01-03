import React from "react";
import "./App.css";
import Footer from "./components/footer";
import CookieNotification from "./components/cookie-notification";
import TestComp from "./components/test-componenet";
function App() {
  return (
    <div>
      <TestComp></TestComp>
      <Footer></Footer>
      <CookieNotification></CookieNotification>
    </div>
  );
}

export default App;
