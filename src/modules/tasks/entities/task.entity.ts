import { Project } from "src/modules/projects/entities/projects.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: "name", nullable: false })
  name: string;
  @Column({ name: "status", nullable: false })
  status: TaskStatus;
  @ManyToOne(() => Project, (project) => project, {
    cascade: true,
    nullable: false,
  })
  project: Project;

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn()
  user: User;
}
export enum TaskStatus {
  pending = "pending",
  completed = "completed",
}