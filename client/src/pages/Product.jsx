import ProductBreadcrumbs from "@/components/breadcrumbs/ProductBreadcrumbs";
import ProductDetail from "@/components/product/ProductDetail";
import RelatedProducts from "@/components/product/RelatedProducts";

function Product() {
  return (
    <div>
      <ProductBreadcrumbs />
      <ProductDetail />
      <RelatedProducts />
    </div>
  );
}

export default Product;
