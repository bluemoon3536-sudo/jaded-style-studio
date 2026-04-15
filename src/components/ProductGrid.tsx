import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

const products = [
  { id: 1, name: "Oversized Graphic Tee", price: "$72.00", image: product1, badge: "New" },
  { id: 2, name: "Cargo Jogger Pants", price: "$110.00", image: product2 },
  { id: 3, name: "Cropped Hoodie", price: "$95.00", image: product3, badge: "Trending" },
  { id: 4, name: "Printed Wide-Leg Jeans", price: "$140.00", image: product4 },
  { id: 5, name: "Neon Mesh Top", price: "$68.00", image: product5, badge: "New" },
  { id: 6, name: "Distressed Denim Jacket", price: "$155.00", image: product6 },
  { id: 7, name: "Parachute Cargo Shorts", price: "$100.00", image: product7 },
  { id: 8, name: "Lace-Up Corset Top", price: "$120.00", image: product8, badge: "Selling Fast" },
];

const ProductGrid = () => {
  return (
    <section className="px-4 py-16">
      <h2 className="text-foreground text-center text-xs tracking-[0.3em] uppercase font-medium mb-12">
        Trending Now
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8">
        {products.map((product) => (
          <a key={product.id} href="#" className="group cursor-pointer">
            <div className="relative overflow-hidden mb-3 aspect-[3/4] bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                width={800}
                height={1024}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.badge && (
                <span className="absolute top-2 left-2 bg-product-badge text-product-badge-foreground text-[9px] tracking-[0.1em] uppercase px-2 py-1 font-medium">
                  {product.badge}
                </span>
              )}
            </div>
            <p className="text-foreground text-xs font-medium tracking-wide leading-tight">
              {product.name}
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              {product.price}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
