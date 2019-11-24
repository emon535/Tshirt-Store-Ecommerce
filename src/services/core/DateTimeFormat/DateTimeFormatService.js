class DateTimeFormatService {
    static formatDate(date) {
        const dateObj = new Date(date);
        const options = { year: "numeric", month: "long", day: "numeric" };

        return dateObj.toLocaleDateString("en-US", options);
    }

    static formatTime(time) {
        time = time.split("+")[0];
        const dateObj = new Date(`01/01/1970 ${time}`);
        const options = { hour: "numeric", minute: "numeric" };

        return dateObj.toLocaleString("en-US", options);
    }

    static formatDateTime(datetime) {
        datetime = datetime.split("+")[0].replace("T", " ");
        const dateObj = new Date(datetime);
        const options = {
            year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric"
        };

        return dateObj.toLocaleDateString("en-US", options);
    }
}

export default DateTimeFormatService;
