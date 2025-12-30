interface TypingAreaProps {
  text: string;
  onTextChange: (text: string) => void;
}

const TypingArea = ({ text, onTextChange }: TypingAreaProps) => {
  return (
    <div className="w-full mt-10 border-b pb-10">
      <textarea
        className="w-full text-xl"
        name="typing text"
        id="text"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        rows={12}
      >
        {text}
      </textarea>
    </div>
  );
};

export default TypingArea;
