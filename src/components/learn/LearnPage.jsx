import React, { useState } from "react"
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material"
import {
  ethnicityFestivals,
  religionFestivals,
} from "../../constants/festivals"
import TopBar from "../topBar/TopBar"
import learnImage from "../../assets/learnImage.jpg"

const FestivalComponent = ({ festivals }) => {
  return (
    <Box>
      <Typography mt={4} variant='h4' gutterBottom>
        Important Days
      </Typography>
      {festivals.map((festival, index) => (
        <Box key={index} mb={2} p={2} border={1} borderColor='grey.300'>
          <Typography variant='h6'>
            <strong>{festival.festivalName}</strong> - {festival.festivalMonth},{" "}
            {festival.festivalDay}
          </Typography>
          <Typography>{festival.festivalDescription}</Typography>
          <Typography>Importance: {festival.importance}</Typography>
          <Typography>How to Greet: {festival.howToGreet}</Typography>
        </Box>
      ))}
    </Box>
  )
}

const LearnPage = () => {
  const [selectedEthnicity, setSelectedEthnicity] = useState("Sinhalese")
  const [selectedReligion, setSelectedReligion] = useState("Christianity")

  const handleEthnicityChange = (event) => {
    setSelectedEthnicity(event.target.value)
  }

  const handleReligionChange = (event) => {
    setSelectedReligion(event.target.value)
  }

  return (
    <Box p={4}>
      <TopBar />
      <img src={learnImage} alt='' style={{ maxWidth: "100%" }} />
      <Box mt={4} mb={4}>
        <Typography mb={4} variant='h4'>
          Filter by Ethnicity
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Select Ethnicity:</InputLabel>
          <Select
            label={"Select Ethnicity"}
            value={selectedEthnicity}
            onChange={handleEthnicityChange}
          >
            {Object.keys(ethnicityFestivals).map((ethnicity) => (
              <MenuItem key={ethnicity} value={ethnicity}>
                {ethnicity}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {ethnicityFestivals[selectedEthnicity] && (
          <FestivalComponent
            festivals={ethnicityFestivals[selectedEthnicity].festivals}
          />
        )}
      </Box>
      <Box>
        <Typography mb={4} variant='h4'>
          Filter by Religion
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Select Religion:</InputLabel>
          <Select
            label={"Select Religion"}
            value={selectedReligion}
            onChange={handleReligionChange}
          >
            {Object.keys(religionFestivals).map((religion) => (
              <MenuItem key={religion} value={religion}>
                {religion}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {religionFestivals[selectedReligion] && (
          <FestivalComponent
            festivals={religionFestivals[selectedReligion].festivals}
          />
        )}
      </Box>
    </Box>
  )
}

export default LearnPage
