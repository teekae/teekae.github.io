import { NavLink, NavLinkProps } from "react-router-dom";

const Nav = () => {
    return (
        <div className="bg-surface-2 fixed top-0 flex h-20 w-full flex-row items-stretch justify-evenly px-4 drop-shadow-lg">
            <div className="flex flex-row">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
            </div>
            <ExternalLinks />
        </div>
    );
};

type LinkProps = NavLinkProps;

const Link = (props: LinkProps) => {
    return (
        <NavLink
            {...props}
            className={({ isActive }) =>
                (isActive ? "border-b-sunset-orange" : "border-b-transparent") +
                " text-sea-buckthorn flex  h-full content-center items-center border-b-2 px-4 text-lg hover:bg-black/5"
            }
        >
            {props.children}
        </NavLink>
    );
};

const ExternalLinks = () => {
    return (
        <div className="flex flex-row items-center justify-end gap-4">
            <a href="https://www.linkedin.com/in/tom-kirk-836b2736/">
                <img
                    src="./assets/In-White-72.png"
                    alt="linkedin"
                    className="h-8 hover:scale-125"
                />
            </a>
            <a href="https://github.com/teekae">
                <img
                    src="./assets/github-mark-white.svg"
                    alt="github"
                    className="h-8 hover:scale-125"
                />
            </a>
        </div>
    );
};

export default Nav;
