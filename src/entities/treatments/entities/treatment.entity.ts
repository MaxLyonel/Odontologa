import { Column, Double, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "src/entities/employees/entities/employee.entity";
import { StageType } from "src/entities/stage_types/entities/stage_type.entity";
import { MedicalHistory } from "src/entities/medical_histories/entities/medical_history.entity";

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

}
