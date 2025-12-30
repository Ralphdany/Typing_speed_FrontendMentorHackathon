interface ControlsPanelProps {
  difficultyLevel: 'easy' | 'medium' | 'hard';
  mode: 'timed-60' | 'passage';
  onDifficultyChange?: (level: 'easy' | 'medium' | 'hard') => void;
  onModeChange?: (mode: 'timed-60' | 'passage') => void;
}
const ControlsPanel = ({
  difficultyLevel,
  mode,
  onDifficultyChange,
  onModeChange,
}: ControlsPanelProps) => {
  return (
    <div>
      <div>
        <form action="" className="flex gap-3">
          <div className="flex gap-1.5 items-baseline">
            <label htmlFor="difficulty">Difficulty:</label>
            <div role="menu">
              <div className="flex gap-1 max-sm:hidden">
                {['easy', 'medium', 'hard'].map((level, index) => {
                  const isSelected = difficultyLevel === level;
                  return (
                    <button
                      key={index}
                      onClick={() =>
                        onDifficultyChange &&
                        onDifficultyChange(level as 'easy' | 'medium' | 'hard')
                      }
                      className={`px-3 py-1 bg-black border rounded-md hover:border-blue-primary hover:text-blue-primary ${isSelected ? 'border-blue-primary text-blue-primary' : 'border-gray-ntrl-500 text-white'}`}
                    >
                      {level}
                    </button>
                  );
                })}
              </div>
              <div className="sm:hidden">
                <select name="difficulty" id="difficulty">
                  {['easy', 'medium', 'hard'].map((level, index) => {
                    const selected = difficultyLevel === level;
                    return (
                      <option key={index} value={level} selected={selected}>
                        {level}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          {/* Mode selection */}
          <div className="flex gap-1.5 items-baseline">
            <label htmlFor="mode">Mode:</label>
            <div role="menu">
              <div className="hidden sm:flex gap-1">
                {['timed-60', 'passage'].map((modeOption, index) => {
                  const isSelected = mode === modeOption;
                  return (
                    <button
                      key={index}
                      onClick={() =>
                        onModeChange &&
                        onModeChange(modeOption as 'timed-60' | 'passage')
                      }
                      className={`px-3 py-1 bg-black border rounded-md hover:border-blue-primary hover:text-blue-primary ${isSelected ? 'border-blue-primary text-blue-primary' : 'border-gray-ntrl-500 text-white'}`}
                    >
                      {modeOption}
                    </button>
                  );
                })}
              </div>

              <div className="sm:hidden">
                <select name="mode" id="mode">
                  {['timed-60', 'passage'].map((modeOption, index) => {
                    const isSelected = mode === modeOption;
                    return (
                      <option
                        key={index}
                        selected={isSelected}
                        className={`px-3 py-1 bg-black border rounded-md hover:border-blue-primary hover:text-blue-primary ${isSelected ? 'border-blue-primary text-blue-primary' : 'border-gray-ntrl-500 text-white'}`}
                      >
                        {modeOption}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ControlsPanel;
