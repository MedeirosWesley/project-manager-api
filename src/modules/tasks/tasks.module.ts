import { Module } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { UsersModule } from '../users/users.module';
import { ProjectModule } from '../projects/projects.module';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Project } from '../projects/entities/projects.entity';
@Module({
  imports: [ProjectModule, UsersModule, TypeOrmModule.forFeature([Task, Project, User])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TaskModule { }