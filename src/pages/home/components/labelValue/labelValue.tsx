import type { LabelValueProps } from "./labelValue.types";


const LabelValue = ({ label, value }: LabelValueProps) => {
    return (
        <p className="mb-2 text-gray-700">{label}: {value}</p>
    );
};

export default LabelValue;