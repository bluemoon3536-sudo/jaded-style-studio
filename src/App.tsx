import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Womenswear from "./pages/Womenswear.tsx";
import Menswear from "./pages/Menswear.tsx";
import InfoPage from "./pages/InfoPage.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
import CartDrawer from "./components/CartDrawer";
import { useCartSync } from "./hooks/useCartSync";

const queryClient = new QueryClient();

const AppShell = () => {
  useCartSync();
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/womenswear" element={<Womenswear />} />
        <Route path="/menswear" element={<Menswear />} />
        <Route path="/product/:handle" element={<ProductDetail />} />
        <Route path="/contact" element={<InfoPage titleKey="footer.links.contact" bodyKey="info.contact" />} />
        <Route path="/delivery" element={<InfoPage titleKey="footer.links.delivery" bodyKey="info.delivery" />} />
        <Route path="/returns" element={<InfoPage titleKey="footer.links.returns" bodyKey="info.returns" />} />
        <Route path="/size-guide" element={<InfoPage titleKey="footer.links.sizeGuide" bodyKey="info.sizeGuide" />} />
        <Route path="/faq" element={<InfoPage titleKey="footer.links.faq" bodyKey="info.faq" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CartDrawer />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
