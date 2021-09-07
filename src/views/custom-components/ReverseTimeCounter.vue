/* eslint-disable */
<template>
    <div>
        <reverse-counter :days="counterTime.days" :hours="counterTime.hours" :minutes="counterTime.minutes" />
    </div>
</template>
<script>
import ReverseCounter from '@/components/pages/custom-components/ReverseCounter'
export default {
  name: 'reverse-time-counter',
  data() {
      return {
          time: this.$moment(new Date()).add(7, 'days').add(2, 'hours').add(5, 'minutes')
      }
  },
  components: {ReverseCounter},
  computed: {
        counterTime() {
            const publicDate = this.$moment(this.time);
            const today = new Date();
            const minutesAll = this.$moment.duration(publicDate.diff(today)).asMinutes();
            const minutes = Math.floor(minutesAll % 60),
                hours = Math.floor((minutesAll / 60) % 24),
                days  = Math.floor(minutesAll / (60 * 24));

            console.log(days, hours, minutes);
            return {minutes, hours, days};
        }
    }
}
</script>
