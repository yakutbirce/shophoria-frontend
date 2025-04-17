import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-12">
      <div className="inline-flex overflow-hidden rounded-lg border border-gray-300 shadow-sm">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={`px-6 py-3 text-base font-medium ${
            currentPage === 1
              ? "text-gray-400 bg-gray-100 cursor-not-allowed"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          First
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-6 py-3 text-base font-medium transition ${
              currentPage === page
                ? "text-white bg-sky-500"
                : "text-sky-600 hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-6 py-3 text-base font-medium ${
            currentPage === totalPages
              ? "text-gray-400 bg-gray-100 cursor-not-allowed"
              : "text-sky-600 hover:bg-gray-50"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
