import mongoose,{Schema,models,model} from "mongoose";

mongoose.connect(process.env.ATLAS_URI)
mongoose.Promise = global.Promise

const ticketSchema = new Schema({
   title:String,
   description:String,
   category:String,
   priority:Number,
   progress:Number,
   status:String,
   active:Boolean,
  },{
    timestamps:true
  });

let Ticket = models.Ticket || model('Ticket',ticketSchema)
export default Ticket;

