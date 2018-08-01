/*
This mixin uses moment.js to assist with easy time & date formatting.
*/
import moment from 'moment'

const TimeHelper = {
  methods: {
    /*
    Returns something like '2 days ago' based on a standard
    date input ie. YYYY-MM-DD.
    */
    fromNow: function (date) {
      return moment(date, 'YYYY-MM-DD').fromNow()
    }
  }
}
export default TimeHelper
