import type { ComponentProps, JSX } from "react"

const MainInput = (InputProps: ComponentProps<'input'> & { icon: JSX.Element }) => {
    const { onChange, value, placeholder, icon } = InputProps;

    return (
        <>
            <div className="relative w-full">
                <span className="absolute top-1/2 -translate-y-1/2 text-gray-400 left-4">
                    {icon}
                </span>
                <input
                    className="flex  bg-red px-10 shadow py-4 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-black w-full"
                    placeholder={placeholder}
                    name="input"
                    value={value} onChange={onChange} />

            </div>
        </>

    )
}

export default MainInput;