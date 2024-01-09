import { useEffect, useState } from "react"
import { getUsernameFromLocalStorage } from "../../localStorage/LocalStorage"
import TopBar from "../topBar/TopBar"
import { get, getDatabase, ref } from "firebase/database"
import { Chip, Stack, Typography } from "@mui/material"
import {
  ethnicityFestivals,
  filterFestivalsByMonth,
  religionFestivals,
} from "../../constants/festivals"
import notification from "../../assets/manageNotifications.jpg"

function NotificationPage() {
  const username = getUsernameFromLocalStorage()
  console.log("username", username)
  const [friends, setFriends] = useState([])
  const [friendsWithBirthdays, setFriendsWithBirthdays] = useState([])
  const db = getDatabase()

  const currentDate = new Date()
  const currentMonthIndex = currentDate.getMonth()
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const currentMonth = months[currentMonthIndex]

  console.log(currentMonth)

  const filteredEthnicityFestivals = filterFestivalsByMonth(
    ethnicityFestivals,
    currentMonth
  )
  const filteredReligionFestivals = filterFestivalsByMonth(
    religionFestivals,
    currentMonth
  )

  console.log("filter months", filteredEthnicityFestivals)

  const [allFestivalsInMonth, setAllFestivalsInMonth] = useState([
    ...filteredEthnicityFestivals,
    ...filteredReligionFestivals,
  ])

  console.log("all", allFestivalsInMonth)
  console.log("all friends", friends)

  useEffect(() => {
    // Filter friends with birthdays
    const today = new Date()
    const friendsWithBirthdays = friends.filter((friend) => {
      const friendDob = new Date(friend.dateOfBirth)
      console.log("friend dob", friendDob)
      return (
        friendDob.getDate() === today.getDate() &&
        friendDob.getMonth() === today.getMonth()
      )
    })
    setFriendsWithBirthdays(friendsWithBirthdays)
    console.log("friends with birthdays", friendsWithBirthdays)
  }, [friends])

  const fetchFriendsDetails = async (friendUsernames) => {
    const friendsDetails = []

    for (const friendUsername of friendUsernames) {
      try {
        const friendDetailsRef = ref(db, `users/${friendUsername}`)
        const friendDetailsSnapshot = await get(friendDetailsRef)

        if (friendDetailsSnapshot.exists()) {
          friendsDetails.push(friendDetailsSnapshot.val())
        }
      } catch (error) {
        console.error("Error fetching friend details:", error.message)
      }
    }

    return friendsDetails
  }

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const friendsRef = ref(db, `users/${username}/friends`)
        const friendsSnapshot = await get(friendsRef)

        if (friendsSnapshot.exists()) {
          const friendUsernames = Object.values(friendsSnapshot.val())
          const friendsDetails = await fetchFriendsDetails(friendUsernames)
          setFriends(friendsDetails)
        }
      } catch (error) {
        console.error("Error fetching friends:", error.message)
      }
    }

    if (username) {
      fetchFriends()
    }
  }, [username])

  function addFriendsCelebratingInfo(allFestivals, friends) {
    const festivalsWithFriends = []
    console.log("inside friends", friends)

    // Iterate through each festival object in the combined array
    for (const festivalObject of allFestivals) {
      const festival = festivalObject.festival

      // Find friends celebrating this festival
      const friendsCelebrating = friends
        .filter((friend) =>
          friend?.celebrations?.some(
            (celebration) => celebration.name === festival.festivalName
          )
        )
        .map((friend) => friend.firstName)

      // Create the festival object with friendsCelebrating information
      const festivalWithFriends = {
        festival: {
          ...festival,
          friendsCelebrating: friendsCelebrating,
        },
      }

      // Push the festivalWithFriends object to the result array
      festivalsWithFriends.push(festivalWithFriends)
    }

    return festivalsWithFriends
  }

  // Use the function with the allFestivals array
  const festivalsWithFriends = addFriendsCelebratingInfo(
    allFestivalsInMonth,
    friends
  )

  console.log(festivalsWithFriends)

  return (
    <>
      <TopBar />
      <img src={notification} alt='' style={{ maxWidth: "100%" }} />
      <Typography mb={2} mt={5} variant='h4'>
        Birthdays
      </Typography>
      {friendsWithBirthdays.length !== 0 && (
        <>
          {friendsWithBirthdays.map((friend) => {
            return (
              <>
                <Stack spacing={2} direction={"column"}>
                  <Chip label={friend.username} />
                  <Typography>
                    Your friend {friend.firstName} {friend.lastName} is
                    celebrating his birthday today
                  </Typography>
                  {friend?.foodItems?.length !== 0 && (
                    <Typography>
                      {friend.firstName} likes to eat{" "}
                      {friend?.foodItems?.join(", ")}
                    </Typography>
                  )}
                  {friend?.restaurants?.length !== 0 && (
                    <Typography>
                      {friend.firstName}'s favorite restaurants are
                      {friend?.restaurants?.join(", ")}
                    </Typography>
                  )}
                  <Typography>
                    Let's make this birthday, a memorable one for{" "}
                    {friend.firstName}!
                  </Typography>
                </Stack>
              </>
            )
          })}
        </>
      )}

      <Typography mb={2} mt={5} variant='h4'>
        This Month's Important Days
      </Typography>
      {festivalsWithFriends.length !== 0 && (
        <>
          {festivalsWithFriends.map((festivalWithFriends) => {
            const festival = festivalWithFriends.festival
            console.log("festivalWithFriends", festival)
            return (
              <Stack
                mb={5}
                mt={2}
                spacing={2}
                direction='column'
                key={festival.festivalName}
              >
                <Chip label={`${festival.festivalName}`} />
                <Typography>
                  Month {festival.festivalMonth} - Day {festival.festivalDay}
                </Typography>
                <Typography>What : {festival.festivalDescription}</Typography>
                <Typography>Importance : {festival.importance}</Typography>
                <Typography>How to Greet : {festival.howToGreet}</Typography>
                {festival.friendsCelebrating.length !== 0 && (
                  <Typography variant='h6'>
                    Friends Celebrating:{" "}
                    {festival.friendsCelebrating.join(", ")}
                  </Typography>
                )}
              </Stack>
            )
          })}
        </>
      )}
    </>
  )
}

export default NotificationPage
