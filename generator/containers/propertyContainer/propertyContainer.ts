import { Modifiers } from "../../common/types";
import * as ejs from "ejs";
import { Container } from "../container";

export class PropertyContainer extends Container {
    public name: string;
    public type: string;
    public modifier: Modifiers;
    public isReadonly: boolean;
    public isOptional: boolean;
    public isInterface: boolean;
    public description: string;
    public apiFieldname: string;

    constructor(name: string, type: string, options?: { modifier?: Modifiers, isReadonly?: boolean, isOptional?: boolean, description?: string, isInterface?: boolean, apiFieldname?: string }) {
        super();
        this.name = name;
        this.type = type;

        options = options || {};
        const { modifier, isReadonly, isOptional, description, isInterface, apiFieldname } = options;

        this.modifier = modifier || "public";
        this.isReadonly = isReadonly || false;
        this.isOptional = isOptional || false;
        this.description = description || this.name;
        this.isInterface = isInterface || false;
        this.apiFieldname = apiFieldname;
    }

    public async render(): Promise<string> {
        return await ejs.renderFile<string>("generator/containers/propertyContainer/property.ejs", { property: this });
    }
}
