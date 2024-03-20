import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

const Input = styled(MuiInput)`
  width: 7vw; /* Adjusted width */
  background-color: #f3f3f3;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  margin-left: 1vw;
  height: 4vh;
  font-size: 0.8rem;
`;

const StyledSliderWrapper = styled(Box)`
  width: 16vw;
  margin: -0.8vh 0;
  margin-left: 1vw;
`;

const InputBox = styled(Box)`
  width: 8vw;
  display: flex;
  flex-direction: row;
  padding: -1% 0;
`;

const MainBox = styled(Box)`
  border-radius: 0px;
`;
const PopulationText = styled(Typography)`
  color: #050505;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 1vw 0 0 1vw;
`;

const InputText = styled(Typography)`
  font-size: 0.8rem;
  margin-top: 1vh;
  margin-left: 1vh;
`;

export default function InputSlider() {
  const [minValue, setMinValue] = React.useState(0);
  const [maxValue, setMaxValue] = React.useState(100);

  const handleMinInputChange = (event) => {
    setMinValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleMaxInputChange = (event) => {
    setMaxValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleMinBlur = () => {
    if (minValue < 0) {
      setMinValue(0);
    } else if (minValue > maxValue) {
      setMinValue(maxValue);
    }
  };

  const handleMaxBlur = () => {
    if (maxValue < minValue) {
      setMaxValue(minValue);
    } else if (maxValue > 100) {
      setMaxValue(100);
    }
  };

  const handleSliderChange = (event, newValue) => {
    setMinValue(newValue[0]);
    setMaxValue(newValue[1]);
  };

  return (
    <MainBox sx={{ width: "20vw" }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} className="inputs">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingLeft="1vw" /* Adjusted padding */
          >
            <InputBox>
              <InputText>Min</InputText>
              <Input
                value={minValue}
                size="small"
                onChange={handleMinInputChange}
                onBlur={handleMinBlur}
                inputProps={{
                  step: 10,
                  min: 0,
                  max: maxValue,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
            </InputBox>

            <InputBox>
              <InputText>Max</InputText>
              <Input
                value={maxValue}
                size="small"
                onChange={handleMaxInputChange}
                onBlur={handleMaxBlur}
                inputProps={{
                  step: 10,
                  min: minValue,
                  max: 100,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
            </InputBox>
          </Box>
        </Grid>
        <Grid item xs={12} marginLeft="1vw">
          <StyledSliderWrapper>
            <CustomSlider
              padding="0px"
              value={[minValue, maxValue]}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              className="sliderr"
            />
          </StyledSliderWrapper>
        </Grid>
      </Grid>
    </MainBox>
  );
}

const CustomSlider = styled(Slider)`
  && {
    .MuiSlider-track {
      background: #0f1837;
      border: none;
      height: 6px;
    }
    .MuiSlider-thumb {
      height: 2vh; /* Adjusted height */
      width: 2.5vh;
    }
  }
`;
