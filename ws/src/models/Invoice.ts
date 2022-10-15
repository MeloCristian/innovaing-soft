import { Detail } from './Detail';
import { Person } from './Person';
import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, NotNull, PrimaryKey, Table, Unique } from 'sequelize-typescript'

@Table({
    initialAutoIncrement: '1000',
    timestamps: true,
    tableName: 'invoice'
})
export class Invoice extends Model<Invoice>{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id!: number

    @ForeignKey(() => Person)
    @Column({
        field: "id_cliente",
        type: DataType.INTEGER,
        allowNull: false
    })
    idCliente!: string

    @Column({
        field: "order_number",
        type: DataType.INTEGER
    })
    orderNumber!: number;

    @Column(DataType.DATE)
    date!: Date;

    @Column(DataType.FLOAT)
    total!: number;

    @Column(DataType.TEXT)
    description!: string;

    @BelongsTo(()=>Person)
    clients?: Person[]

    @HasMany(()=>Detail)
    details?: Detail[]
}