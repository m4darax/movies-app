import { Route, Routes } from "react-router-dom"
import { MovieRoutes } from "./routes/MovieRoutes"
import { Provider } from "react-redux"
import { store } from "./store/store"

export const MoviesApp = () => {

  return (
    <>
    <Provider store={store}>
      <Routes>
        <Route path="/*" element={<MovieRoutes/>}/>
      </Routes>
    </Provider>
    </>
  )
}
