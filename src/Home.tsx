import { useState } from "react";
import Colours from "./Colours";

function Home() {
    const [showColours, setShowColours] = useState(false);
    return (
        <>
            <div className="rounded-lg bg-surface-2 p-4">
                <div className="p-4 font-mono text-2xl font-bold">
                    <h1 className="text-sea-buckthorn">Main text colour</h1>
                    <h1 className="content-center text-hot-cinnamon">
                        Secondary colour
                    </h1>
                </div>
            </div>
            <button
                onClick={() => setShowColours(!showColours)}
                className="rounded bg-sea-buckthorn p-4 font-bold text-baltic-sea hover:bg-sea-buckthorn-600"
            >
                Toggle Colours
            </button>
            {showColours ? <Colours /> : null}
        </>
    );
}

export default Home;
