"use client";
import usePreferences from "~/hooks/usePreferences";

const Mode = () => {
  const { toggle } = usePreferences();
  return (
    <div>
      <button onClick={toggle}>click</button>
    </div>
  );
};

export default Mode;
