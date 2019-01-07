/* tslint:disable: no-console */
import { AdapterFieldContainer } from "../containers/methodBodyContainers/adapter/adapterFieldContainer";
import { snakeToCamel, snakeToPascal } from "../common/utilities";
import { MethodContainer } from "../containers/methodContainer/methodContainer";
import { ParameterListContainer } from "../containers/parameterListContainer/parameterListContainer";
import { ParameterContainer } from "../containers/parameterContainer/parameterContainer";
import { AdapterMethodBody } from "../containers/methodBodyContainers/adapter/adapterMethodBody";
import { ClassContainer } from "../containers/classContainer/classContainer";
import { ImportContainer } from "../containers/importContainer/importContainer";
import { File as GeneratedFile } from "../common/file";
import { ExportContainer } from "../containers/exportContainer/exportContainer";
import { FileContainer } from "../containers/fileContainer/fileContainer";
import { AdapterMapperContainer } from "../containers/methodBodyContainers/adapter/adapterMapperContainer";

export async function generateAdapters(entity, pascalKey: string, camelKey: string, outputFolder: string, entityIndex: FileContainer, snakeKey: string) {
    const adapterMappers = new Array<AdapterMapperContainer>();
    const adapterImports = new Array<ImportContainer>();
    const adapterFields = new Array<AdapterFieldContainer>();

    for (const field of entity.fields) {
        let mapsForeignKeyArray = false;
        let mapsForeignKey = false;
        let foreignKeyAdapter = "";
        if (field.items && field.items.foreign_key) {
            // hard code for now to cope with plurality of policy/policies
            const adapter = field._key === "policies" ? "PolicyAdapter" : `${snakeToPascal(field._key)}Adapter`;
            mapsForeignKeyArray = true;
            const mapper = new AdapterMapperContainer(
                field._key,
                snakeToCamel(field._key),
                adapter
            );
            adapterMappers.push(mapper);
            adapterImports.push(new ImportContainer(
                `${field._key.toUpperCase()}_ADAPTER`,
                "../..",
                [
                    adapter
                ]
            ));
        }
        if (field.foreign_key) {
            mapsForeignKey = true;
            foreignKeyAdapter = `${snakeToPascal(field._key)}Adapter`;
            adapterImports.push(new ImportContainer(
                `${field._key.toUpperCase()}_ADAPTER`,
                "../..",
                [
                    foreignKeyAdapter
                ]
            ));
        }
        if (field.format === "date-time") {
            // console.log(`${field._key} should map date`);
        }
        const adapterField = new AdapterFieldContainer(
            snakeToCamel(field._key),
            field.api_fieldname,
            {
                mapsForeignKeyArray,
                mapsForeignKey,
                foreignKeyAdapter
            }
        );
        adapterFields.push(adapterField);
    }

    const fromApiMethod = new MethodContainer("fromApi", {
        returns: pascalKey,
        isStatic: true,
        parameterList: new ParameterListContainer({
            parameters: [
                new ParameterContainer("data", "any"),
                new ParameterContainer("instance", pascalKey, { isRequired: false })
            ]
        }),
        methodBody: new AdapterMethodBody(
            pascalKey,
            snakeKey,
            `${pascalKey}Adapter`,
            {
                fields: adapterFields,
                mapperMethods: adapterMappers
            })
    });

    const adapterClass = new ClassContainer(
        `${pascalKey}Adapter`,
        {
            description: `${pascalKey} adapter`,
            extendsClass: "Adapter",
            imports: [
                new ImportContainer("ADAPTER_BASE", "../../../common/adapter", [
                    "Adapter"
                ]),
                new ImportContainer(`${pascalKey.toUpperCase()}_INTERFACE`, `./${camelKey}`, [
                    pascalKey
                ])
            ],
            methods: [
                fromApiMethod
            ]
        }
    );
    adapterClass.addImport(adapterImports);

    const adapterFile = new GeneratedFile(
        `${camelKey}Adapter`,
        `${outputFolder}/${snakeToCamel(entity.group_id)}/${camelKey}`,
        await adapterClass.render()
    );
    adapterFile.writeFile();

    const typeExport = new ExportContainer(`./${camelKey}Adapter`);
    entityIndex.addContainer(typeExport);
}