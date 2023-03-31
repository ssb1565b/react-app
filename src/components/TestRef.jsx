import { useState, useRef, useEffect } from 'react';

export default function TestRef() {
  const [text, setText] = useState(' |.o.| - [.0.] - (.0.)');
  const inputValue = useRef();
  const onChangeText = (e) => {
    const inputText = e.target.value;
    setText(inputText);
  };
  const onChangeRef = () => {
    setText(inputValue.current.value);
  };
  useEffect(() => {
    inputValue.current.focus();
  }, []);
  return (
    <div>
      <h1>{text}</h1>
      <input
        type="text"
        onChange={(e) => {
          onChangeText(e);
        }}
      />
      <input ref={inputValue} onChange={onChangeRef} type="text" />
    </div>
  );
}
