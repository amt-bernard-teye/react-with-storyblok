type InputProps = {
  blok: {
    placeholder: string;
  }
}

export default function Input({blok}: InputProps) {
  let input = {
    width: "320px",
    display: "inline-block",
    border: "none",
    backgroundColor: "var(--bs-white)",
    outline: "none",
    padding: "10px 15px",
    borderRadius: "5px"
  };

  return (
    <input placeholder={blok.placeholder} style={input}/>
  );
}