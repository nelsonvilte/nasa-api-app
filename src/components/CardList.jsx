import React, { useState, useEffect } from "react";
import Card from "./Card";

const ITEMS_PER_PAGE = 6;

const CardList = ({ listItems }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Resetear a página 1 cuando cambia la lista
  useEffect(() => {
    setCurrentPage(1);
  }, [listItems]);

  const totalPages = Math.ceil(listItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = listItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  return (
    <div>
      {listItems.length > 0 ? (
        <>
          <div className="row row-cols-1 row-cols-md-3 justify-content-center mt-4 g-4">
            {currentItems.map((item, index) => (
              <Card key={startIndex + index} info={item} />
            ))}
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <nav className="mt-4 d-flex justify-content-center align-items-center gap-3">
              <button
                className="btn btn-outline-primary"
                onClick={handlePrev}
                disabled={currentPage === 1}
              >
                &laquo; Anterior
              </button>

              <div className="d-flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`btn ${
                      page === currentPage
                        ? "btn-primary"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                className="btn btn-outline-primary"
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Siguiente &raquo;
              </button>
            </nav>
          )}

          <p className="text-center text-muted mt-2">
            Página {currentPage} de {totalPages} — {listItems.length} resultados
          </p>
        </>
      ) : (
        <div>No se encontraron resultados relacionados con la búsqueda</div>
      )}
    </div>
  );
};

export default CardList;