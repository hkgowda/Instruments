import React from 'react'

export function DataCreation (data) {
  let tableData = []
  const instruments = Object.keys(data.instruments)

  instruments.map(p => {
    let rowData = {
      assetClass: data.instruments[p].assetClass,
      name: p,
      symbol: data.instruments[p].canonical_symbol,
      bid: data.prices[p] ? data.prices[p].bid : '',
      ask: data.prices[p] ? data.prices[p].ask : ''
    }

    return tableData.push(rowData)
  })

  return tableData
}
