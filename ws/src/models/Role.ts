import { User } from './User';
import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript'

@Table({
    initialAutoIncrement: '1000',
    timestamps: true,
    tableName: 'role'
})
export class Role extends Model<Role>{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id!: number

    @Unique
    @Column(DataType.STRING(255))
    name!: string
    
    @Column(DataType.ENUM('CLIENT', 'ADMIN','SELLER'))
    type!: string

    @Column(DataType.STRING)
    description!: string;

    @HasMany(()=>User)
    users?: User[]
}