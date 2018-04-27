const calculateUpdateDuration = (start, callback) => {
        const diff = Date.now() - start;
        console.log(diff);
        console.log(start);
        let updateDurationString = 'Last update: just now';
        if (diff < 60000) {
           callback(updateDurationString)
        } else if (diff < 36000000) {
            updateDurationString = `Last update: ${Math.floor(diff / 60000)} minute${diff < 120000 ? "" : "s"} ago`;
            callback(updateDurationString)
        } else if (diff < 24 * 60 * 60 * 1000) {
            updateDurationString = `Last update: ${Math.floor(diff / 60 / 60 / 1000)} hours ago`;
            callback(updateDurationString)
        } else if (diff < 7 * 24 * 60 * 60 * 1000) {
            updateDurationString = `Last update: ${Math.floor(diff / 24 / 60 / 60 / 1000)} days ago`;
            callback(updateDurationString)
        } else if (diff < 30 * 24 * 60 * 60 * 1000) {
            updateDurationString = `Last update: ${Math.floor(diff / 7 / 24 / 60 / 60 / 1000)} weeks ago`;
            callback(updateDurationString)
        } else if (diff < 30 * 24 * 60 * 60 * 1000) {
            updateDurationString = `Last update: ${Math.floor(diff / 7 / 24 / 60 / 60 / 1000)} months ago`;
            callback(updateDurationString)
        }
}

export default calculateUpdateDuration;