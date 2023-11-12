import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
    
    title: string;

}

const taskSchema: Schema = new Schema({
    title: {type: String, required: true}
})

export default mongoose.model<ITask>("Task", taskSchema);