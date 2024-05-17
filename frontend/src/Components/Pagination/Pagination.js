import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Pagination.css'

export default function Pagination({ items, itemscount, setShownItems }) {

    console.log(items);

   const nextPage = (page) => {
         setPage(page + 1)
   }

   const PreviousPage = () => {
    setPage(page - 1)
   }

 
  const [pageCount, setPageCount] = useState(null);
  const [page , setPage] = useState(1)

  useEffect(() => {
    const endIndex = itemscount * page;
    const startIndex = endIndex - itemscount;
    const paginatedItems = items.slice(startIndex, endIndex);
    setShownItems(paginatedItems);
    const pageNumbers = Math.ceil(items.length / itemscount);
    setPageCount(pageNumbers);
  }, [page, items , pageCount]);

  return (
    <nav className="mt-5">
      <ul className="pagination justify-content-center gap-2">
        <li className="page-item" onClick={() => PreviousPage(page)}>
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true"><i class="fa-solid fa-backward text-gray"></i></span>
          </a>
        </li>

        {Array(pageCount)
          .fill(0)
          .map((pageItems, index) => {
            return index + 1 === page ? (
              <li className="page-item active ">
                <Link className="page-link mr-3" to="#">
                  {index + 1}
                </Link>
              </li>
            ) : (
              <li className="page-item" >
                <Link className="page-link ml-3" to="#" onClick={e => setPage(Number(e.target.innerText))} >
                  {index + 1}
                </Link>
              </li> 
            );
          })}

        <li className="page-item" onClick={ () =>  nextPage(page)}>
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true"><i class="fa-solid fa-forward text-gray"></i></span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
