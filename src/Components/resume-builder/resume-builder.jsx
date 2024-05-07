import Body from '../resume/Body/Body'
export const ResumeBuilder = () => {
  return (<div style={{
    direction: 'ltr',
    display: 'flex',
    flexDirection: "column",
    gap: "40px",
    width: "100%"
  }}>
    <Body /> </div>)
};