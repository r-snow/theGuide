import React, { useState } from "react";

function Entry({ entry }) {
  return (
    <div className="entry">
      {entry.title && <div>title: {entry.title}</div>}
      {entry.entry && <div>entry: {entry.entry}</div>}
      {entry.location && (
        <div>
          location:
          {entry.location.longitude && (
            <div>longitude: {entry.location.longitude}</div>
          )}
          {entry.location.latitude && (
            <div>latitude: {entry.location.latitude}</div>
          )}
          {entry.location.height && <div>height: {entry.location.height}</div>}
        </div>
      )}
      {entry.links && <div>links: {entry.links}</div>}
      {entry.guide && <div>guide: {entry.guide}</div>}
    </div>
  );
}

export default Entry;
