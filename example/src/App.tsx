import React from "react";
import "./App.css";
import { Avatar, Button, showInfoSnackbar, Snackbar, Space } from "@doopage/react-ui-kit";

export const doopageLogo =
  "https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/argpgshyxeztagczhzqe";

const App: React.FC = () => {
  return (
    <div className="App">
      <Snackbar />
      <header className="App-header">
        <Button onClick={() => showInfoSnackbar("Hi, I am snackbar")}>Show alert</Button>
        <Space spaceWidth={-8}>
          <Avatar src={"/error_src.img"} alt={"Logo"} border />
        </Space>
      </header>
    </div>
  );
};

export default App;
