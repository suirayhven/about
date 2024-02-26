Vue.component('accordion', {
props: ['title'],
template:
`
<div class="V-accordion">
<div class="V-accordion_trigger" @click="open = !open" :class="{ 'open': open, 'closed': !open }">
<div class="V-accordion-flex-box">
                        <div class="V-accordion-flex-box-child1">

{{ title }}

</div>
<div class="V-accordion-flex-box-child2">
<svg class="V-accordion_trigger-icon" :class="{open:open}" width="20" height="12">
<polygon points="6,2 10,10 14,2" fill="#3d3a35"></polygon></svg>
</div>
</div>

</div>
<transition :name="animation">
<div class="V-accordion_body" v-show="open">
<slot></slot>
</div>
</transition>
</div>
`,
props: {
title: {
type: String,
default: 'FAQ'
},
animation: {
type: String,
default: 'accordion'
}
},
data() {
return {
open: false
}
}
});

const vm = new Vue({
el: ".app",
data: {
},
computed: {
},
methods: {
},
mounted() {
}
});