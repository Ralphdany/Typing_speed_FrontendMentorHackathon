import TypingLayout from './features/typing/components/TypingLayout';
import Header from './features/typing/components/Header';
import TypingArea from './features/typing/components/TypingArea';
import StatusBar from './features/typing/components/StatusBar';
import ControlsPanel from './features/typing/components/ControlsPanel';
import data from './constants/data.json';
import './index.css';

function App() {
  return (
    <>
      <TypingLayout
        header={<Header bestTypeSpeed={0} />}
        typingArea={
          <TypingArea text={data.easy[0].text} onTextChange={() => {}} />
        }
        statusBar={<StatusBar accuracy={100} timeLeft={60} wpm={0} />}
        controlsPanel={<ControlsPanel difficultyLevel="easy" mode="timed-60" />}
      />
    </>
  );
}

export default App;
