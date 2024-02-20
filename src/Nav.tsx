import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="bg-surface-2 fixed top-0 flex h-20 w-full flex-row items-stretch justify-evenly px-4 drop-shadow-lg">
            <div className=" flex flex-row items-start">
                <Button>
                    <Link to="/">Home</Link>
                </Button>
                <Button>
                    <Link to="about">About</Link>
                </Button>
            </div>
            <Links />
        </div>
    );
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
    return (
        <button
            className="text-sea-buckthorn h-full  px-4 text-lg  hover:bg-black/5"
            {...props}
        >
            {props.children}
        </button>
    );
};

const Links = () => {
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
