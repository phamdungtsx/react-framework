import React from 'react'
import HelloWorldService from '~/service/chap3/HelloWorldService'

function App() {
    return (
        <div className="App">
            {HelloWorldService.print()}
        </div>
    )
}

export default App
