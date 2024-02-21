import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
    return (
        <div>
            <Nav />
            <div className="mx-auto grid min-h-screen grid-cols-1 place-items-start content-start justify-items-center gap-4 bg-surface-1 py-24">
                <Outlet />
            </div>
        </div>
    );
};
export default BaseLayout;
