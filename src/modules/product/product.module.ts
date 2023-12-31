import { Module } from "@nestjs/common";
import { ProductDatabase } from "./product.database";
import { ProductController } from "../product/product.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { ProductService } from "./product.service";
import { LoggerModule } from "../logger/logger.module";

@Module({
    providers: [ProductService, ProductDatabase],
    imports: [
        TypeOrmModule.forFeature([ProductEntity]), 
        LoggerModule
    ],
    controllers: [ProductController]
})
export class ProductModule{};