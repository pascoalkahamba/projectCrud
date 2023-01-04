import React, { useEffect } from "react";

function Head({ title }) {
  useEffect(() => {
    document.title = title;
  }, []);
  return <></>;
}

export default Head;
