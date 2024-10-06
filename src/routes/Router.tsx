import { Route, Routes } from "react-router-dom"
import { RoutesData } from "./RoutesData"
import { IRoute } from "../interfaces/Route.interface"


function Router() {
    const routes = RoutesData?.map(({title, path, element }: IRoute) => {
      return (
          <Route key={title} path={path} element={element} />
      )  
    })

    return <Routes>{routes}</Routes>
}

export default Router