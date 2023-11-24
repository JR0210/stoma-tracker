import Modal from "./Modal";

const EntryButton = () => {
  return (
    <>
      <button className="bg-primary transition-colors hover:bg-sky-400 focus:bg-sky-400 font-bold py-2 px-6 rounded">
        Log Entry
      </button>
      <Modal open={true} />
    </>
  );
};

export default EntryButton;
