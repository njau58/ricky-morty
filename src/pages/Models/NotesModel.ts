import mongoose from "mongoose";
const Schema = mongoose.Schema

const NoteSchema = new  Schema({
    note:{
        type:String
    },
    resident_id:{
        type:String

    }

})




 const NoteModel = mongoose.models.notes ||  mongoose.model('notes', NoteSchema)

export default NoteModel

