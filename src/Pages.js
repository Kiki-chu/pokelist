import React from "react";

export default function Pages({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="buttons">
      {/* cheeky way to do an if statement in React */}
      {gotoPrevPage && (
        <div className="button" onClick={gotoPrevPage}>
          Previous
        </div>
      )}
      {gotoNextPage && (
        <div className="button" onClick={gotoNextPage}>
          Next
        </div>
      )}
    </div>
  );
}
