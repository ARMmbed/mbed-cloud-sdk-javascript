/* tslint:disable: no-console */
import * as fs from "fs-extra";
import { File as GeneratedFile } from "./common/file";
import { generateInterface } from "./generators/generateInterface";
import { snakeToCamel, snakeToPascal } from "./common/utilities";
import { FileContainer } from "./containers/fileContainer/fileContainer";
import { ExportContainer } from "./containers/exportContainer/exportContainer";
import { generateTypes } from "./generators/generateTypes";
import { generateAdapters } from "./generators/generateAdapters";
import { generateRepository } from "./generators/generateRepository";

async function main() {
    const outputFolder = "./src/sdk/generatedV2";
    const configPath = "/Users/alelog01/git/mbed-cloud-api-contract/scripts/sdk_generators/generated_files/sdk_gen_intermediate.json";

    const generatedConfig = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    const enums = generatedConfig.enums;
    const entities = generatedConfig.entities;

    // clear generated folder
    fs.emptyDirSync(outputFolder);

    const entityExports: Array<ExportContainer> = [];

    for (const entity of entities) {
        const currentGroup = snakeToPascal(entity.group_id);
        const camelKey = snakeToCamel(entity._key);
        const pascalKey = snakeToPascal(entity._key);

        // generate interface
        const entityInterface = await generateInterface(entity, enums);
        const interfaceFile = new GeneratedFile(
            camelKey,
            `${outputFolder}/${snakeToCamel(entity.group_id)}/${camelKey}`,
            entityInterface
        );
        interfaceFile.writeFile();

        // generate index file
        const entityIndex = new FileContainer(
            [
                new ExportContainer(`./${camelKey}`)
            ]
        );

        entityExports.push(new ExportContainer(`./${snakeToCamel(entity.group_id)}/${camelKey}`));

        // generate types
        await generateTypes(entity, enums, pascalKey, outputFolder, camelKey, entityIndex);

        // generate adapters
        await generateAdapters(entity, pascalKey, camelKey, outputFolder, entityIndex, entity._key);

        // generate repository
        await generateRepository(entity, pascalKey, currentGroup, camelKey, outputFolder, entityIndex);

        const indexFile = new GeneratedFile(
            "index",
            `${outputFolder}/${snakeToCamel(entity.group_id)}/${camelKey}`,
            await entityIndex.render()
        );
        indexFile.writeFile();
    }

    // main export file
    const generatedIndex = new FileContainer(entityExports);
    const generatedIndexFile = new GeneratedFile(
        "index",
        `${outputFolder}`,
        await generatedIndex.render()
    );
    generatedIndexFile.writeFile();
}

main();