<template>
    <div>
        <counter :border="fullLength" :offset="daysCounter" innerColor="#FF5050" :text="daysCounter" className="mr-5" />
        <counter :border="24" :offset="hoursCounter" :text="hoursCounter" innerColor="purple" className="mr-5" />
        <counter :border="60" :offset="minutesCounter" innerColor="purple" :text="minutesCounter" />
    </div>
</template>
<script>
import Counter from './Counter';

export default {
    name: 'reverse-counter',
    props: {
        days: {
            type: Number,
            default: 0
        },
        hours: {
            type: Number,
            default: 0
        },
        minutes: {
            type: Number,
            default: 0
        },
        fullLength: {
            type: [Number, String],
            default: 0
        }
    },
    components:{Counter},
    data() {
        return {
            daysCounter: 0,
            hoursCounter: 0,
            minutesCounter: 0,
            seconds: 1,
            timer: null
        }
    },
    created() {
        this.initTime();
        this.initCounter();
    },
    methods: {
        initTime() {
            this.daysCounter = this.days;
            this.hoursCounter = this.hours;
            this.minutesCounter = this.minutes;
        },
        initCounter() {
            this.decrementMinutes();

            this.timer = setInterval(() => {
                this.decrementSeconds();
            }, 1000);
        },
        decrementSeconds() {
            this.seconds--;
            if (this.seconds <= 0) {
                this.decrementMinutes();
            }
        },
        decrementMinutes() {
            if (this.minutesCounter <= 0) {
                if (this.decrementHours()) return true;
            }
            this.minutesCounter -= 1;
            this.seconds = 60;
        },
        decrementHours() {
            if (this.hoursCounter <= 0) {
                if (this.decrementDays()) return true;
            }
            this.hoursCounter -= 1;
            this.minutesCounter = 60;
        },
        decrementDays() {
            if (this.daysCounter <= 0) {
                clearInterval(this.timer);
                return true;
            }
            this.daysCounter -= 1;
            this.hoursCounter = 24;
        },
        resetCounter() {
            this.seconds = 0;
        }
    },
    beforeDestroy() {
        this.resetCounter();
    }
}
</script>
<style scoped>
.days, .hours, .minutes {
    width: 150px;
    height: 150px;
    border: 5px solid #ccc;
    padding: 10px 15px;
    border-radius: 50%;
    font-size: 12px;
}
</style>