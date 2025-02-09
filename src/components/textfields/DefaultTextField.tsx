import { ChangeEvent, useState } from "react";
import { IconButton } from "../IconButton";
import { ErrorMessage } from "../ErrorMessage";


interface DefaultTextFieldProps {
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onIconClick: () => void;
  type?: "text" | "password";
  placeholder: string;
  isError?: boolean;
  errorMessage?: string;
}

export default function DefaultTextField({
  id,
  onChange,
  onIconClick,
  placeholder,
  type = "text",
  value = "",
  isError = false,
  errorMessage = "다시 시도해주세요",
}: DefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative text-field">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`border-b text-base ${
          isFocused ? "border-secondary" : "border-primary"
        } pb-2 w-full`}
      >
        <input
          id={id}
          className=".placeholder-mono200"
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
        />
        {!!value  && (
          <IconButton
            iconPath={
              type === "text"
                ? "/calcel.svg"
                : "/calcel.svg"
            }
            size="small"
            alt="delete"
            onClick={onIconClick}
          />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}