import ProductBreadcrumbs from "@/components/breadcrumbs/ProductBreadcrumbs";
import ProductFilter from "@/components/product/ProductFilter";
import ProductList from "@/components/product/ProductList";

function ProductCategory() {
  return (
    <div>
      <ProductBreadcrumbs />
      <div className="py-8 bg-white">
        <div className="container">
          <div className="flex flex-row min-h-screen ">
            <div className="w-[30%]">
              <ProductFilter />
            </div>
            <div className="w-[70%]">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
