import "./styles.css"

export default function CourseCard(props: {
  title: string;
  author: string;
  pic: string;
  link: string;
}) {
  return (
    <>
      <div className="course-container" onClick={()=> 
        // eslint-disable-next-line no-restricted-globals
        location.href = props.link}>
        <div style={{height: '10vw', padding: '10px'}}>
            <img src={props.pic} style={{width: '100%', height: '100%'}}alt=""/>
        </div>
        
        <p style={{ color: "white", fontFamily: 'Ubuntu Mono', textAlign: 'center', margin: '5%'}}>{props.title}</p>
        <p style={{ color: "white", fontFamily: 'Ubuntu Mono', textAlign: 'center', margin: '5%'}}>{props.author}</p>
      </div>
    </>
  );
}
