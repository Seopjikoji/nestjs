import {MigrationInterface, QueryRunner} from "typeorm";

export class testmigraiton11648422207326 implements MigrationInterface {
    name = 'testmigraiton11648422207326'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`isActive\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`isActive\` tinyint NOT NULL DEFAULT '1'`);
    }

}
