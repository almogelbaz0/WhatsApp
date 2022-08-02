import './Finder.css';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

export type FilterBy<T> = (item: T, equator: string) => boolean;

interface FinderProps<T> {
  value: string;
  setValue: Dispatch<string>;
  data: T[];
  setData: Dispatch<T[]>;
  filterBy?: FilterBy<T>;
  onClear?: () => void;
}

const Finder = <T extends {}>({
  value,
  setValue,
  data,
  setData,
  filterBy,
  onClear,
}: FinderProps<T>) => {
  const [isInSearch, setInSearch] = useState<boolean>(false);
  const onStartSearch = () => {
    setInSearch(true);
  };

  const searchButton = () => {
    return (
      <button onClick={onStartSearch} className="close-input-button">
        <SearchIcon style={{ width: "24px", height: "24px" }}> </SearchIcon>
      </button>
    );
  };

  const backButton = () => {
    return (
      <button onClick={onClickClear} className="close-input-button">
        <ArrowBackIcon style={{ width: "24px", height: "24px" }}>
          {" "}
        </ArrowBackIcon>
      </button>
    );
  };

  const onClickClear = () => {
    setInSearch(false);
    setValue("");
    onClear && onClear();
  };

  useEffect(() => {
    if (filterBy) {
      let newData: T[] = [];
      for (let item of data) {
        if (filterBy(item, value)) {
          newData.push(item);
        }
      }
      setData(newData);
    }
  }, [value]);

  return (
    <div className="inputDecorator">
      {!isInSearch ? searchButton() : backButton()}
      {!isInSearch && (
        <div className="input-helpertext">Search or start new chat</div>
      )}
      <input
        value={value}
        onFocusCapture={() => {
          setInSearch(true);
        }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
        className="finder"
      ></input>
      {isInSearch && (
        <button onClick={onClickClear} className="close-input-button">
          <CloseIcon style={{ width: "24px", height: "24px" }}></CloseIcon>
        </button>
      )}
    </div>
  );
};

export default Finder;
