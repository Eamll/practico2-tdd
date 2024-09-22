import { IGrupoCliente } from "./IGrupoCliente";

export interface ICliente {
    cliente_id: string;
    codigo: string;
    nombre: string;
    grupo: IGrupoCliente;
}