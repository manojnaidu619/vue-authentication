import Home from './components/Home.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

export const routes = [
  {path: '/', component: Home},
  {path: '/signin', component: SignIn},
  {path: '/signup', component: SignUp}
]
