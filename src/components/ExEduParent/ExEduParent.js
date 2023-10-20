import React from "react";
import Experience from "../Experience/index";
import Education from "../Education/index";
import { useEffect } from "react";
import { useContext } from "react";
import { ContextAPI } from "../../context/ContextAPI";

function ExEduParent() {
  const { enabled, setEnabled } = useContext(ContextAPI);

  useEffect(() => {
    console.log(enabled);
  }, []);

  return (
    <>{enabled ? <Experience setEnabled={setEnabled} /> : <Education />}</>
  );
}

export default ExEduParent;
