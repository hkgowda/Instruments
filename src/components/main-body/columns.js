import React from 'react'

export function Columns () {
  return ([
    {
      Header: 'Instrument',
      columns: [
        {
          Header: 'AssetClass',
          accessor: 'assetClass'
        },
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Symbol',
          accessor: 'symbol',
        },
      ],
    },
    {
      Header: 'Price',
      columns: [
        {
          Header: 'Bid',
          accessor: 'bid',
        },
        {
          Header: 'Ask',
          accessor: 'ask',
        }
      ],
    },
  ])
}
