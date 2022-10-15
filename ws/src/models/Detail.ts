import { Product } from './Product';
import { Invoice } from './Invoice';
import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, NotNull, PrimaryKey, Table } from 'sequelize-typescript'


@Table({
    initialAutoIncrement: '1000',
    timestamps: true,
    tableName: 'detail'
})
export class Detail extends Model<Detail>{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id!: number

    @ForeignKey(() => Invoice)
    @Column({
        field: "id_invoice",
        type: DataType.INTEGER,
        allowNull: false
    })
    idInvoice!: number

    @ForeignKey(() => Product)
    @Column({
        field: "id_product",
        type: DataType.INTEGER,
        allowNull: false
    })
    idProduct!: number

    @Column(DataType.INTEGER)
    quantity!: number

    @Column(DataType.FLOAT)
    price!: number

    @BelongsTo(()=>Invoice)
    invoice?: Invoice

    @BelongsTo(()=>Product)
    product?: Product

}