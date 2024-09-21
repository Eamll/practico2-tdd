import { IGrupoCliente } from "./grupo-cliente.entity";

export interface ICliente {
    codigo: string;
    nombre: string;
    grupo: IGrupoCliente;
}