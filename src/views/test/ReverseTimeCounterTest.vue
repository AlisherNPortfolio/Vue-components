<template>
    <svg id="svg1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="200" height="200" viewBox="0 0 120 120" @click="animate()" >
        <rect width="100%" height="100%" fill="#D0D0D0" />
        <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="#E1E1E1"
            stroke-width="8"
        />
        <circle
            cx="60"
            cy="60"
            :r="radius"
            transform="rotate(-90 60 60)"
            fill="none"
            :stroke-dashoffset="offset"
            :stroke-dasharray="border"
            stroke="dodgerblue"
            stroke-width="8" >
        </circle>
        <text id="count" x="50%" y="50%" fill="#717171" text-anchor="middle" dy="7" font-size="20">Click</text>

    </svg>
</template>

<script>
    export default {
        name: 'test',
        data() {
            return {
                offset: 0,
                radius: 50,
                step: null,
                timer: null
            }
        },
        methods: {
            animate() {
                this.step = this.border / 60;
                this.timer = setInterval(() => {
                    if (this.offset >= this.border) {
                        clearInterval(this.timer);
                        return;
                    }
                    this.offset += this.step;
                }, 1000)
            }
        },
        computed: {
            border() {
                return 2 * this.radius * Math.PI;
            }
        },
        watch: {
            'offset': function (val) {
                console.log('test', this.offset)
            }
        }
    }
</script>
