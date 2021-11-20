import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Grupo} from './grupo.model';
import {Perfil} from './perfil.model';
import {UsuarioPorGrupo} from './usuario-por-grupo.model';

@model()
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  Contrasenia: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  Apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  TipoDocumento: string;

  @property({
    type: 'number',
    required: true,
  })
  NumDocumento: number;

  @property({
    type: 'string',
    required: true,
  })
  Correo: string;

  @property({
    type: 'string',
    required: true,
  })
  CodigoUniversitario: string;

  @property({
    type: 'string',
    required: true,
  })
  IdPrograma: string;

  @property({
    type: 'number',
    required: true,
  })
  Ciclo: number;

  @property({
    type: 'string',
  })
  Genero?: string;

  @property({
    type: 'string',
    required: true,
  })
  TipoUsuario: string;

  @property({
    type: 'boolean',
  })
  Incapacidad?: boolean;

  @property({
    type: 'date',
  })
  FechaCreacion?: string;

  @hasMany(() => Perfil)
  perfils: Perfil[];

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
