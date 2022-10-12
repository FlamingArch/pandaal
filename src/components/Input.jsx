const Input = ({ value, onChange, placeholder, leading, trailing }) => {
  return (
    <div className="p-4 border-2 rounded-xl border-primary flex gap-2">
      {leading}
      <input
        className="outline-none flex-grow"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {trailing}
    </div>
  );
};

export default Input;
