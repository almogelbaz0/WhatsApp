import './ChatInput.css';

import SendIcon from '@mui/icons-material/Send';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface ChatInputProps {
  sendMessage: (message: string) => void;
}

const ChatInput = ({ sendMessage }: ChatInputProps) => {
  const [value, setValue] = useState<string>();
  const [isInSearch, setInSearch] = useState<boolean>(false);

  const onStartSearch = () => {
    setInSearch(true);
  };

  const searchButton = () => {
    return (
      <button onClick={onStartSearch} className="close-input-button">
        <SendIcon style={{ width: "24px", height: "24px" }}> </SendIcon>
      </button>
    );
  };

  const backButton = () => {
    return (
      <button onClick={onStartSearch} className="close-input-button">
        <SendIcon style={{ width: "24px", height: "24px" }}> </SendIcon>
      </button>
    );
  };

  const onClickClear = () => {
    setInSearch(false);
    setValue("");
    value && sendMessage(value);
  };

  return (
    <div className="chatInputDecorator">
      {/* {!isInSearch && backButton()} */}
      {!isInSearch && (
        <div className="chatInput-helpertext">Type A Message</div>
      )}
      <input
        onFocusCapture={() => {
          setInSearch(true);
        }}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
        className="chatInput"
      ></input>
      {isInSearch && (
        <button onClick={onClickClear} className="close-chat-input-button">
          <SendIcon style={{ width: "24px", height: "24px" }}></SendIcon>
        </button>
      )}
    </div>
  );
};

export default ChatInput;
