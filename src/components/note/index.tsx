interface NoteProps {
  note?: string;
}

const Note = ({ note }: NoteProps) => {
  return (
    <div className="bg-white rounded-md border p-8">
      <p>{note}</p>
    </div>
  );
};

export default Note;
