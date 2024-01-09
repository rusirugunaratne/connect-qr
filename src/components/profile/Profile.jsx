import React, { useEffect, useState } from "react"
import {
  ethnicityFestivals,
  religionFestivals,
} from "../../constants/festivals"
import { getUsernameFromLocalStorage } from "../../localStorage/LocalStorage"
import { get, getDatabase, ref, set } from "firebase/database"
import { Button, Typography } from "@mui/material"
import TopBar from "../topBar/TopBar"
import { toast } from "react-toastify"

const ProfilePage = () => {
  const [selectedFestivals, setSelectedFestivals] = useState([])
  const username = getUsernameFromLocalStorage()
  const db = getDatabase()

  const handleAddItem = async () => {
    const updatedItems = [...selectedFestivals]

    // Add the new item to Firebase
    try {
      const celebrationItemsRef = ref(db, `users/${username}/celebrations`)
      await set(celebrationItemsRef, updatedItems)
      toast.success("Details Updated")
    } catch (error) {
      console.error("Error adding item:", error.message)
    }
  }

  useEffect(() => {
    // Fetch food items from Firebase when the component mounts
    const fetchData = async () => {
      try {
        const celebrationItemsRef = ref(db, `users/${username}/celebrations`)
        const snapshot = await get(celebrationItemsRef)

        if (snapshot.exists()) {
          setSelectedFestivals(snapshot.val())
          console.log(snapshot.val())
        }
      } catch (error) {
        console.error("Error fetching food items:", error.message)
      }
    }

    fetchData()
  }, [username])

  const handleCheckboxChange = (type, category, festivalName) => {
    setSelectedFestivals((prevSelectedFestivals) => {
      const isFestivalSelected = prevSelectedFestivals.some(
        (festival) =>
          festival.type === type &&
          festival.category === category &&
          festival.name === festivalName
      )

      if (isFestivalSelected) {
        // Festival is already selected, remove it
        return prevSelectedFestivals.filter(
          (festival) =>
            !(
              festival.type === type &&
              festival.category === category &&
              festival.name === festivalName
            )
        )
      } else {
        // Festival is not selected, add it
        return [
          ...prevSelectedFestivals,
          { type, category, name: festivalName },
        ]
      }
    })
  }

  return (
    <div>
      <TopBar />
      <h2>Your Celebrations Based on Ethnicity</h2>
      {Object.keys(ethnicityFestivals).map((ethnicity) => (
        <div key={ethnicity}>
          <h3>{ethnicity}</h3>
          {ethnicityFestivals[ethnicity].festivals.map((festival) => (
            <div key={festival.festivalName}>
              <input
                type='checkbox'
                id={`ethnicity-${ethnicity}-${festival.festivalName}`}
                checked={selectedFestivals.some(
                  (selectedFestival) =>
                    selectedFestival.type === "ethnicity" &&
                    selectedFestival.category === ethnicity &&
                    selectedFestival.name === festival.festivalName
                )}
                onChange={() =>
                  handleCheckboxChange(
                    "ethnicity",
                    ethnicity,
                    festival.festivalName
                  )
                }
              />
              <label
                htmlFor={`ethnicity-${ethnicity}-${festival.festivalName}`}
              >
                {festival.festivalName}
              </label>
            </div>
          ))}
        </div>
      ))}

      <h2>Your Celebrations Based on Religion</h2>
      {Object.keys(religionFestivals).map((religion) => (
        <div key={religion}>
          <h3>{religion}</h3>
          {religionFestivals[religion].festivals.map((festival) => (
            <div key={festival.festivalName}>
              <input
                type='checkbox'
                id={`religion-${religion}-${festival.festivalName}`}
                checked={selectedFestivals.some(
                  (selectedFestival) =>
                    selectedFestival.type === "religion" &&
                    selectedFestival.category === religion &&
                    selectedFestival.name === festival.festivalName
                )}
                onChange={() =>
                  handleCheckboxChange(
                    "religion",
                    religion,
                    festival.festivalName
                  )
                }
              />
              <label htmlFor={`religion-${religion}-${festival.festivalName}`}>
                {festival.festivalName}
              </label>
            </div>
          ))}
        </div>
      ))}

      <Button sx={{ marginTop: 5 }} variant='contained' onClick={handleAddItem}>
        Update Details
      </Button>

      <div>
        <h2>Selected Festivals</h2>

        {selectedFestivals.map((selectedFestival) => (
          <Typography>
            {selectedFestival.category}: {selectedFestival.name}
          </Typography>
        ))}
      </div>
    </div>
  )
}

export default ProfilePage
