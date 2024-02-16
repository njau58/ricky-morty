import type { NextApiResponse, NextApiRequest } from "next";
import connectDB from "../../lib/connectDB";
import NoteModel from "../../Models/NotesModel";


const getNotes = async (req: NextApiRequest, res: NextApiResponse) => {

  console.log(req.method)


  const { resident_id } = req.query;

  if (!resident_id) {
    return res.status(500).send({ msg: "Provide resident id." });
  }

  try {
    let connection: any = connectDB();

    if (connection) {
      const notes = await NoteModel.find({
        resident_id:resident_id
      
      });

      if (notes) {
        return res.status(200).json({ msg: notes });
      } else {
        return res.status(500).json({ msg: "Failed to fetch note." });
      }
    } else {
      return res.status(500).json({ msg: "Could not connect to the database" });
    }
  } catch (error: any) {
    return res.status(500).json({ msg: "Error connecting to the database." });
  }
};

export default getNotes;
