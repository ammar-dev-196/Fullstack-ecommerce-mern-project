import ProductBreadcrumbs from "@/components/breadcrumbs/ProductBreadcrumbs";
import ProductDetail from "@/components/product/ProductDetail";
import RelatedProductsSlider from "@/components/product/RelatedProductsSlider";

function Product() {
  return (
    <div>
      <ProductBreadcrumbs />
      <ProductDetail />
      <RelatedProductsSlider />
    </div>
  );
}

export default Product;
