// console.log("test")
let currentHour = moment().hours()
const saveBtn = document.querySelectorAll('.saveBtn')

saveBtn.forEach(button => {
    button.addEventListener('click', e => {
        let value = button.parentNode.children[1].value
        let time = button.parentNode.id

        localStorage.setItem(time, value)
    })
})

const updateTimeBlocks = () => {
    let timeBlocks = document.querySelectorAll('.time-block')
    timeBlocks.forEach(hour => {
        let blockHour = parseInt(hour.id.split('-')[1])

        if (blockHour < currentHour) {
            hour.classList.add('past')
        } else if (blockHour === currentHour) {
            hour.classList.remove('past')
            hour.classList.add('present')
        } else {
            hour.classList.remove('past')
            hour.classList.remove('present')
            hour.classList.add('future')
        }
    })
}

// load from storage
for (let i = 9; i <= 17; i++) {
    document.getElementById(
        `hour-${i}`
    ).children[1].value = localStorage.getItem(`hour-${i}`)
}

// show current time
document.getElementById('currentDay').textContent = moment().format(
    'dddd, MMMM Do'
)

updateTimeBlocks()
