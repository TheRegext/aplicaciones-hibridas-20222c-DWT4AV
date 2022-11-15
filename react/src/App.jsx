import Counter  from "./components/Counter"
import ProductsListPage from "./pages/ProductsListPage"
import Border from "./components/Border"

function App(){
    // Logica

    return (
        // Visual
        <div>
            <Border>
                <Counter min={0} max={10}/>
            </Border>
            <Border>
                <Counter min={0} max={10}/>
            </Border>
            <ProductsListPage />
        </div>
    )
}

export default App