import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Order } from "./Order";
import '../styles/containers/OrdersPagination.sass'

const OrdersPagination = ({data}) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>      
      <ReactPaginate
        breakLabel="..."
        nextLabel="sig >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< ant"
        renderOnZeroPageCount={null}
        containerClassName={"OrdersPagination"}
        breakLinkClassName={"OrdersPagination__pageNum break"}
        pageLinkClassName={"OrdersPagination__pageNum"}
        previousLinkClassName={"OrdersPagination__pageNum prevNext"}
        nextLinkClassName={"OrdersPagination__pageNum prevNext"}
        activeLinkClassName={"OrdersPagination__active"}
        disabledLinkClassName={"OrdersPagination__pageNum prevNext disabled"}
      />
      {currentItems.map(order => (
        order.enabled === '1' && ( <Order data={order} key={order.order_code} /> )
      ))}
    </>
  )
}

export { OrdersPagination }