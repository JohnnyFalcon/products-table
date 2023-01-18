import { ProductsProvider } from "./contexts/ProductsContext";
import Main from "./components/Main/Main";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <ProductsProvider>
        <Main />
      </ProductsProvider>
    </>
  );
}

export default App;
