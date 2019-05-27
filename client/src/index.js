import React, {Component} from "react"
import ReactDOM from "react-dom"

import MapContainer from './component/map'
import {Route, BrowserRouter} from 'react-router-dom'



class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={MapContainer} />
            </div>
        )
    }
}

ReactDOM.render(<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById("root"))
