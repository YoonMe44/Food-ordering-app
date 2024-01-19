export const AddProduct = ({ onAddProduct }) => {
    return(
        <div>
            <button onClick={onAddProduct} className="bg-yellow-400 hover:bg-yellow-500 rounded-full w-5 h-5 flex items-center justify-center text-lg">+</button>
        </div>
    )
}