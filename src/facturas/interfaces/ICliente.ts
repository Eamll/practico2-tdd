import { IGrupoCliente } from "./IGrupoCliente";

export interface ICliente {
    codigo: string;
    nombre: string;
    grupo: IGrupoCliente;
}