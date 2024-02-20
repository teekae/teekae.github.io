const primary = [
    "bg-sea-buckthorn-50",
    "bg-sea-buckthorn-100",
    "bg-sea-buckthorn-200",
    "bg-sea-buckthorn-300",
    "bg-sea-buckthorn-400",
    "bg-sea-buckthorn-500",
    "bg-sea-buckthorn-600",
    "bg-sea-buckthorn-700",
    "bg-sea-buckthorn-800",
    "bg-sea-buckthorn-900",
    "bg-sea-buckthorn-950",
];

const secondary = [
    "bg-hot-cinnamon-50",
    "bg-hot-cinnamon-100",
    "bg-hot-cinnamon-200",
    "bg-hot-cinnamon-300",
    "bg-hot-cinnamon-400",
    "bg-hot-cinnamon-500",
    "bg-hot-cinnamon-600",
    "bg-hot-cinnamon-700",
    "bg-hot-cinnamon-800",
    "bg-hot-cinnamon-900",
    "bg-hot-cinnamon-950",
];
const info = [
    "bg-wild-blue-yonder-50",
    "bg-wild-blue-yonder-100",
    "bg-wild-blue-yonder-200",
    "bg-wild-blue-yonder-300",
    "bg-wild-blue-yonder-400",
    "bg-wild-blue-yonder-500",
    "bg-wild-blue-yonder-600",
    "bg-wild-blue-yonder-700",
    "bg-wild-blue-yonder-800",
    "bg-wild-blue-yonder-900",
    "bg-wild-blue-yonder-950",
];

const Colours = () => {
    return (
        <div className="grid grid-cols-3 rounded-lg bg-black/20 p-4">
            <ColourBox colours={primary} />
            <ColourBox colours={secondary} />
            <ColourBox colours={info} />
        </div>
    );
};

const ColourBox = ({ colours }: { colours: string[] }) => {
    return (
        <div className="flex flex-col">
            {colours.map((value) => (
                <div
                    key={value}
                    className={`flex h-16 w-64 items-center justify-center border-black transition-all duration-75 hover:scale-125 hover:rounded-lg hover:border-2 ${value}`}
                >
                    <h2 className="text-xs">{value}</h2>
                </div>
            ))}
        </div>
    );
};
export default Colours;
