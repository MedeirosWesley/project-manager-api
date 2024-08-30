import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./modules/users/users.module";

import { CacheModule } from "@nestjs/cache-manager";
import { TypeOrmConfigModule } from "./config/type-orm-config/type-orm-config.module";
import { TaskModule } from "./modules/tasks/tasks.module";
import { ProjectModule } from "./modules/projects/projects.module";
import * as redisStore from "cache-manager-redis-store";
@Module({
  imports: [
    UsersModule,
    ProjectModule,
    TaskModule,
    TypeOrmConfigModule,
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }