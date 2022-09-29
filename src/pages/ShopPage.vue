<template>
    <div class="wrapper">


<!-- Breadcrumb Start -->
<div class="breadcrumb-area ptb-60 ptb-sm-30">
   <div class="container">
       <div class="breadcrumb">
           <ul>
               <li><a href="#">Главная</a></li>
               <li class="active"><a href="#">Каталог</a></li>
           </ul>
       </div>
   </div>
   <!-- Container End -->
</div>
<!-- Breadcrumb End -->
<!-- Shop Page Start -->
<div class="main-shop-page pb-60">
   <div class="container">
       <!-- Row End -->
       <div class="row">
           <!-- Sidebar Shopping Option Start -->
           <div class="col-lg-3  order-2">
               <div class="sidebar white-bg">
                   <div 
                   style="padding-left:15px; padding-right:15px"
                   class="single-sidebar">
                       <div class="group-title">
                           <h2>Категории:</h2>
                       </div>

                       <!-- Menu Groups --->

                       <span>тут меню</span> 
                       <!-- END Menu Groups -->





                   </div>
                   <div class="single-sidebar">
                       <div class="group-title">
                           <h2>Диапозон цен:</h2>
                       </div>
                       <form action="#">
                           <div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                               <div class="ui-slider-range ui-corner-all ui-widget-header" ></div>
                           </div>
                               <input id="amount" class="amount" readonly="" type="text">
                       </form>
                   </div>
                   <!-- Single Banner Start -->
                   <div class="single-sidebar single-banner zoom pt-20">
                       <a href="#" class="hidden-sm"><img src="/img/banner/8.jpg" alt="slider-banner"></a>
                       <a href="#" class="visible-sm"><img src="/img/banner/6.jpg" alt="slider-banner"></a>
                   </div>
                   <!-- Single Banner End -->
               </div>
           </div>
           <!-- Sidebar Shopping Option End -->                    
           <!-- Product Categorie List Start -->
           <div class="col-lg-9 order-lg-2">
               <!-- Grid & List View Start -->
               <div class="grid-list-top border-default universal-padding fix mb-30">
                   <div class="grid-list-view f-left">
                       <ul class="list-inline nav">
                           <!-- <li><a data-toggle="tab" href="#grid-view"><i class="fa fa-th"></i></a></li> -->
                           <li><a  class="active" data-toggle="tab" href="#list-view"><i class="fa fa-list-ul"></i></a></li>
                           <li><span class="grid-item-list"> Товары 1-12 of 13</span></li>
                       </ul>
                   </div>
                   <!-- Toolbar Short Area Start -->
                   <div class="main-toolbar-sorter f-right">
                       <div class="toolbar-sorter">
                           <label>Сортировать: </label>
                           <!--<select class="sorter" name="sorter">
                               <option value="Position" selected="selected">Позиция</option>
                               <option value="Product Name">от А до Я</option>
                               <option value="Price">По цене</option>
                           </select>-->
                           <span><a href="#" @click="sortASC()"><i class="fa fa-arrow-up"></i></a></span>
                           <span><a href="#" @click="sortDESC()"><i class="fa fa-arrow-down"></i></a></span>
                       </div>
                   </div>
                   <!-- Toolbar Short Area End -->
               </div>


               <div v-if="loading" class="media">

                    <div class="media-body">
                        <HourGlass
                        class="mt-0"
                        style="
                        text-align: center;
                        margin-left: auto;
                        margin-right: auto;
                        color: red;
                        "
                    ></HourGlass>

                    </div>
                </div>



               <!-- Grid & List View End -->
               <div class="main-categorie">
                   <!-- Grid & List Main Area End -->
                   <div class="tab-content fix">
                       <div id="grid-view" class="tab-pane ">
                           <div class="row">

                            
                            
                                   <!-- Single Product Start -->                    
                                   <div class="col-lg-4 col-sm-6"
                                        v-for="item in items"
                                        :key="item.id"
                                    >
                                       <div class="single-product">
                                           <!-- Product Image Start -->
                                           <div class="pro-img">
                                               <router-link :to="{ name:DetailPage, params:{id: item.id} }">
                                                   <img class="primary-img" :src="BASE_URL +'/storage/img/products/l' + item.article  +  '.jpg'" alt="single-product">                                                       
                                               </router-link>
                                           </div>
                                           <!-- Product Image End -->
                                           <!-- Product Content Start -->
                                           <div class="pro-content">
                                               <h4><a href="#"> $item->name </a></h4>
                                               <p><span class="price"> $item->price  руб.</span> <!-- <del class="prev-price">{{ $item->price }} руб.</del> --></p>
                                               <div class="pro-actions">
                                                   <div class="actions-secondary">
                                                       <a href="wishlist.html" data-toggle="tooltip" title="Add to Wishlist"><i class="fa fa-heart"></i></a>
                                                       <a class="add-cart add-to-cart" data-id="<?= $item->id ?>" href="#" data-toggle="tooltip" title="Add to Cart">
                                                           В корзину
                                                       </a>
                                                       <a href="compare.html" data-toggle="tooltip" title="Add to Compare"><i class="fa fa-signal"></i></a>
                                                   </div>
                                               </div>
                                           </div>
                                           <!-- Product Content End -->
                                       </div>
                                   </div>
                                   <!-- Single Product End --> 

                                           
                                              
                           </div>                                    
                       </div>

                       <!-- #grid view End -->
                       <div id="list-view" class="tab-pane active">
                           <!-- Single Product Start -->
                           
                               <div class="single-product"
                                    v-for="item in items"
                                    :key="item.id"
                               >                                       
                                   <div class="pro-img">                                      
                                       <router-link :to="{ name:'DetailPage', params:{id: item.id} }">
                                                   <img class="primary-img" :src="BASE_URL +'/storage/img/products/l' + item.article  +  '.jpg'" alt="single-product">                                                       
                                        </router-link>
                                   </div>
                                   
                                   <div class="pro-content">
                                       <h4><router-link :to="{ name:'DetailPage', params:{id: item.id} }">  {{ item.name }}  </router-link></h4>
                                       <p><span class="price"> {{ item.price }}  руб.</span> <!-- <del class="prev-price">{{ $item->price }}  руб.</del> --></p>
                                       <p><span>Артикул:  {{ item.article }} </span></p>
                                       <p>  {{ item.description }} </p>
                                       <div class="pro-actions">
                                           <div class="actions-secondary">
                                               <button class="btn add-cart add-to-cart"  @click="addToCart(item)" data-toggle="tooltip" title="Add to Cart">В корзину</button>
                                           </div>
                                       </div>
                                   </div>                                  
                               </div> 
                          

                       </div>
                       <!-- #list view End -->
                   </div>
                   <!-- Grid & List Main Area End -->
               </div>

         
           
                <paginate 
                    v-model="page"
                    :page-count="meta_page.last_page"
                    :page-range="3"
                    :margin-pages="3"
                    :click-handler="changePage"
                    :prev-text="'Prev'"
                    :next-text="'Next'"
                    :container-class="'pagination'"
                    :page-class="'page-item'"
                    >
                </paginate>



               


               <!--Breadcrumb and Page Show End -->
           </div>
           <!-- product Categorie List End -->
       </div>
       <!-- Row End -->
   </div>
   <!-- Container End -->
</div>
<!-- Shop Page End -->

</div>
</template>

<script>
import {BASE_URL} from "@/main";
import paginate from 'vuejs-paginate-next';
import { HourGlass } from "vue-loading-spinner";


    export default {
        components: {
            paginate: paginate,
            HourGlass
        },
        data(){
            return{
                BASE_URL,
                page: 1,
                meta_page: 0,                             
            }
        },
        computed:{
            items(){
                return this.$store.getters.items;
            },

            loading() {                
                return this.$store.getters.loading;
            },
        
        },
        created() {  
            
            this.$store.dispatch("asyncGetItems");
           
        },
        updated(){
            this.meta_page = this.$store.getters.paginations
        },
        methods: {
            changePage: function (pageNum = 1) {
                console.log(pageNum);

                this.$store.dispatch('asyncGetItems',{
                        pageNum,
                        method:this.method
                        })
            },

            addToCart: function(article){
                console.log(`add to cart article ${article}`);
            },

            sortASC: function (){
                this.$cookies.set("sort", "ASC") 
                console.log(`sort-ASC`)
                console.log(this.$cookies.get("sort"))
                this.changePage()
            },
            
            sortDESC: function (){
                this.$cookies.set("sort", "DESC") //value[, expires[, path[, domain[, secure[, sameSite]]]]]
                console.log(`sort-DESC`)
                console.log(this.$cookies.get("sort"))
                this.changePage()
            }
  },
    }
</script>

<style lang="css">
    /* Adopt bootstrap pagination stylesheet. */
    
  
    /* Write your own CSS for pagination */
    .pagination {
    }
    .page-item {
    }
</style>