import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {ProgramaAcademico} from './programa-academico.model';
import {Grupo} from './grupo.model';

@model()
export class Asignatura extends Entity {
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
  Nombre: string;

  @property({
    type: 'date',
  })
  FechaCreacion?: string;

  @property({
    type: 'string',
    required: true,
  })
  Tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  Codigo: string;

  @property({
    type: 'number',
    required: true,
  })
  Creditos: number;

  @belongsTo(() => ProgramaAcademico)
  programaAcademicoId: string;

  @hasMany(() => Grupo)
  grupos: Grupo[];

  constructor(data?: Partial<Asignatura>) {
    super(data);
  }
}

export interface AsignaturaRelations {
  // describe navigational properties here
}

export type AsignaturaWithRelations = Asignatura & AsignaturaRelations;
