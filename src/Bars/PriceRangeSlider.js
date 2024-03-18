import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import "./PriceRangeSlider.css";

const Input = styled(MuiInput)`
  width: 90px;
  border: 1px solid #ffffff;
  background-color: #f3f3f3;
  border-radius: 6px;
`;

const StyledSliderWrapper = styled(Box)`
  padding-left: 10px;
`;

const InputBox = styled(Box)`
  padding: 0 8px;
`;

const MainBox = styled(Box)`
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Adjust shadow as needed */
`;
const PopulationText = styled(Typography)`
  color: white;
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
    <MainBox sx={{ width: 250 }}>
      <PopulationText
        className="populationtext"
        variant="h6"
        id="input-slider"
        gutterBottom
      >
        Population:
      </PopulationText>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} className="inputs">
          <Box display="flex" justifyContent="space-around" alignItems="center">
            <InputBox>
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
        <Grid item xs={12}>
          <StyledSliderWrapper>
            <CustomSlider
              value={[minValue, maxValue]}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </StyledSliderWrapper>
        </Grid>
      </Grid>
    </MainBox>
  );
}

const CustomSlider = styled(Slider)`
  .MuiSlider-track {
    background: linear-gradient(to right, #ffb017, #ff6489);
    border: none;
    height: 8px;
  }
`;
