import { Column, Double, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Patient } from "src/entities/patients/entities/patient.entity";
import { TreatmentType } from "src/entities/treatment_types/entities/treatment_type.entity";
import { TreatmentState } from "src/entities/treatment_states/entities/treatment_state.entity";

@Entity()
export class MedicalHistory {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    registerDate: Date

    @Column()
    observation: string

    @Column({type: "decimal"})
    amount: number

    @ManyToOne(() => Patient, (patient) => patient.id)
    patient: number

    @ManyToOne(() => TreatmentType, (treatmentType) => treatmentType.id)
    treatmentType: number

    @ManyToOne(() => TreatmentState, (treatmentState) => treatmentState.id)
    treatmentState: number
}
