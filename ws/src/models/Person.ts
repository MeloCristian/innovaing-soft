import { Invoice } from './Invoice';
import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript'
import { User } from './User';

@Table({
    initialAutoIncrement: '1000',
    timestamps: true,
    tableName: 'person'
})
export class Person extends Model<Person>{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id!: number

    @Unique
    @Column(DataType.STRING(255))
    dni!: string

    @Column(DataType.STRING)
    name!: string;

    @Column(DataType.STRING)
    lastName!: string;

    @Column(DataType.STRING)
    adrress!: string;

    @Column(DataType.STRING)
    phone!: string;

    @HasMany(()=>User)
    users?: User[]

    @HasMany(()=>Invoice)
    invoices?: Invoice[]
}