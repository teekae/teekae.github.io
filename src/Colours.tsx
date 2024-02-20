const sunsetOrange = [
    "bg-sunset-orange-50",
    "bg-sunset-orange-100",
    "bg-sunset-orange-200",
    "bg-sunset-orange-300",
    "bg-sunset-orange-400",
    "bg-sunset-orange-500",
    "bg-sunset-orange-600",
    "bg-sunset-orange-700",
    "bg-sunset-orange-800",
    "bg-sunset-orange-900",
    "bg-sunset-orange-950",
];
const curiousBlue = [
    "bg-curious-blue-50",
    "bg-curious-blue-100",
    "bg-curious-blue-200",
    "bg-curious-blue-300",
    "bg-curious-blue-400",
    "bg-curious-blue-500",
    "bg-curious-blue-600",
    "bg-curious-blue-700",
    "bg-curious-blue-800",
    "bg-curious-blue-900",
    "bg-curious-blue-950",
];

const selectiveYellow = [
    "bg-selective-yellow-50",
    "bg-selective-yellow-100",
    "bg-selective-yellow-200",
    "bg-selective-yellow-300",
    "bg-selective-yellow-400",
    "bg-selective-yellow-500",
    "bg-selective-yellow-600",
    "bg-selective-yellow-700",
    "bg-selective-yellow-800",
    "bg-selective-yellow-900",
    "bg-selective-yellow-950",
];

const Colours = () => {
    return (
        <div className="grid grid-cols-3  rounded-lg bg-black/20 p-4">
            <ColourBox colours={selectiveYellow} />
            <ColourBox colours={curiousBlue} />
            <ColourBox colours={sunsetOrange} />
        </div>
    );
};

const ColourBox = ({ colours }: { colours: string[] }) => {
    return (
        <div className="flex flex-col">
            {colours.map((value) => (
                <div
                    key={value}
                    className={`flex h-16 w-32 items-center justify-center border-black transition-all duration-75 hover:scale-125 hover:rounded-lg hover:border-2 ${value}`}
                >
                    <h2 className="text-xs">{value}</h2>
                </div>
            ))}
        </div>
    );
};
export default Colours;
