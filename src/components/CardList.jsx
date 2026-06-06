import React, { useState, useEffect } from "react";
import Card from "./Card";

const ITEMS_PER_PAGE = 6;

const CardList = ({ listItems }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [listItems]);

  const totalPages = Math.ceil(listItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = listItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  // Muestra máx 5 páginas centradas alrededor de la actual
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const left = Math.max(1, currentPage - delta);
    const right = Math.min(totalPages, currentPage + delta);
    for (let i = left; i <= right; i++) range.push(i);
    return range;
  };

  return (
    <div className="container-fluid px-2 px-md-3">
      {listItems.length > 0 ? (
        <>
          {/* Grid: 1 col móvil → 2 col tablet → 3 col desktop */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center mt-3 mt-md-4 g-3 g-md-4">
            {currentItems.map((item, index) => (
              <Card key={startIndex + index} info={item} />
            ))}
          </div>

          {/* Paginación mobile-first */}
          {totalPages > 1 && (
            <nav
              aria-label="Paginación"
              className="mt-4 d-flex flex-column align-items-center gap-2"
            >
              {/* Contador de página — siempre visible */}
              <p className="text-muted small mb-1">
                Página <strong>{currentPage}</strong> de{" "}
                <strong>{totalPages}</strong> &mdash; {listItems.length}{" "}
                resultados
              </p>

              <div className="d-flex align-items-center gap-2">
                {/* Botón Anterior */}
                <button
                  className="btn btn-outline-primary btn-sm px-3"
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  aria-label="Página anterior"
                >
                  &laquo;
                  {/* Texto solo en pantallas medianas+ */}
                  <span className="d-none d-md-inline ms-1">Anterior</span>
                </button>

                {/* Números de página — ventana deslizante */}
                <div className="d-flex gap-1">
                  {getVisiblePages()[0] > 1 && (
                    <>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => setCurrentPage(1)}
                      >
                        1
                      </button>
                      {getVisiblePages()[0] > 2 && (
                        <span className="btn btn-sm disabled px-1">…</span>
                      )}
                    </>
                  )}

                  {getVisiblePages().map((page) => (
                    <button
                      key={page}
                      className={`btn btn-sm ${
                        page === currentPage
                          ? "btn-primary"
                          : "btn-outline-secondary"
                      }`}
                      onClick={() => setCurrentPage(page)}
                      aria-current={page === currentPage ? "page" : undefined}
                    >
                      {page}
                    </button>
                  ))}

                  {getVisiblePages().at(-1) < totalPages && (
                    <>
                      {getVisiblePages().at(-1) < totalPages - 1 && (
                        <span className="btn btn-sm disabled px-1">…</span>
                      )}
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => setCurrentPage(totalPages)}
                      >
                        {totalPages}
                      </button>
                    </>
                  )}
                </div>

                {/* Botón Siguiente */}
                <button
                  className="btn btn-outline-primary btn-sm px-3"
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  aria-label="Página siguiente"
                >
                  <span className="d-none d-md-inline me-1">Siguiente</span>
                  &raquo;
                </button>
              </div>
            </nav>
          )}
        </>
      ) : (
        <div className="text-center text-muted py-5">
          <p className="fs-6">
            No se encontraron resultados relacionados con la búsqueda
          </p>
        </div>
      )}
    </div>
  );
};

export default CardList;