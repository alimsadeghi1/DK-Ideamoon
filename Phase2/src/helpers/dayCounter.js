

export function dayCounter(time) {
    const date = new Date();
    let day = date.toLocaleDateString();
    let dayNum = day.substring(
        day.indexOf("/") + 1,
        day.lastIndexOf("/")
    );
    return time - parseInt(dayNum) > 0 ? time - parseInt(dayNum) : 0
}