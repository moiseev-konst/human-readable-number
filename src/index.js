module.exports = function toReadable(number) {
    let num = number
    let readable = ""
    let textNumber = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: "ten",
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: "ninety"
    }
    if (num == 0) {
        return "zero"
    }
    if (num.toString().length > 2) {
        readable = `${textNumber[Math.trunc(num / 100)]} hundred`
        num = num % 100
    }
    if (num >= 20) {
        readable += ` ${textNumber[Number(Math.trunc(num / 10).toString() + "0")]}`
        num = num % 10
    }
    if (num < 20 && num > 0) {
        readable += ` ${textNumber[num]}`
    }
    console.log(readable)
    return readable.trim()
}