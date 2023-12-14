import Link from 'next/link';

const ProductManagement = () => {
  return (
    <div>
      <h1>Product Management</h1>
      <nav>
        <ul>
          <li>
            <Link href="/system/product_management/existing_products">
              Existing Products
            </Link>
          </li>
          <li>
            <Link href="/system/product_management/upcoming_products">
              Upcoming Products
            </Link>
          </li>
          <li>
            <Link href="/system/product_management/add_product">
              Add Product
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h2>Dashboard</h2>
        <p>Number of existing products: dymmy</p>
        <p>Number of upcoming products: dummy</p>
      </div>
    </div>
  );
}

export default ProductManagement;