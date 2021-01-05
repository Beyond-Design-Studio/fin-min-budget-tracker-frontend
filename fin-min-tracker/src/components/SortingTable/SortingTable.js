import React, { useMemo } from 'react'
import { useTable, useSortBy, useExpanded } from 'react-table'
import { format } from 'date-fns'


export default function SortingTable(props) {
  const Columns = useMemo(() => [
    {
      // Make an expander cell
      Header: () => null, // No header
      id: 'expander', // It needs an ID
      Cell: ({ row }) => (
        // Use Cell to render an expander for each row.
        // We can use the getToggleRowExpandedProps prop-getter
        // to build the expander.
        <span {...row.getToggleRowExpandedProps()}>
          {row.isExpanded ? '👇' : '👉'}
        </span>
      ),
    },
    {
      Header: 'Date',
      accessor: 'date',
      Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy') }
    },
    {
      Header: 'Type',
      accessor: 'type'
    },
    {
      Header: 'Details',
      accessor: 'details'
    },
    {
      Header: 'Category',
      accessor: 'category'
    },
    {
      Header: 'Amount',
      accessor: 'total'
    },
    {
      Header: 'Status',
      accessor: 'status'
    },
  ], [])
  const Data = useMemo(() => props.data, [])

  const tableInstance = useTable({
    columns: Columns,
    data: Data
  }, useSortBy, useExpanded)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    state: { expanded } } = tableInstance
  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <pre
        style={{
          fontSize: '10px',
        }}
      >
        <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
      </pre>
    ),
    []
  )
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (

          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? '↓' : '↑') : ''}
                </span>
              </th>
            ))}
          </tr>




        ))}

      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row)
            return (
              <>
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                  })}

                </tr>
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </>

            )
          })
        }

      </tbody>
    </table>
  )
}