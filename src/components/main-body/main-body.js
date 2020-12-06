import React from "react";
import { Card } from "react-bootstrap";
import LoadingOverlay from 'react-loading-overlay';
import axios from 'axios'
import { InstrumentTable } from '../instrument-table'
import { DataCreation, Columns } from '../main-body'

import "./main-body.css";

export class MainBody extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      isReady: false,
      tableSchema: Columns()
    }
  }

  componentDidMount() {
    axios.get('https://data-fix.smt-data.com/fixprof/instruments/prices')
      .then(res => {
        console.log(Object.keys(res.data.instruments))
        // console.log(DataCreation(res.data))
        this.setState({
          data: DataCreation(res.data),
          isReady: true
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <Card className="mt-3">
          <Card.Body>
          {
            this.state.isReady
              ? <InstrumentTable columns={this.state.tableSchema} data={this.state.data}></InstrumentTable>
              : <LoadingOverlay
                  active={true}
                  spinner
                  text='Loading your content...'>
                </LoadingOverlay>
          }
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}
