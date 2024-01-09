import { useEffect, useState } from "react"
import { getUsernameFromLocalStorage } from "../../localStorage/LocalStorage"
import TopBar from "../topBar/TopBar"
import { get, getDatabase, ref } from "firebase/database"
import { Chip, Stack, Typography } from "@mui/material"

function NotificationPage() {
  const username = getUsernameFromLocalStorage()
  console.log("username", username)
  const [friends, setFriends] = useState([])
  const [friendsWithBirthdays, setFriendsWithBirthdays] = useState([])
  const db = getDatabase()

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

  return (
    <>
      <TopBar />
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
                  {friend.foodItems.length !== 0 && (
                    <Typography>
                      {friend.firstName}'s He likes to eat{" "}
                      {friend.foodItems.join(", ")}
                    </Typography>
                  )}
                  {friend.restaurants.length !== 0 && (
                    <Typography>
                      {friend.firstName}'s favorite restaurants are
                      {friend.restaurants.join(", ")}
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
    </>
  )
}

export default NotificationPage
