const SalesLog = () => {
    return (
        <div>
          <h1>Sales Log</h1>
          <table border={1}>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Quantity Sold</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Product A</td>
                <td>10</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Product B</td>
                <td>5</td>
                <td>$50</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
}
export default SalesLog