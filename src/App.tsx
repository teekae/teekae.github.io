import Nav from "./Nav";

function App() {
  return (
    <div className="min-h-screen bg-primary grid grid-cols-1 place-items-center justify-items-center mx-auto py-8">
      <Nav />
      <div className="rounded-lg bg-primary p-8">
        <div className="text-2xl font-bold font-mono">
          <h1 className="text-secondary content-center">Secondary colour</h1>
          <h2 className="text-zinc-100">Main text colour</h2>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <Card text="With primary text" className="text-primary" />
        <Card text="With neutral text" className="text-neutral-800" />
        <Card text="With black text" className="text-black" />
      </div>
    </div>
  );
}
const Card = ({ text, className }: { text: string; className: string }) => {
  return (
    <div className="rounded bg-accent p-8">
      <h2 className={className}>{text}</h2>
    </div>
  );
};
export default App;
