"use client";
import usePreferences from "~/hooks/usePreferences";

const Mode = () => {
  const { mode, toggle } = usePreferences();
  return (
    <div>
      <button onClick={toggle}>click</button>
    </div>
  );
};

export default Mode;
