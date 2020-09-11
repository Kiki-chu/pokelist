import React from "react";

export default function Pages({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {/* cheeky way to do an if statement in React */}
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  );
}
