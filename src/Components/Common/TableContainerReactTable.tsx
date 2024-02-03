import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
  useRowSelect
} from "react-table";
import { Table, Row, Col, Button, CardBody } from "reactstrap";
import { DefaultColumnFilter } from "./filters";
import {
  ProductsGlobalFilter,
  CustomersGlobalFilter,
  OrderGlobalFilter,
  ContactsGlobalFilter,
  CompaniesGlobalFilter,
  LeadsGlobalFilter,
  CryptoOrdersGlobalFilter,
  InvoiceListGlobalSearch,
  TicketsListGlobalFilter,
  NFTRankingGlobalFilter,
  TaskListGlobalFilter,
} from "../../Components/Common/GlobalSearchFilter";
import { Link } from "react-router-dom";
interface GlobalFilterProps {
  preGlobalFilteredRows?: any;
  globalFilter?: any;
  setGlobalFilter?: any;
  SearchPlaceholder?: string;
  isProductsFilter?: boolean;
  isCustomerFilter?: any;
  isOrderFilter?: any;
  isContactsFilter?: any;
  isCompaniesFilter?: any;
  isCryptoOrdersFilter?: any;
  isInvoiceListFilter?: any;
  isTicketsListFilter?: any;
  isNFTRankingFilter?: any;
  isTaskListFilter?: any;
  isLeadsFilter?: any;
}

// Define a default UI for filtering
function GlobalFilter({
  globalFilter,
  setGlobalFilter,
  isCustomerFilter,
  isOrderFilter,
  isContactsFilter,
  isCompaniesFilter,
  isCryptoOrdersFilter,
  isInvoiceListFilter,
  isTicketsListFilter,
  isNFTRankingFilter,
  isTaskListFilter,
  isProductsFilter,
  isLeadsFilter,
  SearchPlaceholder
}: GlobalFilterProps) {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value : any) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <React.Fragment>
      <CardBody className="border border-dashed border-end-0 border-start-0">
        <form>
          <Row>
            <Col sm={5}>
              <div className={(isProductsFilter || isContactsFilter || isCompaniesFilter || isNFTRankingFilter) ? "search-box me-2 mb-2 d-inline-block" : "search-box me-2 mb-2 d-inline-block col-12"}>
                <input
                  onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                  }}
                  id="search-bar-0"
                  type="text"
                  className="form-control bg-light border-light search /"
                  placeholder={SearchPlaceholder}
                  value={value || ""}
                />
                <i className="bx bx-search-alt search-icon"></i>
              </div>
            </Col>
            {isProductsFilter && (
              <ProductsGlobalFilter />
            )}
            {isCustomerFilter && (
              <CustomersGlobalFilter />
            )}
            {isOrderFilter && (
              <OrderGlobalFilter />
            )}
            {isContactsFilter && (
              <ContactsGlobalFilter />
            )}
            {isCompaniesFilter && (
              <CompaniesGlobalFilter />
            )}
            {isLeadsFilter && (
              <LeadsGlobalFilter />
            )}
            {isCryptoOrdersFilter && (
              <CryptoOrdersGlobalFilter />
            )}
            {isInvoiceListFilter && (
              <InvoiceListGlobalSearch />
            )}
            {isTicketsListFilter && (
              <TicketsListGlobalFilter />
            )}
            {isNFTRankingFilter && (
              <NFTRankingGlobalFilter />
            )}
            {isTaskListFilter && (
              <TaskListGlobalFilter />
            )}
          </Row>
        </form>
      </CardBody>

    </React.Fragment>
  );
}

interface TableContainerProps {
  columns?: any;
  data?: any;
  isGlobalFilter?: any;
  isAddOptions?: any;
  divClassName?: any;
  tableClassName?: any;
  theadClassName?: any,
  tableClass?: any;
  theadClass?: any;
  isBordered?: boolean;
  isAddUserList?: any;
  handleOrderClicks?: any;
  handleUserClick?: any;
  handleCustomerClick?: any;
  isAddCustList?: any;
  customPageSize?: any;
  className?: any;
  customPageSizeOptions?: any;
  iscustomPageSize?: boolean;
  SearchPlaceholder: string;
  isProductsFilter?: boolean;
  isGlobalSearch?: any;
  isCustomerFilter?: any;
  isOrderFilter?: any;
  isContactsFilter?: any;
  isCompaniesFilter?: any;
  isLeadsFilter?: any;
  isCryptoOrdersFilter?: any;
  isInvoiceListFilter?: any;
  isTicketsListFilter?: any;
  isNFTRankingFilter?: any;
  isTaskListFilter?: any;
  trClass?: any;
  thClass?: any;
  divClass?: any;
}

const TableContainer = ({
  columns,
  data,
  isGlobalSearch,
  isGlobalFilter,
  isProductsFilter,
  isCustomerFilter,
  isOrderFilter,
  isContactsFilter,
  isCompaniesFilter,
  isLeadsFilter,
  isCryptoOrdersFilter,
  isInvoiceListFilter,
  isTicketsListFilter,
  isNFTRankingFilter,
  isTaskListFilter,
  isAddOptions,
  isAddUserList,
  handleOrderClicks,
  handleUserClick,
  handleCustomerClick,
  isAddCustList,
  customPageSize,
  tableClass,
  theadClass,
  trClass,
  thClass,
  divClass,
  SearchPlaceholder
}: TableContainerProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    // preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: {
        pageIndex: 0, pageSize: customPageSize, selectedRowIds: 0, sortBy: [
          {
            desc: true,
          },
        ],
      },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );

  const generateSortingIndicator = (column : any) => {
    return column.isSorted ? (column.isSortedDesc ? " " : "") : "";
  };

  const onChangeInSelect = (event : any) => {
    setPageSize(Number(event.target.value));
  };
  // const onChangeInInput = (event : any) => {
  //   const page = event.target.value ? Number(event.target.value) - 1 : 0;
  //   gotoPage(page);
  // };

  return (
    <Fragment>
      <Row className="mb-3">
        {isGlobalSearch && (
          <Col md={1}>
            <select
              className="form-select"
              value={pageSize}
              onChange={onChangeInSelect}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </Col>
        )}
        {isGlobalFilter && (
          <GlobalFilter
            // preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
            isProductsFilter={isProductsFilter}
            isCustomerFilter={isCustomerFilter}
            isOrderFilter={isOrderFilter}
            isContactsFilter={isContactsFilter}
            isCompaniesFilter={isCompaniesFilter}
            isLeadsFilter={isLeadsFilter}
            isCryptoOrdersFilter={isCryptoOrdersFilter}
            isInvoiceListFilter={isInvoiceListFilter}
            isTicketsListFilter={isTicketsListFilter}
            isNFTRankingFilter={isNFTRankingFilter}
            isTaskListFilter={isTaskListFilter}
            SearchPlaceholder={SearchPlaceholder}
          />
        )}
        {isAddOptions && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                color="success"
                className="rounded-pill  mb-2 me-2"
                onClick={handleOrderClicks}
              >
                <i className="mdi mdi-plus me-1" />
                Add New Order
              </Button>
            </div>
          </Col>
        )}
        {isAddUserList && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                color="primary"
                className="btn mb-2 me-2"
                onClick={handleUserClick}
              >
                <i className="mdi mdi-plus-circle-outline me-1" />
                Create New User
              </Button>
            </div>
          </Col>
        )}
        {isAddCustList && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                color="success"
                className="rounded-pill mb-2 me-2"
                onClick={handleCustomerClick}
              >
                <i className="mdi mdi-plus me-1" />
                New Customers
              </Button>
            </div>
          </Col>
        )}
      </Row>


      <div className={divClass}>
        <Table hover {...getTableProps()} className={tableClass}>
          <thead className={theadClass}>
            {headerGroups.map((headerGroup : any) => (
              <tr className={trClass} key={headerGroup.id}  {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column : any) => (
                  <th key={column.id} className={thClass} {...column.getSortByToggleProps()}>
                    {column.render("Header")}
                    {generateSortingIndicator(column)}
                    {/* <Filter column={column} /> */}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row : any) => {
              prepareRow(row);
              return (
                <Fragment key={row.getRowProps().key}>
                  <tr>
                    {row.cells.map((cell : any) => {
                      return (
                        <td key={cell.id} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </Table>
      </div>
      
      <Row className="align-items-center mt-2 g-3 text-center text-sm-start">
        <div className="col-sm">
            <div className="text-muted">Showing<span className="fw-semibold ms-1">{page.length}</span> of <span className="fw-semibold">{data.length}</span> Results
            </div>
        </div>
        <div className="col-sm-auto">
            <ul className="pagination pagination-separated pagination-md justify-content-center justify-content-sm-start mb-0">
                <li className={!canPreviousPage ? "page-item disabled" : "page-item"}>
                    <Link to="#"  className="page-link" onClick={previousPage}>Previous</Link>
                </li>
                {pageOptions.map((item : any, key : any) => (
                  <React.Fragment key={key}>
                      <li className="page-item">
                          <Link to="#" className={pageIndex === item ? "page-link active" : "page-link"} onClick={() => gotoPage(item)}>{item + 1}</Link>
                      </li>
                  </React.Fragment>
                ))}
                <li className={!canNextPage ? "page-item disabled" : "page-item"}>
                    <Link to="#"  className="page-link" onClick={nextPage}>Next</Link>
                </li>
            </ul>
        </div>
      </Row>
    </Fragment>
  );
};

TableContainer.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default TableContainer;