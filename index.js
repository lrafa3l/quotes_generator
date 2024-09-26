import { generateTextAndImage } from "./utils.js"

// 1. Change the value of the variable to your name
let name = "Lando Rafael"

// 2. Change the value of the variable to your favorite activity
let favoriteActivity = "reading"

// 3. Assign the favoritePlace variable your favorite place
// I.e. city, mountain, pub, forrest, beach, Manhattan, etc.
let favoritePlace = "school"

// 4. Configure the AI by setting a temperature from 0 to 1
// The higher temperature, the more random & experimental output
let temperature = 0.5
// Optional: delete "avatar.jpg" and add a photo of yourself
// (remember to use "avatar.jpg" as the name of your photo)

generateTextAndImage(name, favoriteActivity, favoritePlace, temperature)
