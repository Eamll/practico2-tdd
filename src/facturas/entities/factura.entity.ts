// src/facturas/entities/cliente.entity.ts
export class Cliente {
    codigo: string;
    nombre: string;
    grupo: GrupoCliente;
}

// src/facturas/entities/grupo-cliente.entity.ts
export class GrupoCliente {
    nombre: string;
    porcentajeDescuento: number;
}

// src/facturas/entities/producto.entity.ts
export class Producto {
    codigo: string;
    nombre: string;
    tipo: 'Producto' | 'Servicio';
}

// src/facturas/entities/factura.entity.ts
export class Factura {
    cliente: Cliente;
    productos: Producto[];
    almacen: string;
    condicionPago: string;
    formaEntrega: string;
    descuentos: Descuentos;
    total: number; // Calculado después de aplicar descuentos
}

// src/facturas/entities/descuentos.entity.ts
export class Descuentos {
    nivelItem: number; // Descuento a nivel de cada ítem en porcentaje
    nivelGlobal: number; // Descuento a nivel global en porcentaje
}
