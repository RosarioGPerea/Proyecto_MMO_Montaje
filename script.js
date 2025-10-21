/* ====== DATOS DE COMPONENTES (con detalles y srcs representativos) ======
   Nota: no he podido raspar PCPartPicker (403). He tomado imágenes representativas
   de fabricantes / distribuidores y precios aproximados. Si quieres que reemplace
   por las imágenes exactas de PCPartPicker pásamelas o dime y las actualizo.
======================================================================*/

/* PC OFICINA (componentes según tus enlaces) */
const officePC = {
  id: "office",
  name: "PC Oficina (APU AMD)",
  cover: "src/Oficina/Caja_Oficina.jpg", // portada genérica
  components: [
    {
      key: "cpu",
      name: "AMD Ryzen 7 5700G",
      subtitle: "APU 8c/16t — 3.8 GHz base, boost hasta 4.6 GHz — Gráfica integrada Vega",
      details: [
        "Cores/Threads: 8 / 16",
        "Base / Boost: 3.8 GHz / 4.6 GHz",
        "iGPU: Radeon Vega integrada (idéntica para tareas ofimáticas y vídeo)",
        "TDP: 65 W",
        "Socket: AM4"
      ],
      priceEUR: 170,
      // imagen representativa oficial AMD / o vendedor
      src: "src/Oficina/CPU_Oficina.jpg"
    },
    {
      key: "ram",
      name: "Corsair Vengeance LPX 32GB (2x16) DDR4-3600",
      subtitle: "Kit 32 GB — DDR4-3600 CL18 — perfil XMP",
      details: [
        "Configuración: 2 x 16 GB",
        "Velocidad: 3600 MHz",
        "Latencia: CL18",
        "Perfil XMP para fácil overclock"
      ],
      priceEUR: 95,
      src: "src/Oficina/RAM_Oficina.jpg"
    },
    {
      key: "ssd",
      name: "Acer Predator GM7000 1TB M.2 NVMe",
      subtitle: "SSD NVMe M.2 2280 — rendimiento alto — lectura/escritura secuencial competitiva",
      details: [
        "Formato: M.2 2280 NVMe",
        "Capacidad: 1 TB",
        "Interfaz: PCIe (varía por modelo, suele ser PCIe 4.0)",
        "Ideal para sistema y juegos ligeros"
      ],
      priceEUR: 90,
      src: "src/Oficina/SSD_Oficina.jpg" // placeholder si prefieres lo cambio
    },
    {
      key: "case",
      name: "Cooler Master MasterBox Q300L (mATX)",
      subtitle: "Torre microATX / Mini-Tower — diseño compacto y modular",
      details: [
        "Formato: MicroATX / Mini Tower",
        "Panel con rejilla y soporte vertical de GPU",
        "Compatibilidad radiadores: 120/240 mm en frontal superior"
      ],
      priceEUR: 45,
      src: "src/Oficina/Caja_Oficina.jpg"
    },
    {
      key: "psu",
      name: "MSI MAG A750GL (750W) 80+ Gold",
      subtitle: "Fuente 750W totalmente modular — certificación 80+ Gold",
      details: [
        "Potencia: 750 W",
        "Eficiencia: 80+ Gold",
        "Fully modular",
        "Protecciones: OVP / UVP / SCP / OCP"
      ],
      priceEUR: 115,
      src: "src/Oficina/Power_Oficina.jpg"
    },
    {
      key: "motherboard",
      name: "Placa base compatible AM4 (ej: B550 mATX)",
      subtitle: "Placa microATX B550 — soporte para Ryzen 5000, M.2 NVMe, 2x DDR4",
      details: [
        "Socket: AM4",
        "Chipset: B550 (ejemplo)",
        "Soporta hasta 128 GB DDR4",
        "Slots M.2 y PCIe 4.0 (según modelo)"
      ],
      priceEUR: 110,
      src: "src/Oficina/MB_Oficina.jpg"
    }
  ],
  assemblyFeeEUR: 20
};

/* PC GAMING */
const gamingPC = {
  id: "gaming",
  name: "PC Gaming (High-End)",
  cover: "src/Gaming/Caja_Gaming.jpg", // portada genérica
  components: [
    {
      key: "cpu",
      name: "AMD Ryzen 9 9950X3D",
      subtitle: "16c/32t — 4.3 GHz base — 3D V-Cache (optimizado para juegos)",
      details: [
        "Cores/Threads: 16 / 32",
        "Base / Boost: 4.3 GHz (nominal)",
        "Tecnología: 3D V-Cache para mejor latencia en juegos",
        "TDP estimado: 120 W"
      ],
      priceEUR: 800,
      src: "src/Gaming/CPU_Gaming.jpg"
    },
    {
      key: "cpu-cooler",
      name: "Corsair iCUE LINK Titan 360 RX (AIO 360 + LCD)",
      subtitle: "Refrigeración líquida 360 mm con bloque LCD y alta capacidad de flujo",
      details: [
        "Radiador: 360 mm",
        "Bombeo: alto flujo",
        "Incluye ventiladores 120 mm de alto rendimiento",
        "Control via iCUE"
      ],
      priceEUR: 280,
      src: "src/Gaming/Cooler_Gaming.jpg"
    },
    {
      key: "motherboard",
      name: "Gigabyte X870E AORUS Elite WiFi7 (ATX)",
      subtitle: "Placa base AM5 X870E — PCIe 5.0 / DDR5 / WiFi 7",
      details: [
        "Socket: AM5",
        "Chipset: X870E",
        "Soporta DDR5 hasta 7600+",
        "PCIe 5.0 x16, múltiples M.2"
      ],
      priceEUR: 400,
      src: "src/Gaming/Motherboard_Gaming.jpg"
    },
    {
      key: "ram",
      name: "Corsair Dominator Titanium 64GB (2x32) DDR5-6600 CL32",
      subtitle: "Kit 64 GB DDR5 6600 — kit premium Dominator Titanium",
      details: [
        "Config: 2 x 32 GB",
        "Vel: 6600 MHz",
        "Latencia: CL32",
        "RGB & disipadores premium"
      ],
      priceEUR: 420,
      src: "src/Gaming/RAM_Gaming.jpg"
    },
    {
      key: "ssd",
      name: "Samsung 9100 Pro 4 TB (PCIe 5.0)",
      subtitle: "NVMe M.2 4 TB — PCIe 5.0 x4 — altísimas lecturas/escrituras",
      details: [
        "Formato: M.2 2280",
        "Capacidad: 4 TB",
        "Interfaz: PCIe 5.0 x4",
        "Ideal para librerías grandes y edición 4K"
      ],
      priceEUR: 650,
      src: "src/Gaming/SSD_Gaming.jpg"
    },
    {
      key: "gpu",
      name: "Gigabyte GeForce RTX 5070 Ti Gaming OC 16GB",
      subtitle: "GPU de gama alta para 1440p/4K con 16 GB GDDR",
      details: [
        "VRAM: 16 GB",
        "Salida: 1x HDMI, 3x DisplayPort",
        "Soporte DLSS / Ray Tracing",
        "Refrigeración: triple ventilador"
      ],
      priceEUR: 700,
      src: "src/Gaming/GPU_Gaming.jpg"
    },
    {
      key: "case",
      name: "NZXT H9 Elite",
      subtitle: "Caja ATX Mid Tower — gran flujo, estética premium y cristal templado",
      details: [
        "Formato: ATX Mid Tower",
        "Panel lateral: Cristal templado",
        "Compatibilidad radiador: hasta 360/420 mm",
        "Diseño: gestión de cables mejorada"
      ],
      priceEUR: 220,
      src: "src/Gaming/Caja_Gaming.jpg"
    },
    {
      key: "psu",
      name: "Corsair RM1000x (2024) 1000W",
      subtitle: "Fuente 1000 W — totalmente modular — excelente eficiencia",
      details: [
        "Potencia: 1000 W",
        "Eficiencia: 80+ Gold / Platinum (según versión)",
        "Modular: full modular",
        "Conectores PCIe suficientes para GPUs tope"
      ],
      priceEUR: 200,
      src: "src/Gaming/Power_Gaming.jpg"
    },
    {
      key: "fans-1",
      name: "Lian Li UNI FAN SL Wireless (3-pack)",
      subtitle: "Pack ventiladores 120 mm — reverse-blade — wireless controller",
      details: [
        "3-pack, control inalámbrico",
        "Flujo: ~64 CFM cada uno",
        "RGB y sincronización con hub"
      ],
      priceEUR: 80,
      src: "src/Gaming/Ventiladores_Gaming.jpg"
    },
    {
      key: "fans-2",
      name: "Lian Li UNI FAN SL Wireless (3-pack) — Pack 2",
      subtitle: "Segundo pack para push/pull o frontal+top",
      details: ["Mismo pack adicional (3 ventiladores)"],
      priceEUR: 80,
      src: "src/Gaming/Ventiladores_Gaming.jpg"
    },
    {
      key: "fan-hub",
      name: "Arctic Case Fan Hub (ACFAN00175A)",
      subtitle: "Hub para gestionar ventiladores y luces (alimentación simple)",
      details: ["Permite centralizar 6+ fans", "Pequeño y fácil de instalar"],
      priceEUR: 25,
      src: "src/Gaming/HUB_FAN_Gaming.jpg"
    }
  ],
  assemblyFeeEUR: 50
};


/* ====== UTILIDADES UI ====== */

function formatEUR(v){
  return typeof v === "number" ? v.toLocaleString("es-ES", {style:"currency", currency:"EUR"}) : v;
}

/* Render portada + nombres + totals */
function renderHeader(pcObj){
  const nameEl = document.getElementById(pcObj.id + "-name");
  const coverEl = document.getElementById(pcObj.id + "-cover");
  const totalEl = document.getElementById(pcObj.id + "-total");

  nameEl.textContent = pcObj.name;
  coverEl.src = pcObj.cover;
  // total components
  const sum = pcObj.components.reduce((s, c)=> s + (c.priceEUR||0), 0) + (pcObj.assemblyFeeEUR||0);
  totalEl.textContent = `Total aprox.: ${formatEUR(sum)}`;
  // also store computed sum
  pcObj._computedTotal = sum;
}

/* Render lista de componentes */
function renderComponents(pcObj){
  const list = document.getElementById(pcObj.id + "-components");
  list.innerHTML = "";
  pcObj.components.forEach((c, idx) => {
    const li = document.createElement("li");
    li.className = "component-item fade-in";
    li.dataset.src = c.src || "";
    li.dataset.name = c.name;
    li.dataset.price = c.priceEUR || 0;
    li.dataset.subtitle = c.subtitle || "";
    li.innerHTML = `
      <div>
        <div class="title">${c.name}</div>
        <div class="meta">${c.subtitle}</div>
        <small>${c.details.slice(0,3).join(" • ")}</small>
      </div>
      <div class="meta">${c.details[0] || ""}</div>
      <div class="price">${formatEUR(c.priceEUR)}</div>
    `;
    // mouse events for preview
    li.addEventListener("mouseenter", (e) => showPreview(e.currentTarget));
    li.addEventListener("mousemove", movePreview);
    li.addEventListener("mouseleave", hidePreview);
    list.appendChild(li);
  });
}

/* Preview logic */
const preview = document.getElementById("preview");
const previewImg = document.getElementById("preview-img");
const previewMeta = document.getElementById("preview-meta");
function showPreview(target){
  const src = target.dataset.src;
  const name = target.dataset.name;
  const price = target.dataset.price;
  previewImg.src = src || "https://via.placeholder.com/400x200?text=Imagen+no+disponible";
  previewMeta.innerHTML = `<strong>${name}</strong><div style="font-size:0.9rem;color:#6b7280;margin-top:6px">${formatEUR(Number(price))}</div>`;
  preview.classList.add("preview-visible");
}
function movePreview(ev){
  // On small screens preview is fixed; on wide screens we can offset a bit from mouse if wanted.
  // Keep it simple: preview fixed bottom-right (CSS handles), no extra movement.
}
function hidePreview(){
  preview.classList.remove("preview-visible");
}

/* Toggle component lists (mobile friendly) */
document.getElementById("office-toggle").addEventListener("click", ()=>{
  document.getElementById("office-components").classList.toggle("hidden");
});
document.getElementById("gaming-toggle").addEventListener("click", ()=>{
  document.getElementById("gaming-components").classList.toggle("hidden");
});

/* Render comparativa: produce un set de claves y rellena con la info principal (subtitle + price) */
function renderComparison(pcA, pcB){
  const tbody = document.getElementById("comparison-body");
  tbody.innerHTML = "";
  // keys: union of component keys
  const keys = Array.from(new Set([...pcA.components.map(c=>c.key), ...pcB.components.map(c=>c.key)]));
  keys.forEach((k, i) => {
    const aComp = pcA.components.find(c=> c.key===k);
    const bComp = pcB.components.find(c=> c.key===k);
    const tr = document.createElement("tr");
    tr.className = "fade-in";
    tr.style.animationDelay = `${i*40}ms`;
    tr.innerHTML = `
      <td style="min-width:220px">${(aComp?.name || bComp?.name || k)}</td>
      <td>${aComp ? `${aComp.subtitle}<br><small>${aComp.details.slice(0,2).join(" • ")}</small><div style="font-weight:700;margin-top:6px">${formatEUR(aComp.priceEUR)}</div>` : "-"}</td>
      <td>${bComp ? `${bComp.subtitle}<br><small>${bComp.details.slice(0,2).join(" • ")}</small><div style="font-weight:700;margin-top:6px">${formatEUR(bComp.priceEUR)}</div>` : "-"}</td>
    `;
    tbody.appendChild(tr);
  });

  // totals in footer
  document.getElementById("cmp-office-total").textContent = formatEUR(pcA._computedTotal);
  document.getElementById("cmp-gaming-total").textContent = formatEUR(pcB._computedTotal);
}

/* Initialize UI */
function init(){
  renderHeader(officePC);
  renderHeader(gamingPC);
  renderComponents(officePC);
  renderComponents(gamingPC);
  renderComparison(officePC, gamingPC);

  // Un-hide lists on wide screens by default
  if(window.innerWidth > 900){
    document.getElementById("office-components").classList.remove("hidden");
    document.getElementById("gaming-components").classList.remove("hidden");
  }
}

init();

/* Accessibility: hide preview on touch devices when touching elsewhere */
document.addEventListener("touchstart", (e)=>{
  if(!e.target.closest(".component-item")) hidePreview();
});
