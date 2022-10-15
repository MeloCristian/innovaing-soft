import { Column, Model, PrimaryKey, Table, DataType, AutoIncrement } from 'sequelize-typescript'


@Table({
    initialAutoIncrement: '1000',
    tableName: 'product'
})
export class Product extends Model<Product>{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id!: number

    @Column(DataType.STRING)
    name!: string

    @Column(DataType.STRING(120))
    code!: string

    @Column(DataType.FLOAT)
    stock!: number

    @Column(DataType.FLOAT)
    price!: number

    @Column(DataType.TEXT)
    description!: string
}