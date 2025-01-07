import { useEffect, useState } from "react";


function App (){

  const [time, setTime] = useState("");  // in seconds
  const [isRunning, setIsRunnning] = useState(false);
  const [isEdited, setIsEdited] = useState('');

  useEffect(() => {

  }, [])

  return(
    <>
    {/* control to stop, pause, reset the timer */}
    {/* input form for editing time */}
    
    </>
  )
}

export default App;