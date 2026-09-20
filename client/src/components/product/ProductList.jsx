import { useState } from "react";
import ProductLayoutBar from "./ProductLayoutBar";
import ProductCard from "@/components/product/ProductCard";
import ProductCardListView from "@/components/product/ProductCardListView";

function ProductList() {
  const [itemView, setItemView] = useState("grid");

  return (
    <div>
      <h2 className="text-[22px] font-semibold mb-3">Fashion</h2>
      <div>
        <ProductLayoutBar itemView={itemView} setItemView={setItemView} />
      </div>
      <div
        className={
          itemView === "grid"
            ? "grid grid-cols-4 md:grid-cols-4 gap-3 pt-4"
            : "flex flex-col gap-3 pt-4"
        }
      >
        {itemView === "grid" ? (
          <>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </>
        ) : (
          <>
            <ProductCardListView />
            <ProductCardListView />
            <ProductCardListView />
            <ProductCardListView />
            <ProductCardListView />
            <ProductCardListView />
          </>
        )}
      </div>
    </div>
  );
}

export default ProductList;
