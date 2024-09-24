import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const BaseLayout = () => {
    return (
        <div className="border-solid">
            <Nav />
            <AnimatePresence mode="wait">
                <div className="mx-auto grid min-h-screen grid-cols-1 place-items-start content-start justify-items-center gap-4 bg-surface-1 py-24">
                    <Outlet />
                </div>
            </AnimatePresence>
        </div>
    );
};
export default BaseLayout;
