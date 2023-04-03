import { IconSettings } from "@salesforce/design-system-react";

import TopNavHeader from "./components/TopNavHeader";
import Navbar from "./components/Navbar";
import AccountDetails from "./components/AccountDetails";
import DetailLinks from "./components/DetailLinks";

function App() {
  return (
    <div className="bg-blue" style={{ height: "100vh" }}>
      <IconSettings iconPath="./assets/icons">
        <TopNavHeader />
        <Navbar />
        <AccountDetails />
        <DetailLinks />
      </IconSettings>
    </div>
  );
}

export default App;
