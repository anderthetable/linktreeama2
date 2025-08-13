export const menuItems = [
  {
    name: "Ropa de Mujer",
    href: "/mujer",
    icon: "woman"
  },
  {
    name: "Ropa de Hombre",
    href: "/hombre",
    icon: "man"
  },
  {
    name: "Accesorios",
    href: "/accesorios",
    icon: "bag",
    submenu: [
      { name: "Bolsos", href: "/accesorios/bolsos" },
      { name: "Joyería", href: "/accesorios/joyeria" },
      { name: "Zapatos", href: "/accesorios/zapatos" }
    ]
  },
  {
    name: "Ofertas",
    href: "/ofertas",
    icon: "tag"
  },
  {
    name: "Nuevos Productos",
    href: "/nuevos",
    icon: "star"
  },
  {
    name: "Contacto",
    href: "/contacto",
    icon: "phone"
  }
];
