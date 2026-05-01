import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, X } from "lucide-react";

const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQty, removeItem, total, count } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={(o) => !o && closeCart()}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Sepet ({count})</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-12">
              Sepetin boş.
            </p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 border-b pb-4">
                {item.image && (
                  <img src={item.image} alt={item.name} className="h-20 w-16 object-cover" />
                )}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between gap-2">
                    <p className="text-sm font-medium">{item.name}</p>
                    <button onClick={() => removeItem(item.id)} aria-label="Kaldır">
                      <X size={16} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border">
                      <button
                        onClick={() => updateQty(item.id, item.quantity - 1)}
                        className="p-1.5"
                        aria-label="Azalt"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-2 text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQty(item.id, item.quantity + 1)}
                        className="p-1.5"
                        aria-label="Arttır"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <p className="text-sm font-medium">
                      ₺{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="border-t pt-4">
            <div className="w-full space-y-3">
              <div className="flex justify-between font-medium">
                <span>Toplam</span>
                <span>₺{total.toFixed(2)}</span>
              </div>
              <Button className="w-full" size="lg">Ödemeye Geç</Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
