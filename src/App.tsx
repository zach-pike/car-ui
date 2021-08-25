import "./styles.css";

import QuestionAnswerSharpIcon from "@material-ui/icons/QuestionAnswerSharp";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

import Sidebar from "./Sidebar";
import SidebarItem from "./Sidebar/SidebarItem";

export default function App() {
  return (
    <div className="App">
      <Sidebar>
        <SidebarItem>
          <QuestionAnswerSharpIcon fontSize="large" />
        </SidebarItem>

        <SidebarItem>
          <MusicNoteIcon fontSize="large" />
        </SidebarItem>
      </Sidebar>
    </div>
  );
}
