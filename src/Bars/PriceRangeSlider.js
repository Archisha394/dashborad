import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

const Input = styled(MuiInput)`
  width: 5vw; /* Adjusted width */
  background-color: #f3f3f3;
  border-radius: 6px;
  justify-content: space-between;
  margin-left: 1vw;
`;

const StyledSliderWrapper = styled(Box)`
  padding-left: 1vw;
  width: 18vw;
`;

const InputBox = styled(Box)`
  padding: 1vw;
  display: flex;
  flex-direction: row;
`;

const MainBox = styled(Box)`
  border-radius: 0px;
`;
const PopulationText = styled(Typography)`
  color: #050505;
  font-weight: bold;
  font-size: 1rem;
  padding: 1vw 0 0 1vw;
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
    <MainBox sx={{ width: "25vw" }}>
      <PopulationText variant="h6" id="input-slider" gutterBottom>
        Population:
      </PopulationText>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} className="inputs">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingLeft="1vw" /* Adjusted padding */
          >
            <InputBox>
              Min
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
              Max
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
  .MuiSlider-track {
    background: #0f1837;
    border: none;
    height: 8px;
  }
`;
