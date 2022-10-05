<template>
  <!-- Menu Groups --->

  <div id="accordion">
                           <div class=""
                                v-for = "group in groups"
                                :key="group.id"
                           >
                           
                              
                               
                                   <div class="" id="headingOne">
                                       
                                           <button 
                                           v-if ="group.children[0]"
                                           class="btn btn-link" data-toggle="collapse" :data-target="'#collapse' + group.id " 
                                               aria-expanded="true" :aria-controls="'collapse'+ group.id " 
                                               style="padding-left:0px; padding-right:0px;">
                                               +
                                           </button>  
                                          
                                      
                                           <a href="#" @click="sortGroup(group.id)" class="btn "
                                               style="font-weight:800;font-size:12px; padding:0px;">
                                               {{ group.title }} 
                                           </a>
                                   
                                                                           
                                   </div>

                                   <div :id="'collapse' + group.id" class="collapse " :aria-labelledby="'heading' + group.id " data-parent="#accordion">
                                                                            
                                           <p v-for="child in group.children"
                                            :key="child.id"
                                           >

                                               <a  class="btn" href="#"
                                                @click="sortGroup(child.id)"  
                                                   style="font-size:12px;">  

                                                  -{{ child.title }} 
                                                
                                               </a>   

                                           </p>
                                                                                

                                       
                                   </div>

                               
                           </div>                               

                       </div>
                       <!-- END Menu Groups -->  
</template>

<script>
    export default {
        data(){
            return{}
        },
        computed:{
            groups(){
                return this.$store.getters.groups;
            },
        },
        created() {
            this.$store.dispatch("asyncGetGroups");
        },
        methods:{
            changePage: function () {               

                this.$store.dispatch('asyncGetItems')
            },
            sortGroup(id){
                this.$cookies.set("groupId", id)
                console.log(`sort group = ${id}`)
                this.changePage()
            }
        }
    }
</script>