import { Route, Routes } from "react-router-dom"
import { Donate } from "./Donate"
import { Home } from "./Home"
import { MyProducts} from "./MyProducts"
import { ProductRecipe } from "./ProductRecipe"
import { Recipe } from "./Recipe"


export const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Despensa" element={<MyProducts />} />
        <Route path="/Recetas" element={<Recipe />} />
        <Route path="/Recetas/:nombre" element={<ProductRecipe />} />
        <Route path="/Donar" element={<Donate />} />
    </Routes>
  )
}
