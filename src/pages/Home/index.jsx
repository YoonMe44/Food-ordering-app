import {Banner} from "../../components/Banner"
import { About } from "../../components/About";
import { ProductsPreview } from "../../components/ProductsPreview";
const Home  = () =>{
    return(
        <div>
            <Banner/>
            <ProductsPreview/>
            <About/>
        </div>
    )
}
export default Home;