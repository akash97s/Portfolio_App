import React from 'react';
// import '../App.css';
import '../css/gridContainer.css';

const GridContainer = () => {
  return (

    <div className="parent-container">
        {/* Grid with flexbox */}
        <div className="grid-row-1">
            <div className="row-1-content">Content 1</div>
            <div className="row-1-content">Content 2</div>
            <div className="row-1-content">Content 3</div>
        </div>
        {/* Grid with grids search layout */}
        <div className="grid-row-2">
            <div className="row-2-content">Content 1</div>
        </div>
        {/* Grid with grids alphabet layout*/}
        <div className="grid-row-3">
            <div className="row-3-content">Content 1</div>
        </div>
    </div>

  );
};

export default GridContainer;
