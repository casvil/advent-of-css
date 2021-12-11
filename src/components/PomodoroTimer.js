import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledPomodoroTimer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 4px solid red;
  border-radius: 50%;
  height: 80vh;
  width: 80vh;
`;

const StyledTime = styled.div`
  font-size: 25vh;
`;
const StyledGear = styled.div`
  font-size: 20px;
`;

const getMinutes = (seconds) => {
  if (seconds < 60) {
    return "00";
  }

  return Math.round(seconds / 60);
};

const getSeconds = (seconds) => {
  if (seconds < 60) {
    return seconds;
  }

  return seconds % 60;
};

const PomodoroTimer = () => {
  const [time, setTime] = useState(900); // 15 minutes * 60 seconds
  const [isActive, setIsActive] = useState(false); // 15 minutes * 60 seconds

  useEffect(() => {
    if (isActive) {
      setTimeout(() => setTime(time - 1), 1000);
    }

    return clearInterval();
  }, [isActive, time]);

  return (
    <StyledPomodoroTimer percentage={time}>
      <StyledTime>
        {time > 0 ? getMinutes(time) + ":" + getSeconds(time) : "00:00"}
      </StyledTime>
      <div onClick={() => setIsActive(!isActive)}>
        {isActive ? "STOP" : "START"}
      </div>
      <StyledGear>⚙️</StyledGear>
    </StyledPomodoroTimer>
  );
};

export default PomodoroTimer;
