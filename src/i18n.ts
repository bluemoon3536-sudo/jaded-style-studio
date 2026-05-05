import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: { women: "Women", men: "Men", denim: "Denim", newIn: "New In", search: "Search", cart: "Cart", menu: "Menu" },
      hero: { women: "Womenswear", men: "Menswear" },
      page: { comingSoon: "New collection coming soon." },
      mens: {
        heroTagline: "The new drop is here",
        heroCta: "Shop the collection",
        shopByCategory: "Shop by category",
        categories: { tops: "Tops", bottoms: "Bottoms", outerwear: "Outerwear", denim: "Denim", accessories: "Accessories", all: "Shop all" },
        featured: "Featured",
        newArrivals: "New arrivals",
        viewAll: "View all",
        editorialTitle: "Built for the night",
        editorialText: "Bold silhouettes, raw textures and statement pieces designed to be lived in.",
        editorialCta: "Explore"
      },
      womens: {
        heroTagline: "The new drop is here",
        heroCta: "Shop the collection",
        editorialTitle: "Effortless femininity",
        editorialText: "Soft tailoring, fluid silhouettes and refined details designed to move with you."
      },
      search: { placeholder: "Search...", suggestions: "Suggestions", close: "Close" },
      cart: { title: "Cart", empty: "Your cart is empty.", total: "Total", checkout: "Checkout", remove: "Remove", increase: "Increase", decrease: "Decrease" },
      footer: {
        customerService: "Customer Service",
        brand: "Brand",
        followUs: "Follow Us",
        stayPosted: "Stay Posted",
        newsletter: "Sign up to our Newsletter for latest news, offers and updates.",
        email: "Email",
        submit: "Submit",
        rights: "© 2025 All rights reserved.",
        links: {
          contact: "Contact Us", delivery: "Delivery", returns: "Returns", sizeGuide: "Size Guide", faq: "FAQ"
        }
      },
      lang: { label: "Language" }
    },
  },
  tr: {
    translation: {
      nav: { women: "Kadın", men: "Erkek", denim: "Denim", newIn: "Yeni Gelenler", search: "Ara", cart: "Sepet", menu: "Menü" },
      hero: { women: "Kadın Koleksiyonu", men: "Erkek Koleksiyonu" },
      page: { comingSoon: "Yeni koleksiyon yakında burada." },
      mens: {
        heroTagline: "Yeni koleksiyon burada",
        heroCta: "Koleksiyonu keşfet",
        shopByCategory: "Kategoriye göre alışveriş",
        categories: { tops: "Üst Giyim", bottoms: "Alt Giyim", outerwear: "Dış Giyim", denim: "Denim", accessories: "Aksesuar", all: "Tümünü gör" },
        featured: "Öne Çıkanlar",
        newArrivals: "Yeni gelenler",
        viewAll: "Tümünü gör",
        editorialTitle: "Gece için tasarlandı",
        editorialText: "Cesur siluetler, ham dokular ve giyilmek için tasarlanmış iddialı parçalar.",
        editorialCta: "Keşfet"
      },
      womens: {
        heroTagline: "Yeni koleksiyon burada",
        heroCta: "Koleksiyonu keşfet",
        editorialTitle: "Zahmetsiz feminenlik",
        editorialText: "Yumuşak kesimler, akıcı siluetler ve seninle birlikte hareket eden zarif detaylar."
      },
      search: { placeholder: "Ara...", suggestions: "Öneriler", close: "Kapat" },
      cart: { title: "Sepet", empty: "Sepetin boş.", total: "Toplam", checkout: "Ödemeye Geç", remove: "Kaldır", increase: "Arttır", decrease: "Azalt" },
      footer: {
        customerService: "Müşteri Hizmetleri",
        brand: "Marka",
        followUs: "Bizi Takip Et",
        stayPosted: "Haberdar Ol",
        newsletter: "En son haberler, fırsatlar ve güncellemeler için bültenimize abone ol.",
        email: "E-posta",
        submit: "Gönder",
        rights: "© 2025 Tüm hakları saklıdır.",
        links: {
          contact: "İletişim", delivery: "Teslimat", returns: "İadeler", sizeGuide: "Beden Rehberi", faq: "SSS"
        }
      },
      lang: { label: "Dil" }
    },
  },
  de: {
    translation: {
      nav: { women: "Damen", men: "Herren", denim: "Denim", newIn: "Neuheiten", search: "Suche", cart: "Warenkorb", menu: "Menü" },
      hero: { women: "Damenmode", men: "Herrenmode" },
      page: { comingSoon: "Neue Kollektion bald verfügbar." },
      mens: {
        heroTagline: "Die neue Kollektion ist da",
        heroCta: "Kollektion entdecken",
        shopByCategory: "Nach Kategorie shoppen",
        categories: { tops: "Oberteile", bottoms: "Hosen", outerwear: "Jacken", denim: "Denim", accessories: "Accessoires", all: "Alles anzeigen" },
        featured: "Highlights",
        newArrivals: "Neuheiten",
        viewAll: "Alle ansehen",
        editorialTitle: "Gemacht für die Nacht",
        editorialText: "Mutige Silhouetten, rohe Texturen und Statement-Pieces zum Tragen.",
        editorialCta: "Entdecken"
      },
      womens: {
        heroTagline: "Die neue Kollektion ist da",
        heroCta: "Kollektion entdecken",
        editorialTitle: "Mühelose Weiblichkeit",
        editorialText: "Weiche Schnitte, fließende Silhouetten und feine Details, die sich mit dir bewegen."
      },
      search: { placeholder: "Suchen...", suggestions: "Vorschläge", close: "Schließen" },
      cart: { title: "Warenkorb", empty: "Dein Warenkorb ist leer.", total: "Gesamt", checkout: "Zur Kasse", remove: "Entfernen", increase: "Erhöhen", decrease: "Verringern" },
      footer: {
        customerService: "Kundenservice",
        brand: "Marke",
        followUs: "Folge uns",
        stayPosted: "Bleib informiert",
        newsletter: "Melde dich für unseren Newsletter an: Neuigkeiten, Angebote und Updates.",
        email: "E-Mail",
        submit: "Absenden",
        rights: "© 2025 Alle Rechte vorbehalten.",
        links: {
          contact: "Kontakt", delivery: "Lieferung", returns: "Rücksendungen", sizeGuide: "Größentabelle", faq: "FAQ"
        }
      },
      lang: { label: "Sprache" }
    },
  },
  fr: {
    translation: {
      nav: { women: "Femme", men: "Homme", denim: "Denim", newIn: "Nouveautés", search: "Rechercher", cart: "Panier", menu: "Menu" },
      hero: { women: "Collection Femme", men: "Collection Homme" },
      page: { comingSoon: "Nouvelle collection bientôt disponible." },
      mens: {
        heroTagline: "La nouvelle collection est arrivée",
        heroCta: "Découvrir la collection",
        shopByCategory: "Shopper par catégorie",
        categories: { tops: "Hauts", bottoms: "Bas", outerwear: "Vestes", denim: "Denim", accessories: "Accessoires", all: "Tout voir" },
        featured: "À la une",
        newArrivals: "Nouveautés",
        viewAll: "Tout voir",
        editorialTitle: "Conçu pour la nuit",
        editorialText: "Silhouettes audacieuses, textures brutes et pièces fortes à vivre.",
        editorialCta: "Explorer"
      },
      womens: {
        heroTagline: "La nouvelle collection est arrivée",
        heroCta: "Découvrir la collection",
        editorialTitle: "Féminité sans effort",
        editorialText: "Coupes douces, silhouettes fluides et détails raffinés qui bougent avec vous."
      },
      search: { placeholder: "Rechercher...", suggestions: "Suggestions", close: "Fermer" },
      cart: { title: "Panier", empty: "Votre panier est vide.", total: "Total", checkout: "Passer la commande", remove: "Supprimer", increase: "Augmenter", decrease: "Diminuer" },
      footer: {
        customerService: "Service Client",
        brand: "Marque",
        followUs: "Suivez-nous",
        stayPosted: "Restez informé",
        newsletter: "Inscrivez-vous à notre newsletter pour les actualités, offres et mises à jour.",
        email: "E-mail",
        submit: "Envoyer",
        rights: "© 2025 Tous droits réservés.",
        links: {
          contact: "Contact", delivery: "Livraison", returns: "Retours", sizeGuide: "Guide des tailles", faq: "FAQ"
        }
      },
      lang: { label: "Langue" }
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "tr", "de", "fr"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
