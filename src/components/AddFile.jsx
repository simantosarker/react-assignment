const AddFile = () => {
  return (
    <div className="h-6">
      <input
        type="file"
        name="file"
        placeholder="(a brief, idea, branding guideline, old design,...)"
        accept=".jpg,.jpeg,.png,.pdf"
        onChange={handleFileChange}
        className="h-6 w-full text-sm text-gray-400 file:hidden border border-gray-300 rounded-lg"
      />
      <div className="">
        <button className="inlineblock">Add File (5Mb)</button>
      </div>
    </div>
  );
};

export default AddFile;
