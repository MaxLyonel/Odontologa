import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "../../../employees/employee/entities/employee.entity";
import { Treatment } from "../../../clinical_history/treatments/entities/treatment.entity";
import { ScheludeState } from "../../schelude_states/entities/schelude_state.entity";

@Entity()
export class Schelude {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @ManyToOne(() => Employee, (employee) => employee.id)
    employee: number

    @ManyToOne(() => Treatment, (treatment) => treatment.id)
    treatment: number

    @ManyToOne(() => ScheludeState, (scheludeState) => scheludeState.id)
    scheludeState: number

}
