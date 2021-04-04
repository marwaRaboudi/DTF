module.exports.TimestampToDate = (timestamp, options) => {
    let date = new Date(timestamp * 1000);
    let locales = options.locales ? options.locales : undefined;
    let FormatOptions = {};
    if(options.localeMatcher) {
        FormatOptions["localeMatcher"] = options.localeMatcher;
    }
    if(options.timeZone) {
        FormatOptions["timeZone"] = options.timeZone;
    }
    if(options.hour12) {
        FormatOptions["hour12"] = options.hour12;
    }
    if(options.hourCycle) {
        FormatOptions["hourCycle"] = options.hourCycle;
    }
    if(options.formatMatcher) {
        FormatOptions["formatMatcher"] = options.formatMatcher;
    }
    if(options.weekday) {
        FormatOptions["weekday"] = options.weekday;
    }
    if(options.era) {
        FormatOptions["era"] = options.era;
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
    if(options.timeZoneName) {
        FormatOptions["timeZoneName"] = options.timeZoneName;
    }
    return new Intl.DateTimeFormat(locales, FormatOptions).format(date);

}