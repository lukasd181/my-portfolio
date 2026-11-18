const WebNavBar = () => {
  return (
    <div className="h-full w-1/5 p-4 ">
      {/*Header  */}
      <div className="flex flex-row justify-between justify-end w-full">
        <div>hungduong.dev</div>
        <div>
          <div>Dark Mode</div>
        </div>
      </div>
      {/* Description */}
      <div className="mt-4 text-right">
        {
          "Software engineer. Martial artist. Building things that work, breaking things that don't."
        }
      </div>
    </div>
  );
};

export default WebNavBar;
