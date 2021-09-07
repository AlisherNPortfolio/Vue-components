<!--
* Berilgan statusni clasiga qarab turli rangda chiqadi
*
* value ga item valuesi, title ga item title berildi
* options listi quyidagicha beriladi:
[{value: 1, class: 'success'},
{value: 2, class: 'warning'},
{value: 3, class: 'primary'},
{value: 4, class: 'danger'},
{value: 5, class: 'info'},
{value: 6, class: 'secondary'}]
*
* Agar custom slotga content berilsa faqat berilgan contentni chiqaradi
*
 -->
<template>
	<div>
		<span
			v-if="hasCustomSlot"
			:class="classOptions">
			<span v-if="translatable">
				{{ title | translate }}
			</span>
			<span v-else>{{ title }}</span>
		</span>
		<slot name="custom" />
	</div>

</template>
<script>
import '@/assets/styles/status-colors.scss'
export default {
    props: {
        value: {
            type: Number,
            default: null
        },
        title: {
            type: String,
            default: 'test'
        },
		translatable: {
			type: Boolean,
			default: false
		},
        options: {
            type: [Object, Array],
            default: {'test': 0}
        }
    },
    computed: {
        classOptions() {
            const options = {};
            for (let i in this.options) {
                options[this.options[i].class] = (this.value === this.options[i].value);
            }
            return options;
        },
		hasCustomSlot() {
			return !this.$slots['custom'];
		}
    }
}
</script>
