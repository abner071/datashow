import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateChurch1695170237833 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "church",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "name",
                            type: "varchar"
                        },
                        {
                            name: "address",
                            type: "varchar",
                            isNullable: true
                        },
                        {
                            name: "address_number",
                            type: "varchar",
                            isNullable: true
                        },
                        {
                            name: "district",
                            type: "varchar",
                            isNullable: true
                        },
                        {
                            name: "city",
                            type: "varchar",
                            isNullable: true
                        },
                        {
                            name: "state",
                            type: "varchar",
                            isNullable: true
                        },
                        {
                            name: "logo",
                            type: "varchar",
                            isNullable: true
                        },
                        {
                          name: 'created_at',
                          type: 'timestamp',
                          default: 'now()',
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("church");
    }

}
