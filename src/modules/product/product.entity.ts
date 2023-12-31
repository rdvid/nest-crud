import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    DeleteDateColumn,
    OneToMany
} from 'typeorm';
import { ProductCharacteristicEntity } from './product-characteristic.entity';
import { ProductImageEntity } from './product-image.entity';
import { OrderItemEntity } from '../order/orderitem.entity';

@Entity({ name: 'products'})
export class ProductEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', length: 100, nullable: false})
    name: string;

    @Column({ name: 'value', nullable: false})
    value: number;
    
    @Column({ name: 'available_quantity', nullable: false})
    availableQuantity: number;

    @Column({ name: 'description', length: 255, nullable: false})
    description: string;

    @Column({ name: 'category', length: 100, nullable: false})
    category: string;

    @OneToMany(() => ProductCharacteristicEntity, (productCharacteristicEntity) => 
                productCharacteristicEntity.product, { cascade: true, eager: true })
    characteristics: ProductCharacteristicEntity[];

    @OneToMany(() => ProductImageEntity, (ProductImageEntity) => 
                ProductImageEntity.product, { cascade: true, eager: true })
    images: ProductImageEntity[];

    @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.product)
    orderItems: OrderItemEntity[]

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at'})
    deletedAt: Date;

}
