import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import { format } from 'date-fns'


export default function SortingTable(props) {
  const Columns = useMemo(() => [
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
  }, useSortBy)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow } = tableInstance
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
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                })}

              </tr>
            )
          })
        }

      </tbody>
    </table>
  )
}
