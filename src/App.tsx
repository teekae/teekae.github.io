import { useState } from "react";
import Colours from "./Colours";
import Nav from "./Nav";

function App() {
    const [showColours, setShowColours] = useState(false);
    return (
        <div className="relative">
            <Nav />
            <div className="bg-surface-1 mx-auto grid min-h-screen grid-cols-1 place-items-start content-start justify-items-center gap-4 py-24">
                <div className="bg-surface-2 rounded-lg p-4">
                    <div className="p-4 font-mono text-2xl font-bold">
                        <h1 className="text-selective-yellow">
                            Main text colour
                        </h1>
                        <h1 className="text-curious-blue content-center">
                            Secondary colour
                        </h1>
                    </div>
                </div>
                <button
                    onClick={() => setShowColours(!showColours)}
                    className="bg-selective-yellow hover:bg-selective-yellow-400 text-baltic-sea rounded p-4 font-bold"
                >
                    Toggle Colours
                </button>
                {showColours ? <Colours /> : null}
            </div>
        </div>
    );
}

export default App;
