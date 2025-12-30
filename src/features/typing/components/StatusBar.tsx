interface StatusBarProps {
  accuracy: number;
  wpm: number;
  timeLeft: number;
}

const StatusBar = ({ accuracy, wpm, timeLeft }: StatusBarProps) => {
  return (
    <div className="flex items-baseline gap-2">
      <div>
        <p className="text-gray-ntrl-500">
          Accuracy:{' '}
          <span className="text-lg font-bold text-white">{accuracy}%</span>
        </p>
      </div>
      <div className="border-l px-2">
        <p className="text-gray-ntrl-500">
          WPM: <span className="text-lg font-bold text-white">{wpm}</span>
        </p>
      </div>
      <div className="border-l px-2">
        <p className="text-gray-ntrl-500">
          Time Left:
          <span className="text-lg font-bold text-white">0:{timeLeft}</span>
        </p>
      </div>
    </div>
  );
};

export default StatusBar;
