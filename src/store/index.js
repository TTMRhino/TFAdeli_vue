import { createStore } from 'vuex'
import items from '@/store/items'
import groups from '@/store/groups'
import cart from '@/store/cart'

export default createStore({
    modules: {
        items,
        groups,
        cart
    }
})