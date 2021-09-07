<template>
    <div :class="`counter-wrapper ${className}`">
        <svg id="svg1" xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink"   
            :width="size || '100%'" :height="size || '100%'" :viewBox="`0 0 ${viewBoxSize} ${viewBoxSize}`" >  
            <circle 
                :cx="viewBoxSize/2" 
                :cy="viewBoxSize/2" 
                :r="radius" 
                fill="none" 
                :stroke="outerColor" 
                :stroke-width="circleWidth"
            />
            <circle 
                :cx="viewBoxSize/2" 
                :cy="viewBoxSize/2" 
                :r="radius" 
                :transform="transform" 
                fill="none" 
                :stroke-dashoffset="offsetPoints" 
                :stroke-dasharray="dashArrays"  
                :stroke="innerColor" 
                :stroke-width="circleWidth" >
            </circle>
            <text fill="currentColor" x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" :font-size="textSize">{{ text }}</text>
            
        </svg>
    </div>
</template>
<script>
export default {
    name: 'counter',
    props: {
        offset: {
            type: [Number, String],
            default: 0
        },
        border: {
            type: [Number, String],
            default: 0
        },
        text: {
            type: [Number, String],
            default: 0
        },
        circleWidth: {
            type: [Number, String],
            default: 20
        },
        outerColor: {
            type: String,
            default: '#E1E1E1'
        },
        innerColor: {
            type: String,
            default: 'dodgerblue'
        },
        textSize: {
            type: [Number, String],
            default: 60
        },
        viewBoxSize: {
            type: [Number, String],
            default: 200
        },
        outerWidth: {
            type: Number,
            default: 20
        },
        innerWidth: {
            type: Number,
            default: 20
        },
        size: {
            type: String,
            default: '40'
        },
        className: {
            type: String,
            default: ''
        }
    },
    methods: {
        getWidth(width) {
            return width * this.viewBoxSize / 200;
        }
    },
    computed: {
        radius() {
            return (+this.viewBoxSize - Math.max(this.getWidth(this.outerWidth), this.getWidth(this.innerWidth)))/2;
        },
        height() {
            return this.width;
        },

        dashArrays() {
            return 2 * Math.PI * this.radius;
        },

        getRatio() {
            return this.offset / this.border;
        },

        transform() {
            return `rotate(-90 ${this.viewBoxSize / 2} ${this.viewBoxSize / 2})`
        },

        offsetPoints() {
            return (this.dashArrays / this.border) * (this.border - this.offset);
        }
    }
}
</script>
<style scoped>
.counter-wrapper {
    display: inline-flex;
}
</style>