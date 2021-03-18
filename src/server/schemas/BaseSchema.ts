import { Schema, Document, SchemaDefinition, SchemaOptions } from 'mongoose';

export interface BaseModel<T> extends Document {
    toClient(): T;
}

export class BaseSchema<T> extends Schema {
    public constructor(definition: SchemaDefinition) {
        const options: SchemaOptions = { timestamps: true, versionKey: false, _id: false };
        const fields: string[] = ['id', ...Object.keys(definition)];

        // force to auto generate id only for the parent, and then we can remove all _id from the subdocument and add it manually if you want to
        definition._id = { type: Schema.Types.ObjectId, required: true, auto: true };

        super(definition, options);

        // methos that return just what is in the interface and also swapt _id by id
        this.methods.toClient = function (): Partial<T> {
            return fields.reduce((data: Partial<T>, key: string) => {
                return {
                    ...data,
                    [key]: key === 'id' ? this._id.toString() : this[key]
                };
            }, {});
        };
    }
}
