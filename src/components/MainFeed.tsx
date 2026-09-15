const dummy = [
  "dummy",
  "dummy",
  "dummy",
  "dummy",
  "dummy",
  "dummy",
  "dummy",
  "dummy",
  "dummy",
  "dummy",
  "dummy",
  "dummy",
  "dummy",
];
const MainFeed = () => {
  return (
    <div className="flex flex-col">
      {dummy.map((dum) => (
        <div>{dum}</div>
      ))}
    </div>
  );
};

export default MainFeed;
