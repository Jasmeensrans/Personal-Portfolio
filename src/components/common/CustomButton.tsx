import { Button } from "@mui/material";

export default function CustomButton(props: { text: String; onClick?: any}) {
  return (
    <Button
      variant="outlined"
      className="custom-button"
      style={{
        textTransform: "lowercase",
        fontFamily: "ubuntu mono",
        color: "#BB4AFF",
      }}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}
