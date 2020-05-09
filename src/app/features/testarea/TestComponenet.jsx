import React, { Component } from 'react'
import {connect} from 'react-redux'
import {dec_c,inc_c} from "./testActions"
import { Button } from 'semantic-ui-react'

const mapState = (state) => ({
    data:state.test.data
})
const actions = {
    dec_c,
    inc_c
}

class TestComponenet extends Component {
    render() {
        const {data,inc_c,dec_c} = this.props
        return (
            <div>
                <h1>{data}</h1>
                <Button positive onClick={inc_c}>Inkrementuj</Button>
                <Button negative onClick={dec_c}>Dekrementuj</Button>
            </div>
        )
    }
}
export default connect(mapState,actions)(TestComponenet)