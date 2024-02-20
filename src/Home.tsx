import { useState } from "react";
import Colours from "./Colours";

function Home() {
    const [showColours, setShowColours] = useState(false);
    return (
        <>
            <div className="bg-surface-2 rounded-lg p-4">
                <div className="p-4 font-mono text-2xl font-bold">
                    <h1 className="text-sea-buckthorn">Main text colour</h1>
                    <h1 className="text-hot-cinnamon content-center">
                        Secondary colour
                    </h1>
                </div>
            </div>
            <button
                onClick={() => setShowColours(!showColours)}
                className="bg-sea-buckthorn hover:bg-sea-buckthorn-600 text-baltic-sea rounded p-4 font-bold"
            >
                Toggle Colours
            </button>
            {showColours ? <Colours /> : null}
        </>
    );
}

export default Home;
