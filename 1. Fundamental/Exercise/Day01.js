// Soal 1 (Write a code to find area of rectangle)
var lenght = 5
var width = 3
console.log(lenght * width)

// Soal 2 (Write a code to find perimeter of rectangle)
var lenght = 5
var width = 3
console.log(2 * (lenght + width))

// Soal 3 (Write a code to find diameter, circumference and area of a circle)
var radius = 7
var diamter = 2 * radius
var circumference = Math.PI * diamter
var area = Math.PI * Math.pow(radius, 2)
console.log('Diameter: ' + diamter, 'Circumference: ' + circumference, 'Area: ' + area)

// Soal 4 (Write a code to find angles of triangle if two angles are given)
var angle1 = 30 
var angle2 = 60
var angle3 = 180 - (angle1 + angle2)
console.log(angle3)

// Soal 5 (Write a code to find difference between dates in days)
var now = new Date('2024-04-29')
var tommorow = new Date('2024-04-30')
var diff = tommorow - now
var days = diff / (1000 * 60 * 60 * 24)
console.log(days + ' days left')

// Soal 6 (Write a code to convert days to years, months and days)
var days = 400
var years = Math.floor(days / 365)
var remainingDays = days % 365
var months = Math.floor(remainingDays / 30)
var day = remainingDays % 30
console.log(years + ' years', months + ' months', day + ' days')