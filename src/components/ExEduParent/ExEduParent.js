import React from "react";
import Experience from "../Experience/index";
import Education from "../Education/index";
import { useEffect } from "react";
import { useContext } from "react";
import { ContextAPI } from "../../context/ContextAPI";

function ExEduParent() {
  const { enabled, setEnabled } = useContext(ContextAPI);

  return (
    <>
      {enabled ? (
        <Experience setEnabled={setEnabled} />
      ) : (
        <Education setEnabled={setEnabled} />
      )}
    </>
  );
}

export default ExEduParent;
