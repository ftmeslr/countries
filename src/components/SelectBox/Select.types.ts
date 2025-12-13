import type { Dispatch, SetStateAction } from "react";

export type SelectBoxProps = {
    options: { label: string; value: string }[];
    setSelectValue: Dispatch<SetStateAction<string>>;
    value: string
};