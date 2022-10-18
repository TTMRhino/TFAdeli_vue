<template>
<div class="wrapper">
    <div class="breadcrumb-area pt-60 pb-55 pt-sm-30 pb-sm-20">
        <div class="container">
            <div class="breadcrumb">
                <ul>
                    <li><router-link to="/">Главная</router-link></li>
                    <li class="active"><a href="#">Заказ</a></li>
                </ul>
            </div>
        </div>
        <!-- Container End -->
    </div>
    <!-- Breadcrumb End -->
    <!-- coupon-area start -->
    <div class="coupon-area">
        <div class="container">
        <!-- Section Title Start -->
            <div class="section-title mb-20">
                <h2>Оформить Заказ:</h2>
            </div>
            <!-- Section Title Start End -->
            <div class="row">
                <div class="col-lg-12">
                    
            </div>
        </div>
    </div>
    <!-- coupon-area end -->
    <!-- checkout-area start -->
    <div class="checkout-area pt-30  pb-60">
        <div class="container">        
            <form action="#" method="POST"> 
               
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="checkbox-form">
                            <h3>Детали Заказа:</h3>
                            <div class="row">
                                <!--<div class="col-md-12">
                                    <div class="country-select mb-30">
                                        <label>Страна <span class="required">*</span></label>
                                        <select name="name" class="@error('name') is-invalid @enderror">
                                            <option value="Россия">Россия</option>
                                        </select>
                                    </div>
                                </div>     -->   
                                        
                                <div class="col-md-12">
                                    <div  class="checkout-form-list mtb-30" >
                                        
                                            <label>ФИО: <span class="required">*</span></label>
                                            <input v-model="state.name" type="text"
                                               
                                               
                                            >
                                            <div class="input-errors alert alert-danger" 
                                                v-if="v$.name.$error"
                                            >
                                                <div class="error-msg">{{ v$.name.$errors[0].$message }}</div>
                                            </div>
                                            
                                    </div>
                                </div>
                            
                                <div class="col-md-12">
                                    <div class="checkout-form-list">
                                        <label>Адрес доставки: <span class="required">*</span></label>
                                        <input 
                                        name="adress" class="is-invalid"
                                        v-model="state.adress"                                       
                                        type="text" />

                                            <div class="input-errors alert alert-danger" 
                                            v-if="v$.adress.$error"
                                            >
                                            <div class="error-msg">{{ v$.adress.$errors[0].$message }}</div>
                                            </div>
                                       
                                    </div>

                                    

                                </div>
                                <div class="col-md-12">
                                    <div class="checkout-form-list mtb-30">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="checkout-form-list mtb-30">
                                        <label>Город: <span class="required">*</span></label>
                                        <input 
                                        name="city" class="is-invalid"
                                        v-model="state.city"
                                        type="text" placeholder="" />

                                        <div class="input-errors alert alert-danger" 
                                        v-if="v$.city.$error"
                                    >
                                        <div class="error-msg">{{ v$.city.$errors[0].$message }}</div>
                                    </div>
                                       
                                    </div>

                                    
                                </div>
                            
                                <div class="col-md-6">
                                    <div class="checkout-form-list mb-30">
                                        <label>Индекс: <span class="required">*</span></label>
                                        <input 
                                        name="mailindex" class="is-invalid"
                                        v-model="state.mailindex"
                                        type="text" placeholder="" />

                                        <div class="input-errors alert alert-danger" 
                                        v-if="v$.mailindex.$error"
                                    >
                                        <div class="error-msg">{{ v$.mailindex.$errors[0].$message }}</div>
                                    </div>
                                       
                                    </div>

                                    
                                </div>
                                <div class="col-md-6">
                                    <div class="checkout-form-list mb-30">
                                        <label>Email: <span class="required">*</span></label>
                                        <input 
                                        name="email" class="is-invalid"
                                        v-model="state.email"
                                        type="email" placeholder="" />

                                        <div class="input-errors alert alert-danger" 
                                        v-if="v$.email.$error"
                                    >
                                        <div class="error-msg">{{ v$.email.$errors[0].$message }}</div>
                                    </div>
                                       
                                    </div>

                                   
                                </div>
                                <div class="col-md-6">
                                    <div class="checkout-form-list mb-30">
                                        <label>Телефон:  <span class="required">*</span></label>
                                        <input 
                                        name="phone" class="is-invalid"
                                        v-model="state.phone"
                                        type="text" placeholder="" />

                                        <div class="input-errors alert alert-danger" 
                                            v-if="v$.phone.$error"
                                        >
                                        <div class="error-msg">{{ v$.phone.$errors[0].$message }}</div>
                                        </div>
                                    </div>

                                    
                                       
                                </div>
                                <div class="col-md-12">
                                    <div class="checkout-form-list create-acc mb-30">
                                        <input id="cbox" type="checkbox" required
                                        name="agree"
                                        v-model="state.agree"
                                        />
                                        <label>Даю свое согласие на обработку персональных данных<span class="required">*</span></label>

                                        <div class="input-errors alert alert-danger" 
                                            v-if="v$.agree.$error"
                                        >
                                        <div class="error-msg">{{ v$.agree.$errors[0].$message }}</div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                
                    <div id="table-checkout" class="col-lg-6 col-md-6">
                        <div class="your-order">
                            <h3>Ваш Заказ:</h3>
                            <div class="your-order-table table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="product-name">Товары</th>
                                            <th class="product-total">Итого</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                            <tr class="cart_item"
                                                v-for="item in items"
                                                :key="item.id"
                                            >
                                                <td class="product-name">
                                                     {{item.name }} <strong class="product-quantity"> x {{   item.quantity }} </strong>
                                                </td>
                                                <td class="product-total">
                                                    <span class="amount"> {{ item.quantity * item.price }}  руб.</span>
                                                </td>
                                            </tr>
                                       
                                    
                                    </tbody>
                                    <tfoot>                                    
                                        <tr class="order-total">
                                            <th>Сумма Заказа:</th>
                                            <td><strong><span class="amount"> {{ totalSum }}  руб.</span></strong>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div class="payment-method">
                                <div class="payment-accordion">
                                    <div class="order-button-payment">
                                        <input type="submit" @click="submit" value="Оформить заказ" />
                                    </div>
                                </div>
                            </div>
                        </div>
                
                    </div>
                </div>
            </form>   
        </div>
    </div>
    <!-- checkout-area end -->
    </div>
</div>
</template>

<script >
import {BASE_URL} from "@/main";
import { useVuelidate } from '@vuelidate/core'
import { required, email,maxLength,minLength } from '@vuelidate/validators'
import {reactive, computed} from 'vue'
export default ({
    setup(){
        const state =reactive({
            name: '',
            adress: '',
            city: '',
            mailindex:'',
            email: '',
            phone: '',
            agree:'' 
        })

        const rules = computed(() =>{
            return{

                name: { 
                    required,
                    maxLength:maxLength(20),
                    minLength:minLength(3) 
                }, 
                adress: { 
                    required,maxLength:maxLength(30),
                    minLength:minLength(5) 
                }, 
                city: {
                    required,
                    maxLength:maxLength(25),
                    minLength:minLength(3)
                },
                email: { 
                    required, 
                    email,
                    minLength:minLength(5),
                    maxLength:maxLength(25) 
                } ,
                mailindex:{
                    maxLength:maxLength(10)
                },
                phone:{
                    minLength:minLength(5),
                    maxLength:maxLength(18)
                },
                agree:{
                    required
                }
            }
        })

       const v$ = useVuelidate(rules, state)

       return {
        state, 
        v$
       }
    },
    
    data() {
       return{
            items: this.$store.getters.getCartItems,
            BASE_URL,
                     
       } 
    },
   
    
    methods: {
        submit(){
         
          this.v$.$validate()

          if(!this.v$.$error){
            alert("Success!")
          }else{
            alert("Feild")
          }
        }
    },
    computed: {
        totalQuantity() {
            return this.$store.getters.totalQuantity;
        },
        totalSum() {
            return this.$store.getters.totalSum;
        },
    }
})
</script>
