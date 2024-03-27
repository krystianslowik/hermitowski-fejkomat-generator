import React, { useState } from "react";
import { Input } from "./components/UI/Input";
import { FakingSettings } from "./types/HermitowskiFejkomat.types";
import { defaultSettings, fejkomatyFields } from "./components/DefaultValues";
import { FejkomatKeys } from "./types/FejkomatValuesKeys.types";
function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fejkomatSettings, setFejkomatSettings] =
    useState<FakingSettings>(defaultSettings);
  if (fejkomatSettings) console.log(fejkomatSettings); // filler

  const setNewSettings = (key: FejkomatKeys, value: any): void => {
    console.log(key, value);
    setFejkomatSettings((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return (
    <div className="App bg-slate-500 text-red-700 p-4">
      {fejkomatyFields.map((field) => (
        <Input valueToSet={setNewSettings} field={field} key={field} />
      ))}
    </div>
  );
}

export default App;
