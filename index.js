module.exports.TimestampToDate = (timestamp, options) => {
    let date = new Date(timestamp * 1000);
    let locales = options.locales ? options.locales : undefined;
    let FormatOptions = {};
    if(options.timeZone) {
        FormatOptions["timeZone"] = options.timeZone;
    }
    if(options.hourCycle) {
        FormatOptions["hourCycle"] = options.hourCycle;
    }
    if(options.year) {
        FormatOptions["year"] = options.year;
    }
    if(options.month) {
        FormatOptions["month"] = options.month;
    }
    if(options.day) {
        FormatOptions["day"] = options.day;
    }
    if(options.hour) {
        FormatOptions["hour"] = options.hour;
    }
    if(options.minute) {
        FormatOptions["minute"] = options.minute;
    }
    if(options.second) {
        FormatOptions["second"] = options.second;
    }

    let formatter = new Intl.DateTimeFormat(locales, FormatOptions);

    let formattedData = formatter.format(date);
    if(options.separator) {
        return formattedData.split("/").join(options.separator);
    }
    return formattedData;

}