import React from "react";

export const Paginacion = ({pagina, total, onChange}) => {

  const getPages = () => {
    const pages = []
    for (let i = 0; i < total; i++) {
      let pag = i + 1
      pages.push( 
        <a onClick={() => onChange(pag)} className={pagina===pag ? 'active' : ''}>
          {pag}
        </a>
      )
    }
    return pages
  }

  return (
    <div className="topbar-filter">
      {/* <label>Movies per page:</label>
      <select>
        <option value="range">5 Movies</option>
        <option value="saab">10 Movies</option>
      </select> */}
      <div className="pagination2">
        <span>Page {pagina} of {total}:</span>

        {getPages()}
        
        {/* <a href="/">2</a>
        <a href="/">
          <i className="ion-arrow-right-b"></i>
        </a> */}
      </div>
    </div>
  );
};
