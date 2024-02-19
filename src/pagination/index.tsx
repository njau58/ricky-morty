import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  handlePageClick: (data: any) => void;
  pageCount: number;
  page: number;
}

const Pagination: React.FC<PaginationProps> = ({
  handlePageClick,
  pageCount,
  page,
}) => {
  return (
    <ReactPaginate
      pageRangeDisplayed={2}
      forcePage={page === 1 ? 0 : page - 1}
      pageCount={pageCount}
      previousLabel={<MdKeyboardDoubleArrowLeft />}
      nextLabel={<MdKeyboardDoubleArrowRight />}
      breakLabel={"..."}
      marginPagesDisplayed={0}
      onPageChange={handlePageClick}
      containerClassName={"flex items-center justify-center  flex-row gap-2"}
      pageClassName={
        " px-4 py-3 text-sm rounded-md bg-gray-200 hover:bg-gray-400  "
      }
      pageLinkClassName={""}
      previousClassName={"font-bold"}
      previousLinkClassName={""}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"bg-gray-500"}
    />
  );
};

export default Pagination;
