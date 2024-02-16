import type { NextApiResponse, NextApiRequest } from "next";
import connectDB from "../lib/connectDB";
import NoteModel from "../Models/NotesModel";

const sendNote = async (req: NextApiRequest, res: NextApiResponse) => {
  const { resident_id, note } = req.body;

  console.log(req.body);

  if (!resident_id || !note) {
    return res.status(500).send({ msg: "Please fill the fields." });
  }

  try {
    let connection: any = connectDB();

    if (connection) {
      const created_note = await NoteModel.create({
        resident_id,
        note,
      });

      if (created_note) {
        return res.status(200).json({ msg: created_note });
      } else {
        return res.status(500).json({ msg: "Failed to create note." });
      }
    } else {
      return res.status(500).json({ msg: "Could not connect to the database" });
    }
  } catch (error: any) {
    return res.status(500).json({ msg: "Error connecting to the database." });
  }
};

export default sendNote;
