const Nav = () => {
  return (
    <div className="fixed bg-secondary text-zinc-100 p-0 text-lg w-full h-20 gap-4 top-0 drop-shadow-lg flex flex-row items-start">
      <button className="text-primary hover:bg-black/5 px-2 h-full">
        Home
      </button>
      <button className="hover:bg-black/5 px-2 h-full">About</button>
    </div>
  );
};
export default Nav;
