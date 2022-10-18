<template>
  <div class="wrapper">
     <!-- Breadcrumb Start -->
     <div class="breadcrumb-area pt-60 pb-55 pt-sm-30 pb-sm-20">
        <div class="container">
            <div class="breadcrumb">
                <ul>
                    <li><router-link to="/">Главная</router-link></li>
                    <li class="active">
                        <router-link to="/cart">
                            Корзина
                        </router-link></li>
                </ul>
            </div>
        </div>
        <!-- Container End -->
    </div>
    <!-- Breadcrumb End -->
    

    

        <!-- Cart Main Area Start -->
        <div id="table"  class="cart-main-area pb-80 pb-sm-50"
            v-if="items.length > 0"
        >
            <div  class="container">
            <h2 class="text-capitalize sub-heading">Корзина</h2>
                <div class="row cart-table">
                    <div class="col-md-12">
                        <!-- Form Start -->
                        <form action="#">
                            <!-- Table Content Start -->
                            <div class="table-content table-responsive mb-50">
                                <table  >
                                    <thead>
                                        <tr>
                                            <th class="product-thumbnail">Фото</th>
                                            <th class="product-name">Товар</th>
                                            <th class="product-price">Цена</th>
                                            <th class="product-quantity">Количество</th>
                                            <th class="product-subtotal">Итого</th>
                                            <th class="product-remove">Убрать</th>
                                        </tr>
                                    </thead>
                                    <tbody >

                                     
                                            <tr v-for="item in items"
                                                :key="item.id"
                                                v-show="item.quantity"                                                
                                            >
                                          
                                                <td class="product-thumbnail">
                                                    <a href="#"><img :src=" BASE_URL + '/storage/img/products/l'+  item.article +   '.jpg'" alt="cart-image" /></a>
                                                </td>
                                                <td class="product-name"><a href="#">{{ item.name }}</a></td>
                                                <td class="product-price"><span class="amount">{{ item.price }} руб.</span></td>
                                                <td class="product-quantity">
                                                    <!-- <input type="number" value="{{ $item['qty'] }}" />-->

                                                   
                                                                                            
                                                        <div class="alert alert-warning " role="alert" style=" text-align:center; padding:0;"
                                                            v-if = "item.remains < item.qty"
                                                        >
                                                            Под заказ!
                                                        </div>
                                                    

                                                    <button type="button"   class="btn btn-light minus" 
                                                        @click="changeQuantity(item, -1)">-</button>

                                                        <input id="'count'+{{ item.id }}"  disabled
                                                           
                                                            type="text" :value="item.quantity " />

                                                    <button type="button"  class="btn btn-light plus"
                                                        @click="changeQuantity(item, 1)"
                                                    >+</button>


                                                </td>
                                                <td class="product-subtotal">{{ item.quantity * item.price }} руб.</td>

                                                <td class="product-remove " > 
                                                    <a href=" #" class="delete"
                                                       @click=deleteItem(item)    
                                                    >
                                                        <i class="fa fa-times" aria-hidden="true"></i>
                                                    </a>
                                                </td>

                                            
                                            </tr>
                                        

                                    </tbody>
                                </table>
                            </div>
                            <!-- Table Content Start -->
                            <div class="row">
                            <!-- Cart Button Start -->
                                <div class="col-lg-8 col-md-7">
                                    <div class="buttons-cart">
                                       <router-link to="/shop">Продолжить покупки</router-link>                                       
                                    </div>
                                </div>
                                <!-- Cart Button Start -->
                                <!-- Cart Totals Start -->
                                <div class="col-lg-4 col-md-12">
                                    <div class="cart_totals">
                                        <h2>Всего по заказу</h2>
                                        <br />
                                        <table>
                                            <tbody>                                               
                                                <tr class="order-total">
                                                    <th>Итог:</th>
                                                    <td>
                                                        <strong><span class="amount">{{ totalSum }} руб</span></strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="wc-proceed-to-checkout">
                                            <router-link to="/CheckOut">Оформить Заказ</router-link>
                                        </div>
                                    </div>
                                </div>
                                <!-- Cart Totals End -->
                            </div>
                            <!-- Row End -->
                        </form>
                        <!-- Form End -->
                    </div>
                </div>
                <!-- Row End -->
            </div>
        </div>
        <!-- Cart Main Area End -->
   
    <div class="cart-main-area pb-80 pb-sm-50"
        v-else
    >
        <div class="container">
            <h2>
                Корзина пуста
            </h2>
        </div>
    </div>
  
    
</div>
</template>

<script>
import {BASE_URL} from "@/main";
export default {
 data(){
    return{
        items: this.$store.getters.getCartItems,
        BASE_URL
    }   
 },
 computed: {
        totalQuantity() {
            return this.$store.getters.totalQuantity;
        },
        totalSum() {
            return this.$store.getters.totalSum;
        },
    },
methods: {
    changeQuantity(item, quantity) {
      //TO DO ......
     
      
      this.$store.dispatch("addToCart", { item, quantity });
      //this.items = this.$store.getters.getCartItems
     
    },

    deleteItem(item) {
      this.$store.dispatch("deleteItemFromCart", { item });
      this.items = this.$store.getters.getCartItems
    },
  },

 
}
</script>