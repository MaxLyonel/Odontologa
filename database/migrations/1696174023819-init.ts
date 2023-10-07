import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1696174023819 implements MigrationInterface {
    name = 'Init1696174023819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "shortName" character varying NOT NULL, CONSTRAINT "PK_f9d58855715d2ef972426e8bfef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "person" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "secondName" character varying NOT NULL, "lastName" character varying NOT NULL, "mothersLastName" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "direction" character varying NOT NULL, "identityCard" character varying NOT NULL, "gender" character varying NOT NULL, CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "position" character varying NOT NULL, "dateOfHire" character varying NOT NULL, "licenceNumber" integer NOT NULL, "personId" integer, "employeTypeId" integer, CONSTRAINT "REL_c6dc0c24b090639f20b86baf30" UNIQUE ("personId"), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "patient" ("id" SERIAL NOT NULL, "registerDate" TIMESTAMP NOT NULL, "bloodType" character varying NOT NULL, "personId" integer, "personReferenceIdId" integer, CONSTRAINT "REL_deb8aff3b1418adb00dbf55f6f" UNIQUE ("personId"), CONSTRAINT "PK_8dfa510bb29ad31ab2139fbfb99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "treatment_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "shortName" character varying NOT NULL, "active" boolean NOT NULL, CONSTRAINT "PK_b7d7dcb549b8bfe5652af501ede" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "treatment_state" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "shortName" character varying NOT NULL, "active" boolean NOT NULL, CONSTRAINT "PK_fa4ce74d2ba3be87a0b14e0108c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "medical_history" ("id" SERIAL NOT NULL, "registerDate" TIMESTAMP NOT NULL, "observation" character varying NOT NULL, "amount" numeric NOT NULL, "patientId" integer, "treatmentTypeId" integer, "treatmentStateId" integer, CONSTRAINT "PK_b74f21cb30300ddf41a00623568" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "permission" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "displayName" character varying NOT NULL, CONSTRAINT "PK_3b8b97af9d9d8807e41e6f48362" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "displayName" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schelude_state" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "shortName" character varying NOT NULL, "active" boolean NOT NULL, CONSTRAINT "PK_7c02e7aebc344849dad79a372eb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles_permission" ("id" SERIAL NOT NULL, "roleId" integer, "permissionId" integer, CONSTRAINT "PK_91ffe073ea3240a00dd2ecb3e9c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stage_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "shortName" character varying NOT NULL, "active" boolean NOT NULL, CONSTRAINT "PK_6b9b1c1938f4ff5d6dd36dd0908" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "treatment" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "sessionAmount" numeric NOT NULL, "date" TIMESTAMP NOT NULL, "state" boolean NOT NULL, "utilitarian" character varying NOT NULL, "employeeId" integer, "stageTypeId" integer, "medicalHistoryId" integer, CONSTRAINT "PK_5ed256f72665dee35f8e47b416e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schelude" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "employeeId" integer, "treatmentId" integer, "scheludeStateId" integer, CONSTRAINT "PK_5d485078cd40496242c726bcedd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "active" boolean NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_role" ("id" SERIAL NOT NULL, "userId" integer, "rolId" integer, CONSTRAINT "PK_a2cecd1a3531c0b041e29ba46e1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_c6dc0c24b090639f20b86baf30c" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_11cca6e32aa476cb7bd5030e36b" FOREIGN KEY ("employeTypeId") REFERENCES "employee_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "patient" ADD CONSTRAINT "FK_deb8aff3b1418adb00dbf55f6f0" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "patient" ADD CONSTRAINT "FK_12ec73810d89c6d6dd979df5ad3" FOREIGN KEY ("personReferenceIdId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "medical_history" ADD CONSTRAINT "FK_812de45a50f522f77ee0a17652f" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "medical_history" ADD CONSTRAINT "FK_dbdff835190e23ec5aad325139e" FOREIGN KEY ("treatmentTypeId") REFERENCES "treatment_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "medical_history" ADD CONSTRAINT "FK_e3698fce5ea2dda1fb5f713023e" FOREIGN KEY ("treatmentStateId") REFERENCES "treatment_state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "roles_permission" ADD CONSTRAINT "FK_22cfa7cd3cf619a03fda9961e06" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "roles_permission" ADD CONSTRAINT "FK_58ff21a58854a7efb0d8248f560" FOREIGN KEY ("permissionId") REFERENCES "permission"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "treatment" ADD CONSTRAINT "FK_f5e65f82ccf8cccd010e53ecb28" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "treatment" ADD CONSTRAINT "FK_aad22c3fca9f45223fce9eac8e6" FOREIGN KEY ("stageTypeId") REFERENCES "stage_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "treatment" ADD CONSTRAINT "FK_9ef235abe75338a2ab2d3de448a" FOREIGN KEY ("medicalHistoryId") REFERENCES "medical_history"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schelude" ADD CONSTRAINT "FK_360faa01251987a7313a3e56513" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schelude" ADD CONSTRAINT "FK_e187a83244975bbab830505fb68" FOREIGN KEY ("treatmentId") REFERENCES "treatment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schelude" ADD CONSTRAINT "FK_ebefb24f6180a7f40eedd511c85" FOREIGN KEY ("scheludeStateId") REFERENCES "schelude_state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_role" ADD CONSTRAINT "FK_59367b647169b3732a23b9689da" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_role" ADD CONSTRAINT "FK_f704595c4e20a18142d5443308b" FOREIGN KEY ("rolId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_role" DROP CONSTRAINT "FK_f704595c4e20a18142d5443308b"`);
        await queryRunner.query(`ALTER TABLE "users_role" DROP CONSTRAINT "FK_59367b647169b3732a23b9689da"`);
        await queryRunner.query(`ALTER TABLE "schelude" DROP CONSTRAINT "FK_ebefb24f6180a7f40eedd511c85"`);
        await queryRunner.query(`ALTER TABLE "schelude" DROP CONSTRAINT "FK_e187a83244975bbab830505fb68"`);
        await queryRunner.query(`ALTER TABLE "schelude" DROP CONSTRAINT "FK_360faa01251987a7313a3e56513"`);
        await queryRunner.query(`ALTER TABLE "treatment" DROP CONSTRAINT "FK_9ef235abe75338a2ab2d3de448a"`);
        await queryRunner.query(`ALTER TABLE "treatment" DROP CONSTRAINT "FK_aad22c3fca9f45223fce9eac8e6"`);
        await queryRunner.query(`ALTER TABLE "treatment" DROP CONSTRAINT "FK_f5e65f82ccf8cccd010e53ecb28"`);
        await queryRunner.query(`ALTER TABLE "roles_permission" DROP CONSTRAINT "FK_58ff21a58854a7efb0d8248f560"`);
        await queryRunner.query(`ALTER TABLE "roles_permission" DROP CONSTRAINT "FK_22cfa7cd3cf619a03fda9961e06"`);
        await queryRunner.query(`ALTER TABLE "medical_history" DROP CONSTRAINT "FK_e3698fce5ea2dda1fb5f713023e"`);
        await queryRunner.query(`ALTER TABLE "medical_history" DROP CONSTRAINT "FK_dbdff835190e23ec5aad325139e"`);
        await queryRunner.query(`ALTER TABLE "medical_history" DROP CONSTRAINT "FK_812de45a50f522f77ee0a17652f"`);
        await queryRunner.query(`ALTER TABLE "patient" DROP CONSTRAINT "FK_12ec73810d89c6d6dd979df5ad3"`);
        await queryRunner.query(`ALTER TABLE "patient" DROP CONSTRAINT "FK_deb8aff3b1418adb00dbf55f6f0"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_11cca6e32aa476cb7bd5030e36b"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_c6dc0c24b090639f20b86baf30c"`);
        await queryRunner.query(`DROP TABLE "users_role"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "schelude"`);
        await queryRunner.query(`DROP TABLE "treatment"`);
        await queryRunner.query(`DROP TABLE "stage_type"`);
        await queryRunner.query(`DROP TABLE "roles_permission"`);
        await queryRunner.query(`DROP TABLE "schelude_state"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "permission"`);
        await queryRunner.query(`DROP TABLE "medical_history"`);
        await queryRunner.query(`DROP TABLE "treatment_state"`);
        await queryRunner.query(`DROP TABLE "treatment_type"`);
        await queryRunner.query(`DROP TABLE "patient"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TABLE "person"`);
        await queryRunner.query(`DROP TABLE "employee_type"`);
    }

}
