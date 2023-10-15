import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Employee } from "../../../employees/employee/entities/employee.entity";
import { StageType } from "../../stage_types/entities/stage_type.entity";
import { MedicalHistory } from "../../medical_histories/entities/medical_history.entity";

@Entity()
export class Treatment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column({type: "decimal"})
    sessionAmount: Double

    @Column()
    date: Date

    @Column()
    state: boolean

    @Column()
    utilitarian: string

    @ManyToOne(() => Employee, (employee) => employee.id)
    employee: number

    @ManyToOne(() => StageType, (stageType) => stageType.id)
    stageType: number

    @ManyToOne(() => MedicalHistory, (medicalHistory) => medicalHistory.id)
    medicalHistory: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date

}
