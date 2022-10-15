import { Role } from './Role';
import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript'
import { Person } from './Person'

@Table({
    initialAutoIncrement: '1000',
    timestamps: true,
    tableName: 'user'
})
export class User extends Model<User>{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id!: number
   
    @ForeignKey(() => Person)
    @Column({
        field: "id_person",
        type: DataType.INTEGER
    })
    idPerson!: number

    @ForeignKey(() => Role)
    @Column({
        field: "id_role",
        type: DataType.INTEGER
    })
    idRole!: number

    @Unique
    @Column(DataType.STRING(255))
    email!: string

    @Column(DataType.STRING(255))
    password!: string

    @BelongsTo(()=>Person)
    person?: Person

    @BelongsTo(()=>Role)
    role?: Role

}