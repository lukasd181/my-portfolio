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
      {dummy.map((dum, index) => (
        <div key={index}>{dum}</div>
      ))}
    </div>
  );
};

export default MainFeed;
