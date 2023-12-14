

const SearchProducts = ({params}:{params: {productid: string}}) => {
  return (
    <div>
        <h1>Search Products</h1>
        <h1 style={{color:'red'}}>Product Id: {params.productid}</h1>
    </div>
  )
}
export default SearchProducts