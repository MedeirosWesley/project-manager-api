import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from '../projects/entities/projects.entity';
import { ProjectsService } from '../projects/projects.service';
@Module({
  imports: [TypeOrmModule.forFeature([Task, Project]),],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TaskModule { }