import { useEffect, useRef, useState } from "react"
import type { SelectBoxProps } from "./Select.types";
import { ArrowDown } from "../../assets/icons";

export const SelectBox = (selectBoxProps: SelectBoxProps) => {
    const { options, setSelectValue, value } = selectBoxProps;
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("click", onClick);
        return document.removeEventListener("click", onClick)

    }, [])

    return (
        <div className="relative w-full" ref={ref} >
            <button
                onClick={() => {

                    setOpen((prev: boolean) => !prev)
                }}
                className="absolute  shadow right-0 top-1/2 -translate-y-1/2 cursor-pointer w-full text-left bg-white">
                {value}
            </button>
            <div className="absolute right-3 top-[-6px]">
                <ArrowDown />
            </div>
            {open ?
                <div className="absolute top-[25px] right-0 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto z-10">
                    {
                        options.map((option) => (
                            <div onClick={() => {
                                setOpen(false);
                                setSelectValue(option.value)
                            }}
                                key={option.value}
                                className="p-2 hover:bg-gray-200 cursor-pointer text-left">
                                {option.label}
                            </div>
                        ))
                    }
                </div> : <></>}
        </div>
    );
}
