import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminStockPage() {
  const productos = await prisma.producto.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div>
          <h1 style={{ marginBottom: 6 }}>STOCK DE PRODUCTOS</h1>
          <p style={{ color: "var(--text-muted)" }}>
            Listado completo de equipos guardados ({productos.length} equipos).
          </p>
        </div>
        <Link href="/admin/agregar" className="btn btn-primary">
          + Agregar equipo
        </Link>
      </div>

      {productos.length === 0 ? (
        <div style={{ padding: 40, background: "rgba(255,255,255,0.05)", borderRadius: 12, textAlign: "center" }}>
          No hay productos guardados en la base de datos todavía.
        </div>
      ) : (
        <div style={{ display: "grid", gap: 16 }}>
          {productos.map((p) => (
            <div
              key={p.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 20px",
                background: "rgba(255,255,255,0.03)",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>
                  {p.modelo}{" "}
                  <span style={{ fontSize: "0.85rem", padding: "2px 8px", borderRadius: 6, background: p.estado === "NUEVO" ? "#22c55e22" : "#eab30822", color: p.estado === "NUEVO" ? "#4ade80" : "#facc15" }}>
                    {p.estado}
                  </span>
                </div>
                <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: 4 }}>
                  Categoría: {p.categoria} | Color: {p.color || "—"} | Memoria: {p.memoria || "—"} | Batería: {p.bateria || "—"}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "#38bdf8" }}>
                  USD {p.precioVenta}
                </div>
                {p.precioCosto && (
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    Costo: USD {p.precioCosto}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
