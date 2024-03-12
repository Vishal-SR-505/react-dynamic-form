import React, { useEffect, useState, useMemo, useCallback } from "react";

const InputComponent = React.memo(() => (
  <div>
    <input type="text" />
  </div>
));

const Sample = () => {
  const [data, setData] = useState(1);
  const [data1, setData1] = useState(1);

  // Memoize event handler functions to prevent unnecessary re-renders
  const handleDataUpdate = useCallback(() => {
    setData((prevData) => prevData + 1);
  }, []);

  const handleData1Update = useCallback(() => {
    setData1((prevData1) => prevData1 + 1);
  }, []);

  // Update data every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(handleDataUpdate, 2000);
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [handleDataUpdate]);

  // Update data1 every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(handleData1Update, 4000);
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [handleData1Update]);

  // Memoize the components to prevent unnecessary re-renders
  const memoizedDataComponent = useMemo(() => <div>{data}</div>, [data]);
  const memoizedData1Component = useMemo(() => <div>{data1}</div>, [data1]);

  return (
    <>
      <div>{"data1"}</div>
      <InputComponent />
      <div>qwerty</div>
      {memoizedDataComponent}
      {memoizedData1Component}
    </>
  );
};

export default Sample;
