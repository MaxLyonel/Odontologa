import { MigrationInterface, QueryRunner } from "typeorm";

export class init1697340745323 implements MigrationInterface {
    name = 'init1697340745323'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "permission" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "displayName" character varying NOT NULL, CONSTRAINT "PK_3b8b97af9d9d8807e41e6f48362" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "displayName" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "active" boolean NOT NULL, "token" character varying NOT NULL, "personId" integer, CONSTRAINT "REL_6aac19005cea8e2119cbe7759e" UNIQUE ("personId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "person" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "secondName" character varying NOT NULL, "lastName" character varying NOT NULL, "mothersLastName" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "direction" character varying NOT NULL, "identityCard" character varying NOT NULL, "gender" character varying NOT NULL, CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schelude_state" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "shortName" character varying NOT NULL, "active" boolean NOT NULL, CONSTRAINT "PK_7c02e7aebc344849dad79a372eb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stage_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "shortName" character varying NOT NULL, "active" boolean NOT NULL, CONSTRAINT "PK_6b9b1c1938f4ff5d6dd36dd0908" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "treatment_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "shortName" character varying NOT NULL, "active" boolean NOT NULL, CONSTRAINT "PK_b7d7dcb549b8bfe5652af501ede" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "treatment_state" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "shortName" character varying NOT NULL, "active" boolean NOT NULL, CONSTRAINT "PK_fa4ce74d2ba3be87a0b14e0108c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "patient" ("id" SERIAL NOT NULL, "registerDate" TIMESTAMP NOT NULL, "bloodType" character varying NOT NULL, "personId" integer, "personReferenceIdId" integer, CONSTRAINT "REL_deb8aff3b1418adb00dbf55f6f" UNIQUE ("personId"), CONSTRAINT "PK_8dfa510bb29ad31ab2139fbfb99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "medical_history" ("id" SERIAL NOT NULL, "registerDate" TIMESTAMP NOT NULL, "observation" character varying NOT NULL, "amount" numeric NOT NULL, "patientId" integer, "treatmentTypeId" integer, "treatmentStateId" integer, CONSTRAINT "PK_b74f21cb30300ddf41a00623568" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "shortName" character varying NOT NULL, CONSTRAINT "PK_f9d58855715d2ef972426e8bfef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "position" character varying NOT NULL, "dateOfHire" character varying NOT NULL, "licenceNumber" integer NOT NULL, "personId" integer, "employeTypeId" integer, CONSTRAINT "REL_c6dc0c24b090639f20b86baf30" UNIQUE ("personId"), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "treatment" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "sessionAmount" numeric NOT NULL, "date" TIMESTAMP NOT NULL, "state" boolean NOT NULL, "utilitarian" character varying NOT NULL, "employeeId" integer, "stageTypeId" integer, "medicalHistoryId" integer, CONSTRAINT "PK_5ed256f72665dee35f8e47b416e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schelude" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "employeeId" integer, "treatmentId" integer, "scheludeStateId" integer, CONSTRAINT "PK_5d485078cd40496242c726bcedd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role_permission_permission" ("roleId" integer NOT NULL, "permissionId" integer NOT NULL, CONSTRAINT "PK_601804d828ecf7c301022770fad" PRIMARY KEY ("roleId", "permissionId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_be73ed38a02ea01cef07836835" ON "role_permission_permission" ("roleId") `);
        await queryRunner.query(`CREATE INDEX "IDX_1fff5824ba3354f53d4fae760c" ON "role_permission_permission" ("permissionId") `);
        await queryRunner.query(`CREATE TABLE "user_role_role" ("userId" integer NOT NULL, "roleId" integer NOT NULL, CONSTRAINT "PK_8f1a6e129f057889ccddcb4b533" PRIMARY KEY ("userId", "roleId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_26736dfb41d6a47ce5d8365aad" ON "user_role_role" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_8188039e9fdf7572245e2ed8a8" ON "user_role_role" ("roleId") `);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_6aac19005cea8e2119cbe7759e8" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "patient" ADD CONSTRAINT "FK_deb8aff3b1418adb00dbf55f6f0" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "patient" ADD CONSTRAINT "FK_12ec73810d89c6d6dd979df5ad3" FOREIGN KEY ("personReferenceIdId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "medical_history" ADD CONSTRAINT "FK_812de45a50f522f77ee0a17652f" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "medical_history" ADD CONSTRAINT "FK_dbdff835190e23ec5aad325139e" FOREIGN KEY ("treatmentTypeId") REFERENCES "treatment_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "medical_history" ADD CONSTRAINT "FK_e3698fce5ea2dda1fb5f713023e" FOREIGN KEY ("treatmentStateId") REFERENCES "treatment_state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_c6dc0c24b090639f20b86baf30c" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_11cca6e32aa476cb7bd5030e36b" FOREIGN KEY ("employeTypeId") REFERENCES "employee_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "treatment" ADD CONSTRAINT "FK_f5e65f82ccf8cccd010e53ecb28" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "treatment" ADD CONSTRAINT "FK_aad22c3fca9f45223fce9eac8e6" FOREIGN KEY ("stageTypeId") REFERENCES "stage_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "treatment" ADD CONSTRAINT "FK_9ef235abe75338a2ab2d3de448a" FOREIGN KEY ("medicalHistoryId") REFERENCES "medical_history"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schelude" ADD CONSTRAINT "FK_360faa01251987a7313a3e56513" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schelude" ADD CONSTRAINT "FK_e187a83244975bbab830505fb68" FOREIGN KEY ("treatmentId") REFERENCES "treatment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schelude" ADD CONSTRAINT "FK_ebefb24f6180a7f40eedd511c85" FOREIGN KEY ("scheludeStateId") REFERENCES "schelude_state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_permission_permission" ADD CONSTRAINT "FK_be73ed38a02ea01cef07836835e" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_permission_permission" ADD CONSTRAINT "FK_1fff5824ba3354f53d4fae760c3" FOREIGN KEY ("permissionId") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_role_role" ADD CONSTRAINT "FK_26736dfb41d6a47ce5d8365aad7" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_role_role" ADD CONSTRAINT "FK_8188039e9fdf7572245e2ed8a83" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_role_role" DROP CONSTRAINT "FK_8188039e9fdf7572245e2ed8a83"`);
        await queryRunner.query(`ALTER TABLE "user_role_role" DROP CONSTRAINT "FK_26736dfb41d6a47ce5d8365aad7"`);
        await queryRunner.query(`ALTER TABLE "role_permission_permission" DROP CONSTRAINT "FK_1fff5824ba3354f53d4fae760c3"`);
        await queryRunner.query(`ALTER TABLE "role_permission_permission" DROP CONSTRAINT "FK_be73ed38a02ea01cef07836835e"`);
        await queryRunner.query(`ALTER TABLE "schelude" DROP CONSTRAINT "FK_ebefb24f6180a7f40eedd511c85"`);
        await queryRunner.query(`ALTER TABLE "schelude" DROP CONSTRAINT "FK_e187a83244975bbab830505fb68"`);
        await queryRunner.query(`ALTER TABLE "schelude" DROP CONSTRAINT "FK_360faa01251987a7313a3e56513"`);
        await queryRunner.query(`ALTER TABLE "treatment" DROP CONSTRAINT "FK_9ef235abe75338a2ab2d3de448a"`);
        await queryRunner.query(`ALTER TABLE "treatment" DROP CONSTRAINT "FK_aad22c3fca9f45223fce9eac8e6"`);
        await queryRunner.query(`ALTER TABLE "treatment" DROP CONSTRAINT "FK_f5e65f82ccf8cccd010e53ecb28"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_11cca6e32aa476cb7bd5030e36b"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_c6dc0c24b090639f20b86baf30c"`);
        await queryRunner.query(`ALTER TABLE "medical_history" DROP CONSTRAINT "FK_e3698fce5ea2dda1fb5f713023e"`);
        await queryRunner.query(`ALTER TABLE "medical_history" DROP CONSTRAINT "FK_dbdff835190e23ec5aad325139e"`);
        await queryRunner.query(`ALTER TABLE "medical_history" DROP CONSTRAINT "FK_812de45a50f522f77ee0a17652f"`);
        await queryRunner.query(`ALTER TABLE "patient" DROP CONSTRAINT "FK_12ec73810d89c6d6dd979df5ad3"`);
        await queryRunner.query(`ALTER TABLE "patient" DROP CONSTRAINT "FK_deb8aff3b1418adb00dbf55f6f0"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_6aac19005cea8e2119cbe7759e8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8188039e9fdf7572245e2ed8a8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_26736dfb41d6a47ce5d8365aad"`);
        await queryRunner.query(`DROP TABLE "user_role_role"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1fff5824ba3354f53d4fae760c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_be73ed38a02ea01cef07836835"`);
        await queryRunner.query(`DROP TABLE "role_permission_permission"`);
        await queryRunner.query(`DROP TABLE "schelude"`);
        await queryRunner.query(`DROP TABLE "treatment"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TABLE "employee_type"`);
        await queryRunner.query(`DROP TABLE "medical_history"`);
        await queryRunner.query(`DROP TABLE "patient"`);
        await queryRunner.query(`DROP TABLE "treatment_state"`);
        await queryRunner.query(`DROP TABLE "treatment_type"`);
        await queryRunner.query(`DROP TABLE "stage_type"`);
        await queryRunner.query(`DROP TABLE "schelude_state"`);
        await queryRunner.query(`DROP TABLE "person"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "permission"`);
    }

}
