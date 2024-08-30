import React from 'react';
import PulsatingButton from "@/components/magicui/pulsating-button";
function FilterBar({ setFilter }) {
  return (
    <div className="flex justify-center gap-4 my-4">
      <PulsatingButton
        className="p-2 rounded"
        onClick={() => setFilter('all')}
      >
        All
      </PulsatingButton>
      <button
        className="bg-green-300 p-2 rounded"
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
      <button
        className="bg-yellow-300 p-2 rounded"
        onClick={() => setFilter('incomplete')}
      >
        Incomplete
      </button>
    </div>
  );
}

export default FilterBar;
