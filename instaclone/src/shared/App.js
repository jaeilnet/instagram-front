import { BrowserRouter, Route, Switch } from "react-router-dom"
import { PostList } from "../pages/PostList"
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={PostList} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
