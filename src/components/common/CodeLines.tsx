export default function CodeLines() {
  const numbers = [];
  for (var i = 0; i < 123; i++) {
    numbers.push(i);
  }
  return (
    <div style={{ display: "inline-block", float: "left", fontFamily: "Ubuntu Mono", color: "#4b4b4b"}}>
       {numbers.map((i)=> {
        return (<>
        <p>{i}</p>
        </>)
       })}
    </div>
  );
}
