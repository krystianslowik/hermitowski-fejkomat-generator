import { ChangeEvent, ReactElement } from "react";
import { FejkomatKeys } from "../../../types/FejkomatValuesKeys.types";
import { useI18n } from "../../store/i18n";
import { InputError } from "../Error";

type SmallInputProps = {
  whatField: FejkomatKeys;
  value: string;
  inputChangeHandler: (whatField: FejkomatKeys, e: string) => void;
  error: string;
};

export const SmallInput = ({
  whatField,
  value,
  inputChangeHandler,
  error,
}: SmallInputProps): ReactElement => {
  const { i18n } = useI18n();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    inputChangeHandler(whatField, e.target.value);
  };

  return (
    <>
      <div className="relative flex flex-grow max-w-1/3 p-4 border border-gray-300 bg-gray-50 rounded-lg shadow flex-col items-start">
        {error && <InputError errorMessage={error} />}
        <div className="flex flex-col flex-grow">
          <span className="mb-1 text-lg font-bold">{i18n(whatField)}</span>
          <div className="mb-2 w-full text-sm text-gray-500">
            {i18n(`${whatField}_description`)}
          </div>
        </div>
        <input
          className="rounded-lg block w-full  p-2 mr-4 text-sm text-gray-900 bg-white border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          name={whatField}
          type="text"
          value={value}
          placeholder={i18n(whatField)}
          onChange={handleChange}
          maxLength={5000} // enough i guess
        />
      </div>
    </>
  );
};
