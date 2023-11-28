import { OrderEntity } from '../order/order.entity';
import { Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', length: 100, nullable: false })
    name: string;

    @Column({ name: 'email', length: 70, nullable: false })
    email: string;

    @Column({ name: 'password', length: 255, nullable: false })
    password: string;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: string;

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: string;

    @DeleteDateColumn({ name: 'deleted_at'})
    deletedAt: string;

    // constructor(user?: Partial<UserEntity>) {
    //     this.id = user?.id,
    //     this.name = user?.name,
    //     this.email = user?.email,
    //     this.password = user?.password,
    //     this.createdAt = user?.createdAt,
    //     this.updatedAt = user?.updatedAt,
    //     this.deletedAt = user?.deletedAt
    // }

    @OneToMany(()=> OrderEntity, (order) => order.user)
    orders: OrderEntity[]
}   




   