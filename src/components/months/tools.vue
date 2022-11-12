<script lang="ts">
import { def } from '@vue/shared';
import NTR from "../../components/months/ntr.vue"
import CONTESTABLE from '../../components/months/contestable.vue'
export default{
    name:'monthTools',
    data(){
        return{

        }
    },
    components:{
        NTR,
        CONTESTABLE 
    }
}
</script>
<template id="monthTools" >
    <div class="mx-1 mb-1">
    <div class="flex flex-wrap mb-8" style="margin-bottom: 30px;">
        <div class="flex flex-wrap border-t border-l">
            <NTR />
            <CONTESTABLE ref="component" />
        </div>
    </div></div>
</template>