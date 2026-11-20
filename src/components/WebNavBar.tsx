import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";
import Moon from "./Moon";

const WebNavBar = () => {
  return (
    <div className="h-auto p-4 flex flex-col justify-between gap-4">
      <div className="flex flex-col justify-start">
        <h1 className="text-[24px]">hung duong</h1>
        <p>[:hung zuong]</p>
      </div>
      <div className="flex flex-row justify-start gap-2">
        <button>about</button>
        <button>exp.</button>
        <LinkedIn />
        <GitHub />
        <Moon />
      </div>
    </div>
  );
};

export default WebNavBar;
