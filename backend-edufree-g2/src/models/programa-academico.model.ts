import {Entity, model, property, hasMany} from '@loopback/repository';
import {Asignatura} from './asignatura.model';

@model()
export class ProgramaAcademico extends Entity {
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
  NombrePrograma: string;

  @property({
    type: 'string',
    required: true,
  })
  CodigoPrograma: string;

  @property({
    type: 'number',
    required: true,
  })
  Duracion: number;

  @property({
    type: 'number',
    required: true,
  })
  TotalCreditos: number;

  @property({
    type: 'string',
    required: true,
  })
  Nivel: string;

  @property({
    type: 'string',
    required: true,
  })
  Modalidad: string;

  @property({
    type: 'date',
  })
  FechaCreacion?: string;

  @hasMany(() => Asignatura)
  asignaturas: Asignatura[];

  constructor(data?: Partial<ProgramaAcademico>) {
    super(data);
  }
}

export interface ProgramaAcademicoRelations {
  // describe navigational properties here
}

export type ProgramaAcademicoWithRelations = ProgramaAcademico & ProgramaAcademicoRelations;
