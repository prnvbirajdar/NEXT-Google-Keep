const InputArea = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Take a note..."
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Take a note..."
        value={inputBody}
        onChange={(e) => setInputBody(e.target.value)}
      />
    </div>
  );
};

export default InputArea;
